# Architecture

## Principles

- Astro generates a static site with accessible HTML and minimal browser-side JavaScript.
- Tailwind CSS 4 supplies theme utilities through `@tailwindcss/vite`; global CSS custom properties remain the shared design foundation.
- Normal pages remain ordinary `.astro` files. Shared components are extracted only for repeated structural or visual behavior.
- GitHub is authoritative. A collaborator's computer is never treated as the canonical website copy.
- External registrations, donations, newsletters, and forms will be linked or integrated only after destinations and security needs are confirmed.

## Source map

- `src/layouts/`: document-level layouts and shared metadata.
- `src/components/global/`: durable shell and foundation components.
- `src/pages/`: file-based routes.
- `src/styles/`: theme tokens, global typography, accessibility, and baseline behavior.
- `src/data/`: typed shared site configuration.
- `public/`: approved or explicitly labeled static assets.
- `docs/`: human-readable operating and design decisions.

No UI framework, CMS, database, analytics, or client-side state library is installed.
