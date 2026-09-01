# Images

## Photographs

| File | Used for | Source |
|---|---|---|
| `people-linqi-lu.jpg` | PI portrait (900×1125) | linqilu.com |
| `project-purrfessor.jpg` | Purrfessor project figure (1200×797) | linqilu.com |
| `project-philosopher.jpg` | AI Philosopher NPCs figure (1055×743) | linqilu.com |

All three come from Dr. Lu's own site and are hers to re-use.

Replace any of them by saving a new file over the same filename — no code change
needed. Portraits are cropped by CSS rather than by the file: `object-fit: cover`
with `object-position` biased toward the top so faces stay in frame when a 4:5
headshot is cropped to a square avatar. A photo with an unusual crop may need its
own `object-position` — see `.portrait` and `.member__img` in
`assets/css/main.css`.

## Generated diagrams

Two projects have no photograph, so their figures are drawn. Each shows the
actual mechanism rather than standing in for a missing image:

| File | Shows |
|---|---|
| `project-benchmark.svg` | Human codes beside model codes, with one disagreement marked |
| `project-clip.svg` | Detection boxes with confidence scores over a marketing image |

They use transparent backgrounds so they inherit the page surface and work in
both light and dark themes.

## Adding a new lab member

Add them to `SITE.people` in `assets/js/data.js` and point their `img:` field at
a file here. Leave `img` empty and the avatar is skipped — the entry still
renders. Suggested size for an avatar is 400×400 or larger, square or 4:5.
