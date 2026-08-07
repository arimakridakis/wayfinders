# Squarespace migration inventory

> **Status:** Automated discovery completed August 7, 2026. Every proposed disposition in this document and the companion CSV requires owner review. Nothing has been approved for deletion, redirect, rewriting, or publication.

## Purpose

This inventory supports a content-faithful first migration from Squarespace to Astro. The first release should preserve the public site's useful content, recognizable identity, URLs, imagery, and confirmed destinations while replacing Squarespace layout code with accessible, responsive Astro components. It is not a pixel-perfect clone or a major redesign.

The complete page-by-page crawl is in [`migration-inventory.csv`](./migration-inventory.csv). That file is the working decision register: it records each discovered path, title, page type, navigation status, HTTP status, Squarespace last-modified date, approximate word and image counts, form count, representative headings, external domains, a proposed disposition, and the reason for that proposal.

## Capture method and limits

- Source: the public `https://www.wayfindersonthehudson.com/sitemap.xml`, plus the canonical `/` homepage because the sitemap lists the equivalent `/home` route.
- All 133 discovered URLs returned HTTP 200 during the August 7 crawl.
- The homepage was used to identify the currently visible navigation; 28 routes are in that navigation and 105 are sitemap-only or unlinked from it.
- Counts are approximate. The crawl found about 32,432 visible words and 576 image occurrences, but shared logos, footer content, repeated collection content, lazy-loaded assets, and duplicate image references inflate those totals.
- A public crawl cannot establish image ownership, editorial approval, traffic, hidden/draft Squarespace pages, form delivery settings, account configuration, or whether a visible logistical detail is still correct.
- Squarespace last-modified dates indicate editing activity, not approval or continuing relevance.
- The crawler did not submit forms, complete payments, register for programs, download all source images, or change the live site.

## Inventory summary

| Page type | Count | Migration implication |
| --- | ---: | --- |
| Programs and services | 36 | Main migration workload; separate current offerings from dated versions. |
| Event collection items | 31 | Mostly 2021–2025 historical events; likely archive or redirect after review. |
| Information and media | 29 | Includes mission, policy, press, galleries, and collection indexes. |
| Person profiles | 19 | Confirm current roles, then use a shared profile pattern or merge into the team page. |
| Registration/application | 12 | High risk: verify every destination and payment/form owner before reproducing. |
| Homepage variants | 2 | `/` is canonical; `/home` appears to duplicate it. |
| Support/action | 2 | Donation and action destinations require end-to-end verification. |
| Team index | 1 | Representative people-oriented migration page. |
| Contact/form | 1 | Native Squarespace form cannot simply be copied into static Astro. |

The automated proposals currently classify one canonical homepage as `keep`, 27 visible-navigation pages as `keep/review`, 19 profiles as `merge/review`, 46 dated pages as `archive/redirect`, 10 probable copies as `duplicate/review`, 29 other pages as `review`, and `/home` as a proposed redirect. These are triage labels, not deletion instructions.

## Current navigation

The live homepage exposes this information architecture:

### About Us

- Our Mission (`/our-mission`)
- The Team (`/the-team`)
- Message from Founders (`/message-from-founders`)
- Careers (`/careers`)
- DEI (`/dei`)
- FAQs (`/faqs`)
- Wayfinders in the News (`/wayfinders-in-the-news`)
- Wayfinders Video (`/wayfinders-video`)
- Past Workshops (`/pastworkshops`)
- Scholarships (`/scholarships-1`)
- Testimonials (`/testimonials-`)
- Slideshow (`/slideshow-1`)

### Programs

- Fall 2026 Programs Overview (`/fall-2026-programs-overview`)
- Fall 2026 Base Camp K–8 (`/fall-2026-base-camp-k-8`)
- Forest Tots, 12–30 months (`/forest-tots-12-30-months`)
- Rose Blossoms, ages 12–15 (`/rose-blossoms-12-15-year-old-girls`)
- Autumn 2026 Women's Retreat (`/autumn-2026-womens-retreat`)
- Motherhood Rising, 6 weeks–12 months (`/motherhood-rising-6-weeks-12-months`)
- Wise Owls, 55+ (`/wise-owls-55-1`)
- Dance Embody Collective (`/dance-embody-collective`)
- Holiday Camps, grades 1–8 (`/holiday-camps-1st-8th-graders`)
- Internships (`/internships`)
- School Programs (`/school-programs`)
- Corporate Retreats (`/corporate-retreats`)
- Walk & Talks (`/walk-talks`)

### Direct actions

- Contact Us (`/contact-us`)
- Donate (`/donate`)
- Facebook and Instagram
- A cart link is present even though it is not clear that the current public journey requires a cart.

The existing header uses deep folder menus. The baseline Astro migration should preserve access to these destinations without assuming that the exact grouping or every legacy item is final.

## Current homepage content

The homepage is both an introduction and a long-form mission page. It contains:

