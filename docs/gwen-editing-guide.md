# Gwen's editing guide

You can update the website by talking to Codex. You do not need to install development software, edit code, or use the GitHub or Vercel websites.

## Ask for a change

Start a Codex chat in the Wayfinders project. Say which page should change, provide the final wording and any images, mention a visual reference if helpful, and say what must stay unchanged. End with: “Please make a preview; do not publish.”

Codex will make the change on a separate branch, run the website checks, and give you a Vercel preview link. That link is safe to share for feedback: it does not change the live website.

## Review the preview

Open the preview link and send any corrections back to Codex. Codex will update the same preview until it is ready. A new preview replaces the earlier one, so always review the latest link.

## Publish only when ready

When the exact latest preview is approved, say: “I approve publication of PR #NUMBER.” Codex will verify that the Vercel preview is passing, merge that pull request, and report the production deployment. Vercel then updates the live site automatically.

Do not use “looks good” or “ship it” as approval. Publication requires the explicit phrase above, including the pull-request number, so that the preview being approved is unambiguous.

GitHub remains the authoritative website copy, but this workflow means Gwen never needs to interact with GitHub directly.
