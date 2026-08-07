# Content parity migration plan

> **Status:** Phase 0 began August 7, 2026. This document is the cross-chat reference for restoring the complete public content of `wayfindersonthehudson.com` to the Astro/Vercel site. No batch is published merely because it is built or merged; publication requires explicit owner approval.

## Goal and source of truth

The current Squarespace `.com` site is the content source of truth for the parity project. The Astro design system controls accessible, responsive presentation, but it must not silently shorten, rewrite, or omit meaningful source content.

Phase one covers the canonical homepage and every route in the current `.com` navigation. Sitemap-only historical, duplicate, registration, and profile URLs are a later archive-and-redirect project unless the owner explicitly moves them into scope.

“All content” means all meaningful public titles, headings, paragraphs, lists, quotations, program facts, biographies, calls to action, links, downloads, images, captions, video, and visible form intent. It does not mean copying Squarespace scripts, tracking, spacer blocks, responsive duplicates, template residue, or inaccessible markup.

## Non-negotiable rules

1. Preserve supplied wording unless rewriting is explicitly approved.
2. Never infer dates, ages, prices, times, locations, names, biographies, or URLs.
3. Record contradictory or questionable facts for owner resolution.
4. Treat payment, registration, application, donation, and form destinations as unverified until an owner confirms them.
5. Preserve source image references during capture, but use only owned or licensed, approved media at launch.
6. Restructure content for hierarchy and accessibility only when no substance is lost.
7. Keep current and historical offerings visibly distinct.
8. One batch equals one coherent branch, pull request, Vercel preview, and approval gate.

## Definition of content parity

A page is content-complete when:

- every meaningful source element has an explicit disposition;
- every omission is documented and owner-approved;
- wording has not been condensed without approval;
- dates, prices, people, places, and destinations match the captured source or an approved correction;
- images, captions, embeds, downloads, and forms are accounted for;
- important actions work and their owner is confirmed;
- desktop and mobile presentations are intentional;
- accessibility and build checks pass; and
- the page no longer depends on Squarespace except for a clearly documented temporary asset or action.

Word-count similarity is a warning signal, not proof of parity.

## Phase 0: reproducible baseline

Phase 0 establishes the evidence and workflow used by every implementation batch.

### Deliverables

- `scripts/content_parity.py`: dependency-free semantic crawler and comparison tool.
- `docs/content-parity/baseline.json`: dated source and Vercel snapshots for all current-navigation routes.
- `docs/content-parity/baseline-report.md`: route-level status, word, image, and form comparison.
- This reference plan.

### Capture fields

Each route snapshot records the final URL, HTTP status, page title, semantic content blocks, links, images and alternative text, embeds, forms and fields, element counts, and approximate visible word count. Extraction is limited to the main content region so shared navigation and footer text do not inflate comparisons.

### Phase 0 limitations

- Script-rendered, lazy-loaded, gallery, form, and video blocks still require visual browser inspection.
- Public HTML cannot prove image rights, logistical approval, account ownership, or form delivery.
- Repeated source content may be deduplicated by the baseline and must be checked visually when repetition is intentional.
- The snapshots are migration evidence, not a new content-management system.

### Refreshing the baseline

From the repository root, run:

```bash
python3 scripts/content_parity.py
```

The command uses the current-navigation rows in `docs/migration-inventory.csv` and overwrites both baseline artifacts with a new UTC capture timestamp. Optional flags can replace the inventory, source hostname, target hostname, output paths, or request timeout; run `python3 scripts/content_parity.py --help` for the complete interface.

## Standard workflow for each implementation batch

1. **Refresh:** branch from the latest `main` and confirm a clean status.
2. **Capture:** refresh the dated source and Vercel snapshots for the batch.
3. **Inspect:** take desktop/mobile reference screenshots and inspect embeds, galleries, forms, and image-driven content.
4. **Manifest:** classify each source item as present verbatim, condensed, missing, restructured without loss, owner decision required, or intentionally excluded.
5. **Resolve facts:** present contradictions and high-risk destinations to the owner; never choose silently.
6. **Implement:** preserve all approved content using existing Astro components and design tokens, adding shared patterns only where repetition justifies them.
7. **Validate:** rerun parity comparison, internal-link and media checks, `npm run check`, `npm run build`, accessibility checks, and responsive visual review.
8. **Review:** commit, push, open a PR, and provide its Vercel preview plus unresolved items.
9. **Approve:** merge or publish only after explicit review of the exact latest preview.

