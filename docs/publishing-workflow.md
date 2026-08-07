# Publishing workflow

The intended workflow is:

> Request → Codex branch → pull request → Vercel preview → revisions → explicit approval → merge → production

Creating a Vercel preview does not publish production. A successful build or an available pull request is not publication approval. Never merge until the owner explicitly approves the exact latest preview and commit.

Multiple collaborators may work on separate branches. Keep each branch coherent, resolve overlap through pull-request review, and continue revisions on the same branch when responding to preview feedback.

## Preview workflow verification

The GitHub-to-Vercel pull-request preview workflow was successfully verified on August 7, 2026, using pull request #1. A follow-up commit to the existing pull-request branch automatically created a successful Vercel Preview deployment, and the branch-specific test change was confirmed in that preview.

The temporary verification marker was removed after confirmation and is not part of the foundation page. The preview test did not authorize a merge or production publication.
