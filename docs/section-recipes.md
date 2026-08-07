# Baseline section recipes

The baseline layout library uses a small group of slot-based Astro components. Page wording remains in ordinary page files. Choose a recipe based on the relationship between content, not merely its length.

| Recipe | Components | Intended use |
| --- | --- | --- |
| Simple or split hero | `PageHero` | Page title and introduction; add an image or the `media` slot for a split composition. |
| Narrow prose | `Section` with `width="prose"` | One continuous argument, policy, or statement. |
| Text and image | `MediaSplit` | Copy directly supported by one image; supports media on either side and start/center alignment. |
| Image placeholder | `ImagePlaceholder` | Explicit temporary editorial image need with subject, ratio, and optional note. |
| Two-, three-, or flexible grid | `CardGrid` and `InfoCard` | Independent peer choices, features, schedules, or resources. |
| Key details | `KeyDetails` | Semantic label/value logistics supplied as `dt` and `dd` children. |
| Disclosure list | `DisclosureList` with native `details` | FAQs and long optional explanations without client JavaScript. |
| Equal or featured gallery | `ImageGallery` | Several approved images with equal weight, or one featured image. |
| Notice or transition | `Callout` | Important short information that is not a primary action. |
| Action band | `CallToAction` | One next step with at most two related actions. |

## Constraints

- Keep a single meaningful `h1` in `PageHero`; set card heading levels to preserve sequence.
- Use approved design tokens and existing `Section`, `Container`, `Button`, and image treatments.
- Placeholders are intentionally labeled and are replaced in place when imagery is approved.
- Use real images with intrinsic dimensions and appropriate alternative text.
- Keep action destinations and logistical copy in the page file so they remain easy to audit.
