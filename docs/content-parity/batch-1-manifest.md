# Batch 1 content-parity manifest

> Capture refreshed **August 7, 2026 at 15:34 UTC** from the current public `wayfindersonthehudson.com` pages. This manifest covers `/`, `/our-mission`, `/the-team`, and `/message-from-founders`. Public availability does not establish image or video ownership.

## Disposition vocabulary

- **Present verbatim:** source wording or source media reference is present without editorial condensation.
- **Restructured without loss:** wording is preserved but its accessible hierarchy or grouping changed.
- **Requires owner decision:** safe completion depends on current-affiliation, provider, rights, transcript, or destination confirmation.
- **Intentionally excluded:** non-content Squarespace implementation residue only.

No Batch 1 source element is classified as **present but condensed** or **missing** after this implementation, except the unavailable Emily Orr linked-profile content explicitly recorded as requiring an owner decision.

## `/`

| Source element | Disposition | Implementation note |
| --- | --- | --- |
| Opening connection message; new-program heading; screen-free introduction | Present verbatim | Reorganized into the single accessible page hero. |
| Source hero photograph `IMG_5636.jpeg` | Present verbatim | Temporary Squarespace CDN reference; source supplied no alt text, so contextual alt text was authored for accessibility. Rights require confirmation. |
| Complete Base Camp heading, introduction, fire-circle/nature-game, SEL/leadership, community-building, flexible-day, 10% discount, and mixed-age mentorship material | Present verbatim | Structured as paragraphs and lists; the source’s duplicated “or (or” is deliberately preserved rather than silently corrected. |
| Base Camp photograph `IMG_9797.jpg` | Present verbatim | Temporary CDN reference with contextual alt text; rights require confirmation. |
| “What is Wayfinders?” explanation, Junior Mentor/Mentor-in-Training and Rites of Passage language, and all three outcomes | Present verbatim | Restructured without loss into a prose section and list. |
| First “Join Our Mailing List” heading, invitation, email field, and submit intent | Restructured without loss / requires owner decision | An accessible, visibly disabled form preserves intent. Submission is deliberately not enabled until provider and data owner are confirmed. |
| “Why Wayfinders?” heading and founders/call-to-action introduction | Present verbatim | Preserved ahead of the editorial sections. |
| Core Values and all eight value/action lines | Present verbatim | Preserved with line breaks. |
| Leadership Development | Present verbatim | Card presentation only. |
| Community Building & Social Justice | Present verbatim | Paragraph break restored where the crawler joined source blocks. |
| Adolescence to Adulthood | Present verbatim | Card presentation only. |
| Safe Space, Belonging | Present verbatim | Paragraph break restored where the crawler joined source blocks. |
| Technology, Social Media, COVID, the Climate Crisis; screen-time claim; mental-health and climate claims; nature and survival skills | Present verbatim | Source claims and “long-tem” typo are preserved without fact-check edits. |
| Your Child’s Future; EQ and emotional-regulation material | Present verbatim | Paragraph break restored without changing wording. |
| Rites of Passage | Present verbatim | Paragraph break restored without changing wording. |
| Both closing statements about disconnection and purposeful connection | Present verbatim | Restructured as paired headings. |
| Remaining five source images (`IMG_9824.jpg`, `IMG_9803.jpg`, `michaeala.jpg`, `Drawing with charcoal.jpeg`, `43-Alice Gwen candle.jpeg`) | Present verbatim | Accessible responsive gallery; temporary CDN references and authored contextual alt text. Rights require confirmation. |
| Lenape acknowledgment and responsibility | Present verbatim | Preserved as one complete paragraph; heading hierarchy changed from a second source H1 to an H2. |
| Closing real-life invitation and programs action | Present verbatim / requires owner decision | The wording is preserved. The source link points to `/spring-2026-programs-overview`, while current public navigation and Astro point to Fall 2026; no stale source URL was silently reproduced. Owner confirmation remains required. |
| Repeated mailing-list invitation and second email form | Restructured without loss / requires owner decision | Intentional repetition preserved; submission remains visibly disabled pending provider confirmation. |
| Public email address and `(917) 318-3888` | Present verbatim / requires owner decision | Preserved exactly; owner should confirm both remain current before publication. |
| Squarespace scripts, tracking, layout spacers, responsive duplicates, and template markup | Intentionally excluded | They are implementation residue, not meaningful source content. |

## `/our-mission`

| Source element | Disposition | Implementation note |
| --- | --- | --- |
| “Our Mission” heading | Present verbatim | Promoted from source H2 to the page’s sole H1. |
| Complete mission paragraph | Present verbatim | No wording changes. |
| Complete core-values/cultural-repair paragraph | Present verbatim | The public source’s grammatically questionable `Wayfinders' strives` is deliberately preserved pending editorial approval. |
| Existing Astro eyebrow and connection introduction | Restructured without loss | Retained as design-supporting context; they do not replace or condense source wording. |

## `/the-team`

| Source element | Disposition | Implementation note |
| --- | --- | --- |
| “Meet the Team” and all 13 listed people | Present verbatim | All listing names are retained in source order with all 13 portraits. |
| Gwen Merkin and Leah Gozhansky listing roles | Present verbatim | Roles match the Team index. Linked credentials and complete biographies are embedded. |
| Sayako Aizeki-Nevins, Rebecca D’Elia, Bryte Gordon, Sonjaia McCrae, Stacie Bartolotta, Hannah Van Dolsen, and Miriam Rubin | Restructured without loss | Complete current linked-profile credentials/roles and every biography paragraph are available in native expandable details. |
| Jennie Brotman, Jaime Schwarz, and Aron Goldman | Restructured without loss / requires owner decision | Team-index board labels plus complete linked-profile content are retained. Jaime’s linked profile instead labels him “Brand Therapist/Creative Director,” and Aron’s says “Board Director”; current affiliations require confirmation. |
| Emily Orr listing and portrait | Present verbatim / requires owner decision | The Team index lists and links Emily, but `/emily` returned 404 on capture. No role or biography was invented. |
| Complete “Our Story” heading and both paragraphs | Present verbatim | The previously condensed Astro rewrite was replaced with the public wording. |
| All 13 portraits | Present verbatim | Temporary Squarespace CDN references with authored portrait alt text. Rights and approved originals require confirmation. |
| Linked profile destinations | Restructured without loss | Source paths are disclosed alongside each embedded bio. Profiles were not recreated as Batch 1 routes; their meaningful content is consolidated into `/the-team`. |
| Repeated profile-footer email and phone | Intentionally excluded from each embedded bio | They are shared site footer residue rather than unique profile content; the same public contact information remains globally available. |

## `/message-from-founders`

| Source element | Disposition | Implementation note |
| --- | --- | --- |
| “A Message from the Founders” | Present verbatim | Sole page H1. |
| “Hear from Leah and Gwen about their mission!” | Present verbatim | Hero introduction. |
| 54.487-second, 16:9 Squarespace-native founder video | Restructured without loss / requires owner decision | Visual HTML inspection found video ID `83c7e413-f3c4-4094-9ad3-fd8ac4d8731d`; it is represented with native accessible controls and a temporary Squarespace HLS CDN reference. Ownership and an approved original are required. |
| Transcript/captions | Requires owner decision | The source page exposes no transcript, caption track, or semantic alternative. An owner-provided or approved transcript/caption file is required; none was invented. |
| Squarespace video player JavaScript and component wrapper | Intentionally excluded | Native HTML video replaces vendor runtime residue. |

## Explicit unresolved decisions

1. Confirm current roles and affiliations for every person, especially Emily Orr (404 profile), Jaime Schwarz, and Aron Goldman.
2. Confirm ownership/licensing and supply approved originals for all 20 Batch 1 image/video assets (seven homepage images, thirteen portraits, and the founders video).
3. Provide or approve a transcript and captions for the founders video.
4. Confirm the newsletter provider/data owner before enabling either intentionally repeated homepage form.
5. Confirm the homepage phone, public email, and current programs destination; the captured source action still names Spring 2026 while current navigation names Fall 2026.
6. Approve any future corrections to preserved source grammar, spelling, claims, or duplicated wording.

## Visual review artifacts

Desktop (1440 × 1000) and mobile (390 × 844) captures were generated for each Batch 1 source and Astro route during validation. The PNG files are deliberately not committed because this repository's pull-request creation workflow does not support binary-file diffs. Regenerate them into the ignored `docs/content-parity/screenshots/` directory for local or preview review.