1. A connection-to-self, community, and earth message.
2. A “new programs” and screen-free nature-program introduction.
3. A Base Camp feature covering fire circles, nature games, social-emotional learning, leadership, community, flexible days, discounts, and mixed-age mentorship.
4. A “What is Wayfinders?” explanation centered on mindfulness, community, nature immersion, sustainability, and reconnecting away from technology.
5. Claimed outcomes involving sustainability advocacy, mental health, and access for diverse and underserved participants.
6. A mailing-list form.
7. A long “Why Wayfinders?” section with core values, leadership, social justice, adolescence, belonging, technology, climate, emotional intelligence, nature skills, and rites of passage.
8. A Lenape land acknowledgment and statement of responsibility.
9. A closing programs link and repeated mailing-list signup.

For the baseline migration, preserve this material unless the owner approves edits. The repeated themes and page length should be logged for later redesign rather than silently condensed during parity work.

## Current and high-priority routes

The crawl found a recently maintained cluster that should drive the first parity release:

- `/`
- `/fall-2026-programs-overview`
- `/fall-2026-base-camp-k-8`
- `/forest-tots-12-30-months`
- `/rose-blossoms-12-15-year-old-girls`
- `/autumn-2026-womens-retreat`
- `/motherhood-rising-6-weeks-12-months`
- `/wise-owls-55-1`
- `/dance-embody-collective`
- `/holiday-camps-1st-8th-graders`
- `/internships`
- `/school-programs`
- `/corporate-retreats`
- `/walk-talks`
- `/our-mission`
- `/the-team`
- `/faqs`
- `/scholarships-1`
- `/contact-us`
- `/donate`

The companion CSV includes the remaining visible navigation and all historical/unlinked routes.

## Duplicate and legacy patterns requiring decisions

### Homepage duplication

`/` and `/home` returned the same title, headings, word count, form count, and image count. Preserve `/` and plan a `/home` redirect only after confirming that Squarespace analytics or external links do not require special handling.

### Base Camp generations

The sitemap contains numerous Base Camp routes for Fall 2022, Fall 2023, Fall 2025, Winter 2026, and Fall 2026, including apparent copies. Current navigation points to `/fall-2026-base-camp-k-8`; older pages need explicit archive and redirect decisions. Do not let obsolete dates, prices, registration links, or headings leak into the current page.

### Spring Pilot and early-program material

The site retains Spring 2022 Pilot pages, an application, a calendar, a copied pilot page, and 22 event-collection children. These may be historically meaningful but are not in current navigation. Decide whether to preserve an archive summary, retain individual pages, or redirect them.

### Event collections

Several Squarespace collections overlap: `/events`, `/events-one`, `/events-new`, `/familycamp-1`, `/forest-bathing`, and `/events-1-1-forest-bathing`. Their children include old Zoom gatherings, fire circles, retreats, Forest Yoga, Forest Bathing, and Family Base Camp. They should not automatically become six Astro collection systems.

### Individual profiles

The sitemap exposes at least 19 individual person routes in addition to `/the-team`. Some people may be former staff, board members, contractors, or mentors. Confirm current affiliations and whether individual URLs should be preserved, redirected to anchors on the team page, or archived.

### Generic and copied Squarespace titles

Several routes have generic titles such as “General 1,” “About 2,” “Services 3,” “Reviews 1,” and explicit “Copy” labels. These are migration warnings: establish descriptive Astro titles and metadata, but do not change the visible content without approval.

### Empty or embed-driven pages

Some pages have very little or no extractable main text, including a Teen Leadership Institute route, old registration pages, a video page, and a holiday-camps page. They may rely on images, embeds, blocks, or stale content. Inspect them visually before deciding that they are empty.

## Forms, payments, registrations, and external services

The public crawl found native forms on `/`, `/home`, and `/contact-us`. Astro static HTML cannot inherit Squarespace's form storage or mailing-list delivery. Confirm the destination service and data owner before implementing these forms.

External service domains include:

- `connect.intuit.com` for numerous payment destinations.
- `forms.gle` and Google Forms/Docs/Drive for registrations, documents, waivers, or shared materials.
- `operations.daxko.com` and `register.capturepoint.com` for registrations.
- Stripe Checkout and Stripe payment links.
- Eventbrite for a historical event.
- Venmo for at least one payment/action.
- Google Maps and map short links for locations.
- Zoom and Google Calendar links on historical events.
- Squarespace Email Campaign redirect links (`mgcp03.engage.squarespace-mail.com`). These should be resolved to their intended destinations rather than copied blindly.
- Facebook and Instagram global links.

Treat every live payment and registration URL as sensitive logistical content. Test it with the owner, but do not submit a transaction during routine migration. Do not add secrets to the repository; most existing flows appear to be external links and may not need secrets.

The site consistently exposes `wayfindersonthehudson@gmail.com`, including prefilled scholarship, school-program, and support email links. Confirm whether it remains the public address before launch.

## Images and media

