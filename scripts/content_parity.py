#!/usr/bin/env python3
"""Capture and compare semantic content for the Wayfinders parity migration.

The script intentionally uses only Python's standard library. It reads the
current-navigation routes from docs/migration-inventory.csv, captures the
public Squarespace and Vercel pages, and writes a reproducible JSON baseline
and a human-readable gap report.
"""

from __future__ import annotations

import argparse
import csv
import datetime as dt
import html
import json
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from html.parser import HTMLParser
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_INVENTORY = ROOT / "docs" / "migration-inventory.csv"
DEFAULT_SNAPSHOT = ROOT / "docs" / "content-parity" / "baseline.json"
DEFAULT_REPORT = ROOT / "docs" / "content-parity" / "baseline-report.md"
SOURCE_BASE = "https://www.wayfindersonthehudson.com"
TARGET_BASE = "https://wayfinders-neon.vercel.app"
SEMANTIC_TAGS = {"h1", "h2", "h3", "h4", "h5", "h6", "p", "li", "blockquote"}
SKIP_TAGS = {"script", "style", "noscript", "template", "svg"}
SPACE = re.compile(r"\s+")
WORD = re.compile(r"\b[\w’'-]+\b", re.UNICODE)


def normalize(value: str) -> str:
    return SPACE.sub(" ", html.unescape(value)).strip()


