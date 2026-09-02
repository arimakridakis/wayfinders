# Gwen's Codex Instructions: Direct-to-Production Workflow

## Purpose

This project is maintained by Gwen through conversation with Codex. Gwen should be able to ask for a website change in plain language and see the result on the live Wayfinders website without opening Terminal, GitHub, Vercel, or a pull request.

The normal workflow is **direct to production**. Do not create branches or pull requests for ordinary website requests.

> Gwen describes the change. Codex validates, commits, pushes, and reports the live result.

## What Gwen does

Gwen's request to make a normal website change authorizes the full direct-to-production workflow.

Gwen:

1. Describes the page, desired change, exact wording, URL, and/or image when relevant.
2. Opens the live production link after Codex reports deployment.
3. Sends a follow-up request if something needs adjustment.

Gwen does **not** need to run commands, create commits, use GitHub, open Vercel, or approve a separate publication step for ordinary changes.

## What Codex does for every ordinary change

Perform these steps in order. Do not skip validation, and do not create a pull request.

1. Read `AGENTS.md` and the relevant files in `docs/`. Identify the page, component, and design/content guidance affected.
2. Inspect `git status --short --branch`.
   - If there are unexpected local changes, untracked files that could be affected, or the current branch is not `main`, stop and explain the situation before touching files.
   - Preserve Gwen's files. Do not reset, discard, overwrite, or clean the working tree casually.
3. Update safely from the remote:

   ```bash
   git switch main
   git pull --ff-only origin main
   ```

4. Make only the requested, coherent change. Preserve supplied copy exactly unless Gwen asks for a rewrite. Do not invent dates, prices, names, registration links, or program details.
5. Review the changed files and run the project's required checks:

   ```bash
   npm run check
   npm run build
   git diff --check
   ```

   This repository does not currently define separate formatting or security scripts. Run them too if they are added later; do not pretend a non-existent check was run.
6. If any required check fails, do not commit or push. Diagnose the failure, make an in-scope correction when safe, rerun the checks, and otherwise report the blocker clearly to Gwen.
7. When checks pass, review the diff and commit only the intended project files. Never commit secrets, `.env` files, unrelated user changes, generated build output, or temporary files.

   ```bash
   git add -- <only the intended files>
   git commit -m "Describe the requested change"
   git push origin main
   ```

8. Confirm that the push succeeded. GitHub's Vercel integration will then deploy production. Check the available deployment status when possible and report the live production URL or deployment status to Gwen.
9. Report, in plain language:
   - what changed;
   - which page(s) were affected;
   - checks run and their result;
   - commit SHA;
   - whether the production deployment is live, pending, or failed; and
   - the production URL when available.

## Deployment outcome

Treat `git push origin main` as the publication action. A successful push starts the Vercel production deployment; it is not a preview.

If Vercel reports a failed deployment, tell Gwen immediately. Do not claim the change is live. Diagnose the failure, fix it only if the fix remains clearly in scope, rerun validation, and push the corrective commit.

If the live result is not right, Gwen can ask for the correction in plain language. Make a new focused commit on `main`; do not leave a pull request or unpublished branch behind.

## When Codex must pause and ask Gwen first

Pause before acting when the request would:

- change DNS, domains, Vercel project settings, billing, team access, or deployment configuration;
- create, reveal, rotate, or use secrets, API keys, tokens, or environment variables;
- send messages, submit forms, charge money, or create an external commitment;
- delete or overwrite a broad or unclear set of files;
- make a material, ambiguous redesign or content change that Gwen has not described clearly; or
- push while the repository has unexpected local work or cannot be safely updated from `main`.

For payment links, costs, dates, names, registration details, and similar high-impact content, proceed only when Gwen has supplied the exact final value. Do not guess or silently substitute one.

## Guardrails

- Never force-push `main`.
- Never use `git reset --hard`, `git checkout --`, or a broad destructive command to "make things clean."
- Never change unrelated files just because they are nearby.
- Keep client-side JavaScript minimal, preserve accessibility, and intentionally consider mobile layout.
- Use existing Wayfinders design tokens and components. Do not introduce dependencies without explaining why they are needed.
- A Git commit is the permanent record of a production change. Make commit messages specific enough that Gwen can understand them later.

## Success definition

For a normal request, success means:

1. The requested change is correctly committed to `main`.
2. `npm run check`, `npm run build`, and `git diff --check` passed before the push.
3. Vercel has deployed the pushed commit to production successfully.
4. Gwen has a live URL and a concise explanation of what changed.

There is no pull request, preview-only deployment, or separate merge step in this workflow.
