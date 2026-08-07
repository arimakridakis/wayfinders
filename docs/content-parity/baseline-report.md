# Content parity baseline report

> Generated 2026-08-07T18:47:26+00:00 by `python3 scripts/content_parity.py`.

This is a triage report, not proof of parity. Word and element counts identify likely gaps; every page still requires semantic and visual review.

| Route | Source | Target | Source words | Target words | Ratio | Source images | Target images | Source forms | Target forms |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 200 | 200 | 1344 | 1406 | 105% | 7 | 7 | 2 | 2 |
| `/autumn-2026-womens-retreat` | 200 | 200 | 249 | 273 | 110% | 3 | 3 | 0 | 0 |
| `/careers` | 200 | 200 | 302 | 328 | 109% | 1 | 1 | 0 | 0 |
| `/contact-us` | 200 | 200 | 117 | 152 | 130% | 1 | 1 | 1 | 0 |
| `/corporate-retreats` | 200 | 200 | 228 | 246 | 108% | 6 | 6 | 0 | 0 |
| `/dance-embody-collective` | 200 | 200 | 86 | 110 | 128% | 1 | 1 | 0 | 0 |
| `/dei` | 200 | 200 | 273 | 290 | 106% | 1 | 1 | 0 | 0 |
| `/donate` | 200 | 200 | 176 | 178 | 101% | 2 | 2 | 0 | 0 |
| `/fall-2026-base-camp-k-8` | 200 | 200 | 506 | 495 | 98% | 5 | 5 | 0 | 0 |
| `/fall-2026-programs-overview` | 200 | 200 | 396 | 396 | 100% | 9 | 9 | 0 | 0 |
| `/faqs` | 200 | 200 | 905 | 807 | 89% | 1 | 1 | 0 | 0 |
| `/forest-tots-12-30-months` | 200 | 200 | 151 | 180 | 119% | 2 | 2 | 0 | 0 |
| `/holiday-camps-1st-8th-graders` | 200 | 200 | 28 | 46 | 164% | 2 | 2 | 0 | 0 |
| `/internships` | 200 | 200 | 286 | 281 | 98% | 5 | 5 | 0 | 0 |
| `/message-from-founders` | 200 | 200 | 13 | 70 | 538% | 0 | 0 | 0 | 0 |
| `/motherhood-rising-6-weeks-12-months` | 200 | 200 | 371 | 371 | 100% | 2 | 2 | 0 | 0 |
| `/our-mission` | 200 | 200 | 70 | 81 | 116% | 0 | 0 | 0 | 0 |
| `/pastworkshops` | 200 | 200 | 696 | 637 | 92% | 10 | 7 | 0 | 0 |
| `/rose-blossoms-12-15-year-old-girls` | 200 | 200 | 1172 | 1167 | 100% | 15 | 15 | 0 | 0 |
| `/scholarships-1` | 200 | 200 | 249 | 252 | 101% | 0 | 0 | 0 | 0 |
| `/school-programs` | 200 | 200 | 969 | 986 | 102% | 11 | 11 | 0 | 0 |
| `/slideshow-1` | 200 | 200 | 23 | 34 | 148% | 44 | 44 | 0 | 0 |
| `/testimonials-` | 200 | 200 | 1360 | 1330 | 98% | 4 | 0 | 0 | 0 |
| `/the-team` | 200 | 200 | 194 | 2262 | 1166% | 13 | 13 | 0 | 0 |
| `/walk-talks` | 200 | 200 | 213 | 230 | 108% | 1 | 1 | 0 | 0 |
| `/wayfinders-in-the-news` | 200 | 200 | 116 | 113 | 97% | 5 | 5 | 0 | 0 |
| `/wayfinders-video` | 200 | 200 | 11 | 65 | 591% | 1 | 1 | 0 | 0 |
| `/wise-owls-55-1` | 200 | 200 | 205 | 224 | 109% | 2 | 2 | 0 | 0 |

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
