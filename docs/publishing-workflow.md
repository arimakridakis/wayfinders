# Publishing workflow

The intended workflow is:

> Request → local validation → commit to `main` → push → Vercel production deployment → live review → follow-up change if needed

For ordinary, clearly scoped website changes, Codex works directly on the up-to-date `main` branch. It must run `npm run check`, `npm run build`, and `git diff --check` before committing. When those checks pass, Codex commits only the intended files and pushes directly to `origin main`.

GitHub's Vercel integration detects the push and begins a production deployment. Codex must report whether the deployment is live, pending, or failed, and provide the live production URL when available. A failed deployment is not publication.

The owner reviews the live result and asks Codex for a focused follow-up change if needed. Git commits preserve the history of each production release; do not leave pull requests or unpublished branches behind.

## Changes that require an explicit pause

Codex must stop and ask for direction before changing secrets, environment variables, domains/DNS, Vercel settings, billing, team access, external messages or payments, or a broad/ambiguous design or content change. It must also stop if `main` cannot be updated safely or unexpected local work is present.

For costs, dates, names, payment links, registration links, and similar high-impact content, Codex may proceed only when the owner supplies the exact final value.