class SemanticParser(HTMLParser):
    """Extract reviewable content from the document's main region."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.title_parts: list[str] = []
        self.in_title = False
        self.main_depth = 0
        self.skip_depth = 0
        self.captures: list[dict[str, Any]] = []
        self.blocks: list[dict[str, str]] = []
        self.links: list[dict[str, str]] = []
        self.images: list[dict[str, str]] = []
        self.embeds: list[dict[str, str]] = []
        self.forms: list[dict[str, Any]] = []
        self.form_stack: list[dict[str, Any]] = []

    def handle_starttag(self, tag: str, attrs_list: list[tuple[str, str | None]]) -> None:
        attrs = {key: value or "" for key, value in attrs_list}
        if tag == "title":
            self.in_title = True
        if tag == "main" or (tag == "div" and attrs.get("id") == "page"):
            self.main_depth += 1
        elif self.main_depth:
            self.main_depth += 1

        if not self.main_depth:
            return
        if tag in SKIP_TAGS:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return

        # Capture only the outer semantic block. Squarespace often nests a
        # paragraph inside a list item; counting both would duplicate words.
        if tag in SEMANTIC_TAGS and not any(capture["tag"] in SEMANTIC_TAGS for capture in self.captures):
            self.captures.append({"tag": tag, "parts": []})
        if tag == "a" and attrs.get("href"):
            capture = {"tag": "a", "parts": [], "href": attrs["href"]}
            self.captures.append(capture)
        if tag == "img":
            src = attrs.get("src") or attrs.get("data-src") or attrs.get("data-image")
            if src:
                self.images.append(
                    {
                        "src": src,
                        "alt": normalize(attrs.get("alt", "")),
                        "title": normalize(attrs.get("title", "")),
                    }
                )
        if tag in {"iframe", "video", "source"} and attrs.get("src"):
            self.embeds.append({"type": tag, "src": attrs["src"]})
        if tag == "form":
            form = {"action": attrs.get("action", ""), "method": attrs.get("method", "get"), "fields": []}
            self.forms.append(form)
            self.form_stack.append(form)
        if tag in {"input", "textarea", "select", "button"} and self.form_stack:
            self.form_stack[-1]["fields"].append(
                {
                    "type": attrs.get("type", tag),
                    "name": attrs.get("name", ""),
                    "required": "required" in attrs,
                }
            )

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        if not self.main_depth:
            return
        if tag in SKIP_TAGS and self.skip_depth:
            self.skip_depth -= 1
        elif not self.skip_depth:
            for index in range(len(self.captures) - 1, -1, -1):
                capture = self.captures[index]
                if capture["tag"] == tag:
                    text = normalize("".join(capture["parts"]))
                    self.captures.pop(index)
                    if tag == "a":
                        self.links.append({"text": text, "href": capture["href"]})
                    elif text:
                        self.blocks.append({"type": tag, "text": text})
                    break
            if tag == "form" and self.form_stack:
                self.form_stack.pop()
        self.main_depth -= 1

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title_parts.append(data)
        if self.main_depth and not self.skip_depth:
            for capture in self.captures:
                capture["parts"].append(data)

    def result(self) -> dict[str, Any]:
        # Squarespace frequently emits the same responsive image more than once.
        images = unique_dicts(self.images, ("src", "alt"))
        links = unique_dicts(self.links, ("href", "text"))
        blocks = unique_dicts(self.blocks, ("type", "text"))
        visible_text = " ".join(block["text"] for block in blocks)
        return {
            "title": normalize("".join(self.title_parts)),
            "word_count": len(WORD.findall(visible_text)),
            "blocks": blocks,
            "links": links,
            "images": images,
            "embeds": unique_dicts(self.embeds, ("type", "src")),
            "forms": self.forms,
            "counts": {
                "blocks": len(blocks),
                "headings": sum(block["type"].startswith("h") for block in blocks),
                "links": len(links),
                "images": len(images),
                "embeds": len(self.embeds),
                "forms": len(self.forms),
            },
        }


def unique_dicts(items: list[dict[str, str]], keys: tuple[str, ...]) -> list[dict[str, str]]:
    seen: set[tuple[str, ...]] = set()
    output = []
    for item in items:
        identity = tuple(item.get(key, "") for key in keys)
        if identity not in seen:
            seen.add(identity)
            output.append(item)
    return output


def routes_from_inventory(path: Path) -> list[str]:
    with path.open(newline="", encoding="utf-8") as source:
        routes = [row["path"] for row in csv.DictReader(source) if row["navigation_status"] == "current navigation"]
    return sorted(set(routes), key=lambda route: (route != "/", route))


def fetch(base: str, route: str, timeout: int) -> dict[str, Any]:
    url = urllib.parse.urljoin(base.rstrip("/") + "/", route.lstrip("/"))
    request = urllib.request.Request(url, headers={"User-Agent": "Wayfinders content parity audit/1.0"})
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            body = response.read().decode(response.headers.get_content_charset() or "utf-8", errors="replace")
            parser = SemanticParser()
            parser.feed(body)
            return {"url": response.geturl(), "status": response.status, **parser.result()}
    except urllib.error.HTTPError as error:
        return {"url": url, "status": error.code, "error": str(error)}
    except (urllib.error.URLError, TimeoutError) as error:
        return {"url": url, "status": None, "error": str(error)}


def ratio(source: int, target: int) -> str:
    if not source:
        return "n/a"
    return f"{target / source:.0%}"


def report_markdown(snapshot: dict[str, Any]) -> str:
    lines = [
        "# Content parity baseline report",
        "",
        f"> Generated {snapshot['captured_at']} by `python3 scripts/content_parity.py`.",
        "",
        "This is a triage report, not proof of parity. Word and element counts identify likely gaps; every page still requires semantic and visual review.",
        "",
        "| Route | Source | Target | Source words | Target words | Ratio | Source images | Target images | Source forms | Target forms |",
        "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    ]
    for page in snapshot["pages"]:
        source, target = page["source"], page["target"]
        source_counts, target_counts = source.get("counts", {}), target.get("counts", {})
        lines.append(
            f"| `{page['route']}` | {source.get('status', 'error')} | {target.get('status', 'error')} | "
            f"{source.get('word_count', 0)} | {target.get('word_count', 0)} | "
            f"{ratio(source.get('word_count', 0), target.get('word_count', 0))} | "
            f"{source_counts.get('images', 0)} | {target_counts.get('images', 0)} | "
            f"{source_counts.get('forms', 0)} | {target_counts.get('forms', 0)} |"
        )
    lines.extend(
        [
            "",
            "## How to use this report",
            "",
            "1. Open the corresponding route entry in `baseline.json`.",
            "2. Give every source block, link, image, embed, and form an explicit implementation disposition.",
            "3. Flag conflicting dates, ages, prices, names, locations, or destinations for owner resolution.",
            "4. Re-run this script after the batch implementation and investigate every unexplained gap.",
            "5. Complete desktop/mobile visual review before calling the page content-complete.",
            "",
            "## Capture limitations",
            "",
            "- Counts exclude the shared header and footer by limiting extraction to `<main>`.",
            "- Lazy or script-rendered embeds may require browser inspection and screenshots.",
            "- A repeated source block may be deduplicated in the structured snapshot; repetition that is editorially intentional must be recorded during review.",
            "- Successful links are not proof that dates, prices, registration ownership, or image rights are approved.",
            "- The temporary Vercel hostname is only the comparison target; publication remains a separate approval.",
            "",
        ]
    )
    return "\n".join(lines)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--inventory", type=Path, default=DEFAULT_INVENTORY)
    parser.add_argument("--source-base", default=SOURCE_BASE)
    parser.add_argument("--target-base", default=TARGET_BASE)
    parser.add_argument("--snapshot", type=Path, default=DEFAULT_SNAPSHOT)
    parser.add_argument("--report", type=Path, default=DEFAULT_REPORT)
    parser.add_argument("--timeout", type=int, default=30)
    args = parser.parse_args()

    routes = routes_from_inventory(args.inventory)
    pages = []
    for index, route in enumerate(routes, start=1):
        print(f"[{index:02}/{len(routes)}] {route}", file=sys.stderr)
        pages.append(
            {
                "route": route,
                "source": fetch(args.source_base, route, args.timeout),
                "target": fetch(args.target_base, route, args.timeout),
            }
        )

    snapshot = {
        "schema_version": 1,
        "captured_at": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat(),
        "source_base": args.source_base,
        "target_base": args.target_base,
        "inventory": str(args.inventory.relative_to(ROOT)),
        "route_count": len(routes),
        "pages": pages,
    }
    args.snapshot.parent.mkdir(parents=True, exist_ok=True)
    args.report.parent.mkdir(parents=True, exist_ok=True)
    args.snapshot.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    args.report.write_text(report_markdown(snapshot), encoding="utf-8")

    failures = [page for page in pages if page["source"].get("status") != 200 or page["target"].get("status") != 200]
    if failures:
        print(f"Captured with {len(failures)} non-200 source/target route(s).", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
