# Content parity baseline report

> Generated 2026-08-07T15:38:30+00:00 by `python3 scripts/content_parity.py`.

This is a triage report, not proof of parity. Word and element counts identify likely gaps; every page still requires semantic and visual review.

| Route | Source | Target | Source words | Target words | Ratio | Source images | Target images | Source forms | Target forms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 200 | 200 | 1344 | 549 | 41% | 7 | 2 | 2 | 0 |
| `/autumn-2026-womens-retreat` | 200 | 200 | 249 | 193 | 78% | 3 | 1 | 0 | 0 |
| `/careers` | 200 | 200 | 302 | 332 | 110% | 1 | 1 | 0 | 0 |
| `/contact-us` | 200 | 200 | 117 | 152 | 130% | 1 | 1 | 1 | 0 |
| `/corporate-retreats` | 200 | 200 | 228 | 184 | 81% | 6 | 3 | 0 | 0 |
| `/dance-embody-collective` | 200 | 200 | 86 | 86 | 100% | 1 | 1 | 0 | 0 |
| `/dei` | 200 | 200 | 273 | 290 | 106% | 1 | 1 | 0 | 0 |
| `/donate` | 200 | 200 | 176 | 178 | 101% | 2 | 2 | 0 | 0 |
| `/fall-2026-base-camp-k-8` | 200 | 200 | 506 | 266 | 53% | 5 | 2 | 0 | 0 |
| `/fall-2026-programs-overview` | 200 | 200 | 396 | 254 | 64% | 9 | 12 | 0 | 0 |
| `/faqs` | 200 | 200 | 905 | 807 | 89% | 1 | 1 | 0 | 0 |
| `/forest-tots-12-30-months` | 200 | 200 | 151 | 175 | 116% | 2 | 2 | 0 | 0 |
| `/holiday-camps-1st-8th-graders` | 200 | 200 | 28 | 63 | 225% | 2 | 3 | 0 | 0 |
| `/internships` | 200 | 200 | 286 | 281 | 98% | 5 | 1 | 0 | 0 |
| `/message-from-founders` | 200 | 404 | 13 | 0 | 0% | 0 | 0 | 0 | 0 |
| `/motherhood-rising-6-weeks-12-months` | 200 | 200 | 371 | 255 | 69% | 2 | 2 | 0 | 0 |
| `/our-mission` | 200 | 200 | 70 | 81 | 116% | 0 | 0 | 0 | 0 |
| `/pastworkshops` | 200 | 200 | 696 | 637 | 92% | 10 | 7 | 0 | 0 |
| `/rose-blossoms-12-15-year-old-girls` | 200 | 200 | 1172 | 683 | 58% | 15 | 4 | 0 | 0 |
| `/scholarships-1` | 200 | 200 | 249 | 239 | 96% | 0 | 0 | 0 | 0 |
| `/school-programs` | 200 | 200 | 969 | 881 | 91% | 11 | 1 | 0 | 0 |
| `/slideshow-1` | 200 | 200 | 23 | 34 | 148% | 44 | 44 | 0 | 0 |
| `/testimonials-` | 200 | 200 | 1360 | 1330 | 98% | 4 | 0 | 0 | 0 |
| `/the-team` | 200 | 200 | 194 | 157 | 81% | 13 | 14 | 0 | 0 |
| `/walk-talks` | 200 | 200 | 213 | 207 | 97% | 1 | 1 | 0 | 0 |
| `/wayfinders-in-the-news` | 200 | 200 | 116 | 113 | 97% | 5 | 5 | 0 | 0 |
| `/wayfinders-video` | 200 | 200 | 11 | 65 | 591% | 1 | 1 | 0 | 0 |
| `/wise-owls-55-1` | 200 | 200 | 205 | 178 | 87% | 2 | 2 | 0 | 0 |

## How to use this report

1. Open the corresponding route entry in `baseline.json`.
2. Give every source block, link, image, embed, and form an explicit implementation disposition.
3. Flag conflicting dates, ages, prices, names, locations, or destinations for owner resolution.
4. Re-run this script after the batch implementation and investigate every unexplained gap.
5. Complete desktop/mobile visual review before calling the page content-complete.

## Capture limitations

- Counts exclude the shared header and footer by limiting extraction to `<main>`.
- Lazy or script-rendered embeds may require browser inspection and screenshots.
- A repeated source block may be deduplicated in the structured snapshot; repetition that is editorially intentional must be recorded during review.
- Successful links are not proof that dates, prices, registration ownership, or image rights are approved.
- The temporary Vercel hostname is only the comparison target; publication remains a separate approval.