## Implementation batches

### Batch 1: organizational identity

- `/`
- `/our-mission`
- `/the-team`
- `/message-from-founders`

Restore the complete homepage journey, mission language, team/profile content, and founders’ message. The founders’ route needs rendered inspection because its source has little conventionally extractable text.

### Batch 2: youth and family programs

- `/fall-2026-programs-overview`
- `/fall-2026-base-camp-k-8`
- `/forest-tots-12-30-months`
- `/motherhood-rising-6-weeks-12-months`
- `/holiday-camps-1st-8th-graders`

Verify all ages, grades, dates, skipped dates, times, locations, prices, discounts, scholarships, facilitators, preparation guidance, registrations, and payments.

### Batch 3: Rose Blossoms and teen pathways

- `/rose-blossoms-12-15-year-old-girls`
- `/internships`
- `/careers`
- `/scholarships-1`

Give the long, image-rich Rose Blossoms source a dedicated review. Verify eligibility, service hours, fees or stipends, application forms, scholarship rules, seasonal gatherings, and registration options.

### Batch 4: adults, schools, and organizations

- `/autumn-2026-womens-retreat`
- `/wise-owls-55-1`
- `/dance-embody-collective`
- `/walk-talks`
- `/corporate-retreats`
- `/school-programs`

Resolve the known Wise Owls age inconsistencies and verify retreat logistics, professional-service language, downloads, inquiries, and external registration systems.

### Batch 5: organizational information and actions

- `/dei`
- `/faqs`
- `/contact-us`
- `/donate`

Restore complete DEI and FAQ text. Model every contact/newsletter form field and donation action, while implementing form delivery only after provider and data-owner confirmation.

### Batch 6: media and historical material

- `/wayfinders-in-the-news`
- `/wayfinders-video`
- `/pastworkshops`
- `/testimonials-`
- `/slideshow-1`

Restore every approved story, link, workshop, testimonial, attribution, image, caption, and video resource. Prefer an accessible gallery to a mechanical Squarespace slideshow clone.

## Automated and manual validation

Every batch should compare source and target:

- semantic text blocks and approximate words;
- headings, lists, and quotations;
- dates, times, dollar amounts, ages, grades, phone numbers, email addresses, and external URLs;
- images, alternative text, captions, embeds, downloads, forms, and actions;
- route and internal-link status; and
- desktop and mobile screenshots.

Required technical checks include Astro validation, a production build, internal-link crawling, missing-image checks, heading-hierarchy checks, automated accessibility scans, keyboard review, and representative screen-reader testing.

## Owner decisions tracked throughout

- Which programs are current, open, full, upcoming, or informational?
- Which conflicting dates, ages, grades, prices, roles, or locations are correct?
- Which people and biographies remain public?
- Which registrations, payments, downloads, applications, and donation destinations are current and owned by Wayfinders?
- Which providers receive contact and newsletter submissions?
- Which images and videos are owned or licensed, and can approved originals be supplied?
- Should intentional repetition on long source pages remain repeated?
- Which 105 sitemap-only routes later become pages, archive entries, redirects, or removals?

## Later phase: legacy sitemap routes

After current-navigation parity, evaluate the remaining public sitemap routes individually. Assign each one to migrate, consolidate into an archive, merge into a current page, redirect, preserve temporarily, or retire intentionally. Use analytics and Search Console data where available; do not mechanically recreate duplicate collections or obsolete registration pages.

## Reporting after every batch

Each batch report must state what changed, what was deliberately left unchanged, affected routes, source capture date, checks and builds, unresolved questions, pull request URL, Vercel preview URL, and publication status. Unapproved work ends with the repository’s required not-published notice.
