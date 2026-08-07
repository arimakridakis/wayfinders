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

- Start substantive work from the latest `main`, create a descriptive branch, and make one coherent change per branch.
- Run checks before committing, push the branch, and open or prepare a pull request.
- Do not merge without explicit approval. Never force-push `main` and never commit secrets.

## Reporting behavior

After each task, report what changed, what was deliberately left unchanged, affected pages, tests and builds run, unresolved questions, the pull request URL, the Vercel preview URL, and publication status.

End all unapproved changes with:

> Not published. Review the preview and explicitly approve publication when ready.
