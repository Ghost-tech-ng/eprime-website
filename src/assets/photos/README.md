# Photos

Drop images here and rebuild. Each slot on the site looks for a file with the name below, in `.webp`, `.avif`, `.jpg`, `.jpeg` or `.png` (WebP is best). If a file is missing, that slot shows the isometric drawing placeholder instead, so you can add photos one at a time.

The alt text and captions are in `src/content/site.ts`. If a photo shows something different from its alt text, change the alt text too.

## House style

- Real photography. No people: no faces, hands or silhouettes.
- Documentary feel, natural light, a little dust and wear. Nothing glossy or staged.
- Grade: shadows lean teal (verdigris `#167A6E`), highlights lean warm bronze (`#B9822A`), and blacks stay soft.
- Keep the middle of the frame clean. The caption chip sits bottom left.
- No visible logos, brand names or readable text other than our own.

## Sizes

| Slot | Size | Ratio |
|------|------|-------|
| `*-hero`, `home-benin` | 1600 × 1000 | 16:10 |
| Gallery (the other two per division) | 1200 × 900 | 4:3 |

Keep each file under about 300 KB.

## Prompts

Add the house style above to every prompt.

| File | Prompt |
|------|--------|
| `tech-hero` | A laptop and a phone on a wooden desk in a small Benin City workshop, both screens showing a clean teal-and-white dashboard. Morning light from a side window, a coiled cable, no people. |
| `tech-rack` | Close-up of a network patch panel and a small server rack, with neatly labelled cables in teal and bronze sleeves and small green status lights. Shallow depth of field, no people. |
| `tech-devices` | A row of tablets standing in a charging rack in a school office, the screens showing a timetable dashboard. Plain painted wall, soft daylight, no people. |
| `agro-hero` | Raised greenhouse beds of leafy vegetables with black drip-irrigation lines, under a translucent roof in early morning light. Humid air, no people. |
| `agro-poultry` | Inside a clean, well-lit layer poultry house with wire cages, egg trays, mesh walls and daylight. Orderly and hygienic, no people. |
| `agro-aquaculture` | Rectangular concrete fish ponds at dawn, a paddlewheel aerator churning the water, palm trees behind and light mist. No people. |
| `build-hero` | A steel rebar cage for a concrete column inside timber formwork on a Nigerian building site at dawn. Tie wire visible, red laterite soil, no people. |
| `build-drawings` | Engineering drawings on a sheet of plywood with a scale rule, a pencil and a tablet showing the same plan. Seen from directly above, no people. |
| `build-structure` | A reinforced concrete frame building with the first-floor slab just poured, props underneath and blue sky. Wide shot, no people. |
| `capital-hero` | Bound ledgers, a printing calculator with a paper roll and a fountain pen on a dark wooden desk, lit by a warm lamp. No people. |
| `capital-portfolio` | Aerial drone view of green farmland next to a building site with a concrete frame, in Edo State, in late afternoon light. No people visible. |
| `capital-records` | A metal shelf of labelled archive boxes marked by year, in a tidy records room with soft light. No readable names, no people. |
| `home-benin` | Traditional bronze-casting tools, clay moulds and one finished bronze piece on a worn workbench in a Benin City workshop. Warm light, no people. |

## After adding files

```bash
npm run build
```

Images are imported at build time, so they get hashed filenames and long cache headers.
