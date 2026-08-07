# Accessibility baseline

- Use one descriptive `h1` per page and preserve sequential heading hierarchy.
- Retain the skip link, semantic header/navigation/main/footer landmarks, and visible focus treatment from `BaseLayout`.
- All interactive controls must work with a keyboard and meet reasonable touch-target sizing.
- Supply meaningful alternative text for informative images and `alt=""` for decorative images.
- Never communicate meaning with color alone. Verify contrast after any token adjustment.
- Respect reduced-motion preferences and avoid horizontal overflow at narrow widths.
- Mobile navigation uses native `details`/`summary`, so it remains operable without client JavaScript.
- Run automated checks, then perform keyboard, zoom, and browser review; automated tools alone do not prove accessibility.
