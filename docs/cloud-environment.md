# Cloud environment

## Baseline

- **Runtime:** Node.js 24 LTS, pinned by `.nvmrc` and the `package.json` engine range
- **Package manager:** npm, using the committed `package-lock.json`
- **Fresh setup:** `npm ci`
- **Initial lockfile creation only:** `npm install`
- **Development server:** `npm run dev`
- **Validation:** `npm run check` and `npm run build`
- **Production build:** `npm run build`
- **Output:** static files in `dist/`

No global packages are required. The project was initialized using Astro's current `create astro` minimal starter and Tailwind is configured using the current `@tailwindcss/vite` procedure rather than the deprecated `@astrojs/tailwind` integration.

Official references consulted during setup:

- [Astro installation](https://docs.astro.build/en/install-and-setup/)
- [Astro styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Tailwind CSS Vite installation](https://tailwindcss.com/docs/installation/using-vite)

## Environment variables

None are required for Phases 0–7. Never commit real secrets. If later integrations need configuration, document variable names in `.env.example` and store real values in the deployment platform.

## Cloud workspace verification

The phase-0 checkout was `arimakridakis/wayfinders` at base commit `1465077` on the task branch `work`. The repository contained only `.gitkeep`; `main` was confirmed by the user as the selected platform base branch. Local file creation and commits are available. Network requests to official Astro and Tailwind documentation and the npm registry succeeded. Platform-managed push and pull-request capabilities were not observable inside the container and must be verified while publishing this completed branch. Repository visibility and active GitHub rules were not independently available inside the container.

## Troubleshooting

1. Confirm `node --version` satisfies `package.json`.
2. Remove no lockfile by hand; run `npm ci` for a clean, repeatable install.
3. Run `npm run check` before `npm run build` to surface Astro and TypeScript diagnostics.
4. If dependency downloads fail, confirm scoped network access to npm is enabled in the cloud environment.
5. If output differs from the lockfile, do not use a global Astro installation; use the package scripts.
