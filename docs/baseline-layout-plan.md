# Baseline page layout plan

> **Status:** Approved direction for the first layout pass. This plan uses **Option A**: page content remains directly in ordinary Astro page files while reusable components standardize repeated section structures. This is a baseline organization project, not a final page-design or content-strategy phase.

## Purpose

The migrated Astro/Vercel site contains the public content from `wayfindersonthehudson.com`, with additional migration work still underway. The next stage is a fast, consistent layout pass that makes every page feel intentionally organized before deeper page-by-page design begins.

This baseline pass will:

- divide each page into meaningful content sections;
- give each section a clear visual hierarchy;
- use a small vocabulary of reusable section layouts;
- add explicitly labeled image placeholders where imagery would improve comprehension or pacing;
- preserve migrated wording, dates, costs, names, program details, and destinations;
- create responsive, accessible compositions using the existing Wayfinders design system; and
- make it straightforward to reassign a content block to a different section layout later.

This baseline pass will not attempt to finalize content strategy, photography, custom art direction, branding, animation, or bespoke page design. Those decisions belong to the later audit and redesign of each individual page.

## Core approach

Build a small library of reusable structural components that supports approximately 10–12 documented section **recipes**. A recipe describes how components are composed for a particular content relationship; it does not require a unique component of its own.

For example:

- **Recipe:** Three cards showing Tuesday, Wednesday, and Thursday registration options.
- **Components:** A shared `CardGrid` containing three `InfoCard` instances.
- **Page content:** The actual days, dates, age groups, and registration links kept directly in the page's `.astro` file.

This distinction prevents both extremes:

- many narrowly named, nearly duplicate components; and
- one oversized page-builder component with numerous conditional props.

The library should extend the existing `PageHero`, `Section`, `Container`, responsive image, button, typography, and design-token foundation rather than introducing a separate visual language.

## What the first pass should answer

For every page, the baseline pass should answer five questions:

1. Where does one topic end and the next begin?
2. What information should be visually primary?
3. Is a block continuous prose, a list, a set of peers, logistics, optional detail, imagery, or a call to action?
4. Would an image improve comprehension or visual rhythm?
5. Which approved section recipe best expresses that relationship?

It should not attempt to answer:

- Is all of the wording effective?
- Is this the ideal visitor journey?
- Which final photographs should be used?
- Does the page need custom illustration or art direction?
- Should programs or organizational information be substantially restructured?
- Is this the final brand expression?

Keeping those questions out of scope is essential to making the baseline pass fast.

## Section recipes

### 1. Simple page hero

**Use for:** Small informational pages, policies, mission pages, and contact pages.

**Composition:**

- optional eyebrow;
- page title;
- short introduction; and
- optional action.

The existing `PageHero` should provide this recipe.

### 2. Split hero

**Use for:** Programs, retreats, camps, and major organizational pages.

**Composition:**

- left: title, introduction, key detail, and optional action; and
- right: image or explicitly labeled image placeholder.

The existing `PageHero` already supports an image-led two-column composition and mobile stacking. Extend it only if a real repeated need appears during the pilot.

### 3. Narrow prose section

**Use for:** Mission copy, founder messages, introductions, statements, and policy text.

**Composition:**

- optional eyebrow;
- section heading;
- continuous text bounded to the established prose width; and
- optional action.

This recipe should remain intentionally plain. Not every block should become a card or require a photograph.

### 4. Text-and-image split

**Use for:** Program explanations, organizational stories, benefits, and instructional material.

**Variants:**

- text left and image right;
- image left and text right;
- vertically centered for short copy; and
- top aligned for longer copy.

Desktop layouts should use two columns where space permits and stack intentionally on mobile. This is a strong candidate for a shared `MediaSplit` component.

### 5. Featured text with image

**Use for:** Short emotional statements, invitations, program positioning, and transitions between dense sections.

**Composition:**

- wide image or placeholder;
- short heading and brief copy in an adjacent or overlapping high-contrast surface; and
- optional action.

Only short copy should use this recipe. On mobile, any overlapping treatment should become a normal stacked composition to protect readability.

### 6. Two-card grid

**Use for:** Two audiences, two service types, paired values, “why” and “how,” and application choices.

**Composition:**

- optional section introduction;
- two equal or intentionally weighted cards; and
- optional card actions.

This should use the same underlying grid and card components as larger card recipes.

### 7. Three-card grid