- The sitemap and rendered HTML reference hundreds of Squarespace CDN image occurrences, including program photography, portraits, galleries, and a favicon/social image.
- Do not hotlink Squarespace CDN assets as the permanent Astro strategy. Obtain approved originals where possible, optimize them, record permission, and store approved site assets in `public/images/` or a future approved image service.
- Preserve filenames/source URLs in working notes until originals are reconciled.
- Confirm ownership or permission in batches: global brand assets, homepage images, team portraits, current program images, and historical/gallery images.
- The slideshow contains a large image set and may be better migrated as a gallery or historical highlight rather than mechanically reproduced.
- Video and shared-document embeds need separate accessibility, privacy, and longevity review.

## Content and quality risks

1. **Current versus stale logistics:** The crawl spans 2021–2026 and contains many old registration paths.
2. **Contradictory labels:** Some titles and headings disagree about ages (for example, Wise Owls routes/titles reference both 55+, 60+, and 65+).
3. **Duplicate pages:** Squarespace copies can differ subtly; compare content before selecting a canonical route.
4. **Metadata quality:** The homepage has a generic title and empty description, and several pages retain starter-style titles.
5. **Placeholder residue:** Sitemap image captions include generic template language and, on at least one early profile image, unrelated sample biography text. Do not migrate metadata blindly.
6. **Forms:** Native Squarespace forms will stop functioning after cutover unless replaced or deliberately linked elsewhere.
7. **Payments:** Old Intuit, Stripe, Venmo, Eventbrite, JCC/Daxko, or Capturepoint destinations may still resolve while no longer being appropriate.
8. **Image rights:** Public availability is not proof of republication rights.
9. **Accessibility:** Existing headings include multiple H1s on the homepage and image-heavy/low-text pages; the Astro version must establish one H1 and meaningful hierarchy.
10. **SEO:** Route changes require redirects; removal should be based on owner decisions and, when available, traffic/search data.
11. **Cart:** Confirm whether commerce/cart behavior is used before omitting it.
12. **Mailing list:** Confirm whether Squarespace Email Campaigns remains the newsletter provider after hosting moves.

## Recommended parity architecture

Build a restrained set of shared Astro patterns while allowing custom page composition:

- Global header with accessible desktop/mobile navigation.
- Footer with confirmed contact, social, donation, and newsletter destinations.
- Page introduction/hero composition.
- Program summary and program-detail cards.
- Responsive image and gallery treatments.
- People grid and person profile card.
- FAQ accordion using keyboard-operable native behavior.
- Call-to-action band for registration, donation, contact, and scholarships.
- Long-form prose treatment.
- External registration/payment link treatment that clearly identifies the destination.
- Optional historical-event/archive listing only if the owner chooses to preserve it.

Do not create a component for every section. Extract a shared pattern only when the representative pages show a real repeated need.

## Recommended implementation batches

### Batch 1: establish the migration grammar

1. Homepage (`/`)
2. Fall 2026 Programs Overview
3. Fall 2026 Base Camp K–8
4. Our Mission
5. The Team

This batch exercises the global shell, homepage, program cards, a detailed program page, long-form information, and people profiles.

### Batch 2: current programs for younger participants and families

- Forest Tots
- Rose Blossoms
- Motherhood Rising
- Holiday Camps
- Scholarships

### Batch 3: adult and organization-facing services

- Autumn Women's Retreat
- Wise Owls
- Dance Embody Collective
- Walk & Talks
- Corporate Retreats

### Batch 4: organizational and action pages

- Careers
- DEI
- FAQs
- Contact
- Donate
- Internships
- School Programs

### Batch 5: media and historical material

- News
- Video
- Testimonials
- Slideshow
- Past Workshops
- Approved event/program archive

The owner should approve the exact batch contents after resolving the decisions below. Preserve URLs where practical and create explicit redirect mappings before retiring any route.

## Decisions required from the owner

1. Is every route in the current header still intended to remain public?
2. Which 2026 programs are currently open, upcoming, full, or informational only?
3. Should past programs and events remain as an archive, be summarized, or redirect to current programs?
4. Which individual team/profile pages represent current people and approved biographies?
5. Does Wayfinders own or have permission to republish the current images?
6. Can original-resolution logo, homepage, current-program, and team images be supplied?
7. Which service receives the homepage mailing-list submissions?
8. Which service should receive contact-form submissions after Squarespace?
9. Which Intuit, Stripe, Venmo, Daxko/JCC, Capturepoint, Google Form, and Eventbrite links are still valid?
10. Is the Squarespace cart used for any active offering?
11. Should `wayfindersonthehudson@gmail.com` remain the public contact address?
12. Is there Squarespace analytics or Google Search Console data that can guide redirect decisions?
13. Are there hidden, password-protected, draft, or member-only Squarespace pages absent from the public sitemap?
14. May the baseline migration correct clear spelling, metadata, and accessibility defects, or must visible text remain verbatim until later editorial review?

## Definition of baseline parity

A page is ready for the basic Astro version when its owner-approved content is present, its important URL is preserved or mapped, its confirmed actions work, approved images are locally controlled, desktop and mobile are intentionally composed, accessibility checks pass, no Squarespace runtime is required, and no placeholder or stale logistics are presented as final.

Migration parity does **not** authorize DNS changes, a production merge, deletion of Squarespace content, cancellation of Squarespace, or a major redesign. Those remain separate, explicit approvals.
