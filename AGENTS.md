# Wayfinders repository guidance

These instructions apply to the entire repository.

## Before editing

- Read this file and the relevant files in `/docs`.
- Inspect the current branch and repository status.
- Identify the page and components affected and examine relevant reference pages.
- Confirm whether the requested change is local, global, or structural.

## Design behavior

- Preserve the established Wayfinders design language and reuse design tokens and existing components when appropriate.
- Do not invent a new button, card, color, font role, shadow, border radius, or spacing convention casually. Extend the documented system only when the existing system cannot serve the content.
- Pages may have custom composition. Existing pages are visual precedents, not rigid templates.
- “In the style of another page” means reuse its visual grammar, not blindly duplicate its source.
- Interpret “make this breathe more” contextually through spacing, width, scale, line height, and visual rhythm—not by applying one arbitrary spacing value everywhere.

## Content behavior

- Preserve supplied wording unless rewriting is explicitly requested.
- Do not silently alter dates, costs, names, registration links, or program details.
- Flag conflicts or ambiguities and never invent missing logistical information.

## Technical behavior

- Keep client-side JavaScript minimal, preserve accessibility, and intentionally design mobile layouts.
- Avoid duplicated implementations of shared patterns, but also avoid over-abstraction.
- Do not introduce a dependency without explaining why it is needed.

## Git behavior

- Start substantive work from the latest `main`. Work directly on `main` for ordinary website requests and keep each commit focused on one coherent change.
- Before editing, inspect the repository status. If unexpected local work is present or `main` cannot be updated safely with `git pull --ff-only origin main`, stop and explain the situation before proceeding.
- Run `npm run check`, `npm run build`, and `git diff --check` before committing. Do not push if a required check fails.
- Commit only the intended files, with a specific commit message, and push directly to `origin main`. Never force-push `main` and never commit secrets, `.env` files, generated build output, or unrelated user changes.
- A normal, clearly scoped website request authorizes this direct-to-production workflow. Do not create a branch, pull request, preview-only deployment, or separate publication approval for ordinary changes.
- Pause and ask for direction before changes involving secrets, environment variables, DNS/domains, Vercel settings, billing, team access, external messages or payments, destructive actions, an ambiguous material redesign, or high-impact content whose exact final value was not supplied.

## Reporting behavior

After each task, report what changed, what was deliberately left unchanged, affected pages, tests and builds run, unresolved questions, and production deployment status.

For ordinary changes, report the commit SHA, production deployment status, and live production URL when available. Do not report a pull request or preview URL because this workflow does not use them.

If a deployment is pending or failed, say so clearly and do not claim that the change is live.