**Use for:** Program choices, schedules, benefit groups, age groups, and pathways.

**Composition:**

- section heading and introduction;
- three peer cards;
- optional card image or placeholder;
- optional label; and
- optional action.

Program registration choices are a likely use. Exact logistical details and destination URLs must remain unchanged unless the owner explicitly approves a correction.

### 8. Flexible card or feature grid

**Use for:** Four or more benefits, values, staff categories, resources, news items, and workshops.

**Composition:**

- one column on small screens;
- two columns at medium widths;
- up to three columns when content and viewport allow; and
- text-only or image-led items.

A shared grid should offer a deliberately small API, such as an automatic, two-column, or three-column layout and a card or plain presentation. It should not expose arbitrary styling controls.

Cards should be used only when the items are independent peers. A continuous argument should remain continuous prose rather than becoming a collection of bordered boxes.

### 9. Key-details panel

**Use for:** Dates, age ranges, cost, location, schedule, eligibility, and application deadlines.

**Composition:**

- clear heading;
- scannable label-and-value pairs;
- optional notice; and
- primary action close to the relevant logistics.

This should use semantic markup such as a definition list or structured list. It is an information pattern, not merely a decorative card.

### 10. Accordion or disclosure list

**Use for:** Frequently asked questions, detailed policies, and long optional explanations.

Use native `details` and `summary` so disclosure content remains keyboard accessible and works without client-side JavaScript. Extract shared styling only when repeated use justifies it; do not add an accordion dependency.

### 11. Image gallery

**Use for:** Atmosphere, program documentation, event recaps, and team or community imagery.

**Initial variants:**

- equal grid; and
- one featured image with supporting images.

Every real image must include intrinsic dimensions and appropriate alternative text. Informative imagery requires concise alt text; purely decorative imagery uses an empty alt attribute.

### 12. Call-to-action band

**Use for:** Registration, donations, scholarships, contact, newsletter signup, and next-page navigation.

**Composition:**

- short heading;
- one sentence;
- one primary action; and
- at most one secondary action.

If a block contains several unrelated actions, resolve the content grouping rather than expanding the CTA component indefinitely.

## Likely component set

The 12 recipes should require fewer than 12 new components. A likely foundation is:

1. existing `PageHero`;
2. existing `Section`;
3. a small `SectionHeading` if repeated markup supports it;
4. `MediaSplit`;
5. `FeatureImage`;
6. `CardGrid`;
7. `InfoCard`;
8. `KeyDetails`;
9. `DisclosureList`, only if the pattern repeats;
10. `ImageGallery`;
11. `Callout`; and
12. `CallToAction`.

This is a provisional list, not a mandate to create every component before it is needed. Extract repeated structural or visual behavior after examining the pilot pages. Avoid both duplicated implementations and premature abstraction.

## Option A: content remains in Astro pages

Page content will remain directly in the relevant `.astro` page file. Shared components will standardize the outer structure while slots preserve flexibility.

A typical section might resemble:

```astro
<MediaSplit imagePosition="right">
  <Fragment slot="copy">
    <!-- Existing page headings, paragraphs, lists, and actions remain here. -->
  </Fragment>
  <ImagePlaceholder
    slot="media"
    label="Children collaborating around a fire circle"
    aspect="4:3"
  />
</MediaSplit>
```

### Advantages

- fastest implementation for the baseline pass;
- retains the flexibility of ordinary Astro pages;
- supports unusual or page-specific content without expanding a schema;
- keeps content visible in the context where it appears;
- aligns with the repository architecture; and
- avoids building a premature CMS or visual page-builder abstraction.

### Tradeoff

Changing a section recipe later will require a small markup edit rather than changing a single data field. That is acceptable for this phase. In most cases, reassignment will mean replacing the outer component and moving the unchanged content into the appropriate slots.

### Explicitly deferred alternative

Do not convert every page into a structured array of section objects during this phase. Although that could make a section `type` easy to switch and might support a future CMS, it would add substantial complexity, make rich content awkward, and risk turning the site into a rigid page-builder before the real page designs are known.

## Image placeholder strategy

Use one deliberately obvious placeholder system rather than generic stock photography or several unrelated placeholder treatments.

Each placeholder should communicate:

- that it is an image placeholder;
- the intended subject or editorial role;
- the intended aspect ratio or crop; and
- an optional internal note when needed.

Example:

