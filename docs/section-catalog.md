# Development section catalog

The non-routed Astro catalog lives at `src/components/dev/SectionCatalog.astro`. It composes every baseline recipe with representative content for wide desktop, laptop, tablet, narrow-mobile, keyboard, and heading-hierarchy review.

It is deliberately stored outside `src/pages`, so Astro does not publish it as a public route. During local design review, temporarily render it from a development-only page or component harness; do not commit that route. The three pilot pages provide production-routed examples of the same components.

Review the catalog at minimum at 1280px, 1024px, 768px, and 320px widths. Confirm section rhythm, card density, placeholder clarity, stacking order, lack of horizontal overflow, focus visibility, touch targets, and native disclosure behavior.
