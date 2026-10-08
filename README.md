# RIVALS RANK — Marvel Rivals ranked toolkit (Astro)

Unofficial fan-made ranked calculators for **Marvel Rivals**. Domain: **https://rivalsrank.top**.

## Stack & commands
Astro 5, static output, vanilla JS islands. `npm install` → `npm run dev` / `npm run build` → deploy `dist/`.

## Pages (17)
`/` · `/tools/` · tools: `/rr-estimator/`, `/rank-percentile/`, `/rank-distribution/`, `/reset-planner/` ·
guides: `/guides/how-rr-works/`, `/guides/ranks-explained/`, `/guides/climbing-math/` ·
trust pages from `src/data/site.ts` via `src/pages/[slug].astro` · `404`.

## Design
Comic-book theme: near-black base, thick ink outlines, hard offset shadows, yellow/red/blue primaries, Bangers display type, halftone-dot backdrop — distinct per-game identity.

## Data policy
No official Marvel Rivals distribution exists. The tier table ships as editable placeholders (localStorage key `rivalsrank-dist-v1`); tools compute exact math on whatever the user supplies. RR defaults are community-reported [VERIFY] inputs.

## [NEEDS DATA] before launch
1. Current-season RR values + reset rule (patch notes) → update defaults & [VERIFY] flags.
2. About page operator bio (placeholder comment in `site.ts`).
3. Mailbox for `hello@rivalsrank.top`.