> **Image placeholder**<br>
> Children collaborating around a fire circle<br>
> Landscape crop · 4:3

Or:

> **Image placeholder**<br>
> Portrait of program facilitator<br>
> Portrait crop · 3:4

A shared `ImagePlaceholder` component may accept a concise API such as:

- `label`;
- `aspect`;
- optional `note`; and
- optional `class`.

It should use established surface, border, radius, typography, and spacing tokens. It must look intentionally temporary so that it cannot be mistaken for approved photography.

Benefits of this approach include:

- immediate visibility into page rhythm and image proportions;
- an implicit future photography or asset-selection list;
- documented editorial intent for each image location;
- no accidental publication of generic stock imagery; and
- no invented alt text for an image that has not yet been selected.

When a final image is approved, replace the placeholder with the existing responsive-image treatment without restructuring the surrounding section.

## Page inventory

Before broad implementation, create a working route inventory with fields such as:

| Field | Purpose |
| --- | --- |
| Route | Identifies the page. |
| Page family | Groups similar work for efficient batching. |
| Content density | Flags short, medium, or long pages. |
| Existing images | Records available imagery without assuming approval. |
| Proposed sections | Lists the baseline recipe sequence. |
| Content issue | Flags conflicts, missing information, or owner decisions. |
| Readiness | Shows whether the page can be laid out immediately. |

Example working rows:

| Route | Page family | Density | Proposed baseline sections |
| --- | --- | --- | --- |
| `/our-mission` | About | Low | Simple hero, narrow prose, CTA if supported by existing content |
| `/faqs` | Reference | High | Split hero, disclosure list, CTA if supported by existing content |
| `/fall-2026-base-camp-k-8` | Program | High | Split hero, notice, option cards, key details, media split, feature grid, gallery, CTA |

The inventory is a planning aid, not a rigid content schema.

## Page families

Process similar pages together rather than working alphabetically. Likely families include:

1. program overview;
2. individual program;
3. camp, workshop, or retreat;
4. mission and about;
5. team and people;
6. FAQ and reference;
7. contact and application;
8. news, testimonial, and gallery;
9. donation or other conversion pages; and
10. homepage.

These families help sequence work but do not impose fixed page templates.

## Section catalog

Before changing every route, build a development-only section catalog that displays every recipe with representative placeholder content. Review it at wide desktop, typical laptop, tablet, and narrow mobile widths.

The catalog should make it possible to evaluate:

- section spacing and width;
- card density;
- image ratios;
- background-tone rhythm;
- mobile stacking;
- heading hierarchy;
- CTA prominence; and
- the clarity of the placeholder treatment.

The catalog is for design review, not public content. It must either be excluded from production routing or removed before publication.

## Pilot pages

Apply the library first to three contrasting pages:

1. `/our-mission` — a short, prose-led page;
2. `/faqs` — a long, structured reference page; and
3. `/fall-2026-base-camp-k-8` — a dense program page with registration options, schedules, explanations, imagery, and actions.

These pages test the library against substantially different content shapes. If the recipes work across all three, they should cover most of the site. If not, refine the library before touching every page.

## Fast page-by-page workflow

For each page:

1. Compare the migrated page with the source/parity evidence.
2. Mark semantic content boundaries without rewriting the content.
3. Classify each block by its content relationship.
4. Assign the simplest suitable recipe.
5. Add a placeholder only when imagery has a clear role.
6. Preserve exact headings, paragraphs, lists, dates, prices, locations, names, and links.
7. Confirm one meaningful `h1` and sequential heading levels.
8. Check the layout at mobile and desktop widths.
9. Record content conflicts or uncertain destinations for owner resolution.
10. Avoid page-specific styling when a shared approved recipe already serves the content.

## Rule for assigning recipes

Choose layouts according to the relationship among the content, not merely the amount of text.

| Content relationship | Preferred recipe |
| --- | --- |
| One continuous argument | Narrow prose |
| Copy directly explained by one image | Text-and-image split |
| Two or more parallel choices | Card grid |
| Precise dates, costs, or locations | Key-details panel |
| Optional long answers | Disclosure list |
| Short emotional or transitional statement | Featured image or callout |
| Several photos with equal importance | Gallery |
| One desired next step | CTA band |

## Implementation sequence

### Batch 0: section foundation

