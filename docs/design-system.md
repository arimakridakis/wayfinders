# Design system

> **Approval status:** Every visual value in this foundation is provisional until the Wayfinders team reviews it against final brand materials and reference-page content.

## Intent

The system should feel grounded, warm, legible, and connected to the natural world. It limits needless drift while allowing pages to vary their composition, imagery, pacing, and section order.

## Color roles

| Role | Token | Provisional value |
| --- | --- | --- |
| Page background | `--color-page` | `#f8f4e8` |
| Alternate background | `--color-page-alt` | `#eef1e6` |
| Surface | `--color-surface` | `#fffdf7` |
| Muted surface | `--color-surface-muted` | `#e6eadc` |
| Primary text | `--color-ink` | `#1f2a24` |
| Muted text | `--color-ink-muted` | `#59645d` |
| Forest green | `--color-forest` | `#315843` |
| Dark forest green | `--color-forest-dark` | `#173b2a` |
| Sage | `--color-sage` | `#9caf91` |
| Moss | `--color-moss` | `#65784f` |
| Warm cream | `--color-cream` | `#f3ead2` |
| Earth brown | `--color-earth` | `#725744` |
| Rust accent | `--color-rust` | `#a34f35` |
| Border | `--color-line` | `#cbd1c2` |
| Focus | `--color-focus` | `#1769aa` |
| Success | `--color-success` | `#277047` |
| Warning | `--color-warning` | `#9a5a12` |

Use colors by semantic role rather than selecting a nearby hex value. Text/background pairings must retain adequate contrast.

## Typography

The provisional display family is the freely available system serif stack; interface and body copy use the system sans-serif stack. No proprietary font file is included.

| Role | Implementation |
| --- | --- |
| Display heading | `.type-display`, fluid 48–104px equivalent |
| Page title | `.type-page-title`, fluid 40–80px equivalent |
| Section heading | `.type-section`, fluid 32–56px equivalent |
| Card heading | `.type-card`, fluid 22–28px equivalent |
| Body | global body, 16px equivalent / 1.7 |
| Small body | `.type-small`, 14px equivalent / 1.55 |
| Label / eyebrow | `.type-label`, uppercase with restrained tracking |
| Navigation | `.type-nav` or the shared navigation component |
| Button | `.type-button` or the shared button component |

Headings use balanced wrapping where supported. A page must have one meaningful `h1`; component choices must preserve hierarchy.

## Layout

- Narrow prose: `42rem`
- Standard content: `70rem`
- Wide content: `82rem`
- Page gutters: fluid `1rem` to `2rem`
- Breakpoints: `36rem`, `48rem`, `64rem`, `80rem`
- Section spacing: fluid `4rem` to `7rem`
- Card padding: fluid `1.25rem` to `2rem`
- Column gaps: fluid `1.5rem` to `3.5rem`
- Maximum image width: `72rem`

Use `Container` and `Section` for common bounds, but custom page compositions may extend them when the content warrants it.

## Details and interaction

- Card radius: `1.25rem`; pill/button radius: `999px`
- Soft shadow: one low-contrast elevation token
- Button minimum height: `3rem`
- Mobile touch target: at least `2.75rem`
- Icons: `1.25rem`, `1.75rem`, and `2.5rem`
- Transition: `180ms ease`
- Focus: high-contrast double ring using the focus token
- Motion: transitions and smooth scrolling are effectively removed when reduced motion is requested

New values should be added only when a real content or accessibility requirement cannot be met by these roles.
