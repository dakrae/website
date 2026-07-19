# Handoff: David Krähenbühl — Site Restyle (white bg, lavender surfaces, new nav)

## Overview
Restyle of the existing one-page portfolio site for drummer David Krähenbühl (davidkraehenbuehl.ch). The playful neo-brutalist language (Space Mono, thick ink borders, hard offset shadows, marquee, wobbling ✳) is kept, but:
- Page background changed from neon yellow-green (#F7FF9E) to **white**.
- All cream surfaces (#FFFDF2) changed to **light lavender #F0EAFC**.
- **New navigation**: pill-button links with per-link hover colors, plus a mobile burger menu.
- Contact card changed from turquoise to **lavender #C8B6FF**; hero photo shadow matches (#C8B6FF instead of violet).
- Clear affordance rule: clickable = solid border + offset shadow; non-clickable labels = dashed border, no shadow.
- Full mobile behavior defined (see Responsive).

## About the Design Files
`reference/index.html` is a **design reference created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the existing codebase** (the current site is built with **Astro** — component scoping via `data-astro-cid-*` was present in the source). Reuse the existing Astro components/sections; this is a restyle of them, not a rebuild. If no environment exists, Astro remains the appropriate choice.

## Fidelity
**High-fidelity.** Colors, typography, spacing, radii, shadows and interactions are final. Recreate pixel-perfectly.

## Design Tokens
Colors:
- Ink (text/borders): `#1A1030`
- Page background: `#FFFFFF`
- Surface (pills, cards, tables, lesson photo field): `#F0EAFC` (light lavender)
- Yellow accent: `#F2FF26`
- Violet: `#6B2FD6`
- Lavender (contact card, hero photo shadow, hover/chip): `#C8B6FF`
- Lavender pale (footer text): `#EDE6FF`
- Turquoise: `#3BE8D2`
- Pink: `#FF6FB5`
- Collab photo placeholder tints: `#E4DCF8` / `#B4F4E9` / `#FCC4DE`

Typography: **Space Mono** (400/700) everywhere, Google Fonts. Body 16px / 1.7. H2 `clamp(36px,5vw,64px)`, ls −0.03em. H1 `clamp(48px,6.5vw,92px)`, lh 0.95, ls −0.04em, uppercase.

Borders: 3px solid ink (sections/cards/nav bottom), 2px solid ink (pills), **2px dashed ink = non-clickable labels** (hero badge, lesson chips, mobile-menu divider, show-row dividers).

Radii: cards 20px, hero frame 24px, contact card 28px, lesson photo 12px, all pills 999px.

Shadows (hard offset, no blur): wordmark `4px 4px 0 ink`; nav pills `2px 2px 0 ink` (hover `3px 3px 0`); Instagram pill `2px 2px 0 violet`; hero frame `10px 10px 0 #C8B6FF`; card hover `8px 8px 0 <chip color>`; lesson photo `6px 6px 0 ink`; contact card `10px 10px 0 ink`.

Selection: yellow bg, ink text. `scroll-behavior: smooth` (respect `prefers-reduced-motion`). Content max-width 1200px, side padding 32px.

## Screens / Sections

### Navigation (redesigned)
Sticky, white bg, 3px ink bottom border. Bar: flex space-between, padding 14px 32px.
- **Wordmark** "DAVid KRÄHENBÜHL ●" (● violet): bold 15px pill, 2px border, #F0EAFC bg, padding 8px 18px, shadow 4px 4px 0 ink. Hover: yellow bg, rotate(−2deg).
- **Links** (13px uppercase, gap 12px), each a pill: 2px border, #F0EAFC bg, padding 6px 16px, shadow 2px 2px 0 ink. Hover: shadow 3px 3px 0 ink + colored bg + slight rotate — Collaborations: #C8B6FF/−2deg, Live: #3BE8D2/+2deg, Lessons: #FF6FB5/−2deg, Contact: #F2FF26/+2deg.
- **Instagram**: ink bg, yellow text, shadow 2px 2px 0 violet. Hover: violet bg, white text, shadow 3px 3px 0 ink, rotate(−2deg).
- **Mobile (≤760px)**: links replaced by a "Menu ☰"/"Close ✕" pill button (bold, min-height 44px; active state: yellow bg, shadow collapses 1px 1px + translate(2px,2px)). Opens a stacked panel below the bar: 2px dashed ink top divider, full-width centered pill links (min-height 44px, padding 12px 20px, 15px uppercase) with fixed bgs: lavender, turquoise, pink, yellow, ink/yellow (Instagram). Tapping a link closes the menu.

### Hero
Padding 64px 32px 0. Grid 1.1fr / 0.9fr, gap clamp(32px,5vw,72px), centered 1200px.
- Badge "✳ Session Drummer — Zurich": **2px dashed** border pill, yellow bg, rotate(−2deg), no shadow (non-clickable).
- H1: "David / Krähen— / bühl." (3 lines, final period violet).
- Bio paragraph 16px, max-width 520px, margin-top 36px.
- Wobbling ✳: pink, 72px, absolute top −8px right 0, `wobble` 5s (rotate −6°→4°).
- Photo `assets/img01.jpg`: aspect 4/5, 3px border, radius 24px, shadow 10px 10px 0 **#C8B6FF**, object-fit cover.

### Marquee band
Margin-top 80px, ink bg, yellow text, 3px ink top/bottom borders, whole strip `rotate(-1deg) scale(1.02)`. Track: duplicated span "Live Drumming ✳ Studio Sessions ✳ Backing Tracks ✳ Lessons ✳", 18px uppercase ls .08em, padding 14px 0, animation translateX 0→−50% linear 22s infinite.

### Collaborations (`#collaborations`)
Padding 100px 32px 0. H2 "I currently play with."
Grid `repeat(auto-fit,minmax(260px,1fr))`, gap 20px. Cards (links): 3px border, radius 20px, #F0EAFC bg; photo 4/3 with 3px ink bottom border (img02/03/04); name row 20px, padding 20px 22px, ↗ arrow 24px in chip color with 1px ink text-stroke. Chip colors per card: James Gruntz #C8B6FF, Marlin #3BE8D2, loophole #FF6FB5. Hover: translateY(−6px) + shadow 8px 8px 0 chip color.

### Upcoming shows (`#live`)
Padding 110px 32px 0. H2 "Upcoming shows."
Table card: 3px border, radius 20px, #F0EAFC bg. Rows: grid `110px 1fr 1fr 120px`, gap 16px, padding 18px 24px, 2px dashed ink bottom border, 15px (date/city 13px, band uppercase ls .05em, city right-aligned with trailing ●). Row hover: violet bg, yellow text.
Data: 24.07.2026 · Marlin · Millers · Zürich | 16.10.2026 · loophole · artderkultur · Dresden | 17.10.2026 · loophole · Backstein West · Leipzig.

### Lessons (`#lessons`)
Padding 110px 32px 0. H2 "Learn drums & production."
Card: 3px border, radius 20px, #F0EAFC bg, 2-column grid. Left (padding clamp(28px,4vw,48px), column gap 20px): paragraph; three **dashed-border** chips (Drum lessons #C8B6FF, Groove & phrasing #3BE8D2, Logic & Ableton #FF6FB5); CTA pill "Book a trial lesson on Instrumentor ↗" (ink bg, yellow text, 15px, padding 14px 26px, hover violet/white) → instrumentor.ch profile.
Right: 3px ink left divider, **same #F0EAFC bg**, image `img05.jpg` shown **uncropped** (max-height 400px, natural ratio), centered with padding clamp(20px,3vw,40px), framed: 3px border, radius 12px, shadow 6px 6px 0 ink.

### Contact (`#contact`)
Padding 120px 32px. Card: **#C8B6FF** bg, 3px border, radius 28px, padding clamp(40px,6vw,80px), shadow 10px 10px 0 ink. H2 "Get in touch." clamp(40px,6vw,80px); lead 16px max 480px; mail pill (ink bg, yellow text, clamp(16px,2.2vw,24px), padding 18px 32px; hover: pink bg, ink text, rotate(−1.5deg)) → mailto:hallo@davidkraehenbuehl.ch. Wobbling ✳ violet 56px, absolute top −28px right 48px, 4s.

### Footer
Ink bg, 3px ink top border, padding 24px 32px, flex space-between (wrap, gap 8px 16px), 13px, text #EDE6FF. "© 2026 David Krähenbühl" + Instagram link (yellow, hover white).

## Responsive (breakpoint 760px)
- Nav: burger menu as described above.
- Hero: single column; photo block max-width 480px.
- Collaborations: **2 columns** (gap 14px); name rows shrink to 15px / padding 12px 14px.
- Shows rows: switch to `flex; flex-wrap: wrap` (gap 2px 12px, padding 14px 16px, 13px, city `margin-left:auto`) — stays **single-line while it fits**, wraps only when needed.
- Lessons: single column; photo divider becomes border-top, min-height 260px.
- Hit targets ≥44px in mobile menu.

## Interactions & Behavior
- Anchor navigation with smooth scroll (disable under `prefers-reduced-motion`, also freeze wobble/marquee animations).
- External links: `target="_blank" rel="noopener"`.
- Mobile menu state: single boolean; closes on link tap and on viewport resize past breakpoint.
- All hover transitions ~0.15–0.2s.

## Assets
`assets/img01.jpg` hero portrait · `img02.jpg` James Gruntz · `img03.jpg` Marlin · `img04.jpg` loophole · `img05.jpg` teaching photo. All supplied by David (same images as the current live site).

## Files
- `reference/index.html` — self-contained static reference of the final design (open in a browser; includes the ≤760px mobile behavior and burger menu).
- `assets/` — the five photos referenced above.