- Audit repeated page-local layouts already in the repository.
- Confirm which existing components can remain unchanged.
- Add the smallest justified set of shared structural components.
- Add the image-placeholder component.
- Add or generate the working route inventory.
- Build the development-only section catalog.
- Document the recipes and intended uses.
- Test mobile behavior and heading hierarchy.

### Batch 1: pilot pages

- `/our-mission`;
- `/faqs`; and
- `/fall-2026-base-camp-k-8`.

Review the pilot primarily for section assignment and library behavior. Apply broadly useful corrections to the shared components before moving into the remaining batches.

### Batch 2: programs

Likely routes include:

- program overview;
- Base Camp;
- Forest Tots;
- Rose Blossoms;
- Wise Owls;
- Holiday Camps;
- Motherhood Rising;
- women’s retreat;
- Dance/Embody Collective; and
- Walk & Talks.

Confirm the route inventory before fixing final batch membership.

### Batch 3: organizational pages

Likely routes include:

- mission;
- founders’ message;
- team;
- DEI;
- testimonials;
- news; and
- video.

### Batch 4: action and reference pages

Likely routes include:

- scholarships;
- internships;
- careers;
- school programs;
- corporate retreats;
- contact;
- donate;
- FAQs; and
- past workshops.

### Batch 5: homepage and consistency sweep

Handle the homepage last so it benefits from the proven library and lessons from the rest of the site.

Then:

- confirm cross-page rhythm;
- remove obsolete duplicated page-level layout CSS;
- review every route at mobile and desktop widths;
- confirm internal links and external action destinations;
- ensure all remaining placeholders are explicitly labeled; and
- record the next-phase content and design opportunities without implementing them prematurely.

## Approval and review model

### Library approval

Review the general behavior of the shared recipes once:

- spacing;
- widths;
- mobile stacking;
- image ratios;
- card density;
- background rhythm;
- CTA treatment; and
- placeholder appearance.

### Page assignment approval

For each page, review only:

- whether the section boundaries make sense;
- whether each block uses the right recipe;
- whether the baseline order is reasonable;
- whether image-placeholder notes are appropriate; and
- whether any migrated content was altered or omitted.

This two-level review avoids debating the same component styling independently on every route.

## Scope boundaries

### Included

- semantic section boundaries and baseline ordering;
- reusable section structures;
- existing design tokens and components;
- responsive layouts;
- explicitly labeled image placeholders;
- semantic heading hierarchy;
- basic action hierarchy;
- removal of clearly duplicated layout CSS when shared components replace it;
- preservation of migrated content; and
- build, accessibility, responsive, link, and parity checks.

### Deliberately excluded

- content rewriting;
- final photography selection;
- final image cropping and art direction;
- new branding or an unrelated visual system;
- animation and complex interactions;
- a CMS or visual page-builder conversion;
- final SEO strategy;
- newsletter or form-provider integration;
- changes to prices, schedules, program policies, or external destinations without explicit approval; and
- bespoke page art direction.

## Validation

For each implementation batch:

- run the Astro check command;
- build the production site;
- run the content-parity tooling for affected routes;
- verify internal links and media references;
- inspect desktop and mobile layouts;
- check for horizontal overflow;
- verify heading hierarchy and landmarks;
- use the keyboard to test all interactive elements;
- inspect focus visibility and touch-target sizing;
- verify informative image alt text and decorative empty alt attributes;
- verify reduced-motion behavior where relevant; and
- confirm that dates, costs, ages, times, locations, names, and destination URLs remain faithful to the approved content.

Automated checks supplement but do not replace responsive, keyboard, zoom, and browser review.

## Success criteria

The baseline layout stage is complete when:

- every in-scope page has intentional semantic sections;
- each section uses an approved recipe or a documented page-specific exception;
- pages have clear hierarchy and readable visual rhythm;
- layouts work intentionally on narrow and wide screens;
- placeholders clearly communicate future image needs;
- content has not been silently rewritten, shortened, or factually altered;
- repeated structural styling is shared without over-abstraction;
- builds and automated checks pass;
- manual accessibility and responsive review is complete;
- every unresolved content or destination issue is recorded; and
- the site is ready for deeper page-by-page content, prototype, photography, and bespoke-design work.

## Immediate next step

Implement **Batch 0** and the three-page pilot as one coherent previewable change. Review the section catalog and pilot pages before applying the library across the remaining route families.

A successful build or Vercel preview is not publication approval. Do not merge or publish the baseline changes until the owner has reviewed the exact latest preview and explicitly approved publication.
