# Publishing workflow

The intended workflow is:

> Request → Codex branch → pull request → Vercel preview → revisions → explicit approval → merge → production

Phases 0–7 do not connect Vercel or publish production. A successful build or an available pull request is not publication approval. Never merge until the owner explicitly approves the exact latest preview and commit.

Multiple collaborators may work on separate branches. Keep each branch coherent, resolve overlap through pull-request review, and continue revisions on the same branch when responding to preview feedback.
