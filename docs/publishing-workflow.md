# Publishing workflow

The intended workflow is:

> Request → Codex branch → pull request → Vercel preview → revisions → explicit approval → merge → production

Phases 0–7 do not connect Vercel or publish production. A successful build or an available pull request is not publication approval. Never merge until the owner explicitly approves the exact latest preview and commit.

Multiple collaborators may work on separate branches. Keep each branch coherent, resolve overlap through pull-request review, and continue revisions on the same branch when responding to preview feedback.

## Temporary preview verification marker

Pull request #1 temporarily displays a clearly labeled **“Vercel preview workflow test”** marker on the foundation page. Its only purpose is to verify that a follow-up commit to the existing pull-request branch automatically creates a Vercel Preview deployment and that the preview contains the branch-specific change.

The marker is not production content. Remove it before the pull request is approved or merged. Production must remain unchanged throughout this test.
