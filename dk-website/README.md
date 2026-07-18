# Handoff: davidkraehenbuehl.ch — Website Redesign

## Overview
Redesign of the existing one-page portfolio site for David Krähenbühl (drummer, Zurich), currently live at davidkraehenbuehl.netlify.app. Direction: artsy and playful but not childish — neo-brutalist accents (thick ink borders, hard offset shadows, sticker elements) on a bright lavender/yellow/turquoise/pink palette, everything set in a monospace font. Structure matches the live site plus one NEW section: **Lessons** (links to the Instrumentor teaching profile).

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. Recreate this design in the existing website codebase (the current static/Netlify setup) using its established patterns. `David Kraehenbuehl v2.dc.html` uses a custom component runtime (`support.js`, `image-slot.js`, `{{ }}` template holes, `sc-for`/`sc-if`, `style-hover` attributes) — treat those as spec, not as code to ship:
- `sc-for` = repeat the element for each data item (data arrays are at the bottom of the file in the script block).
- `style-hover="…"` = the element's `:hover` CSS.
- `<x-import component-from-global-scope="image-slot">` = an image placeholder; in production this is simply an `<img>` (object-fit: cover) filling the same frame.
- `{{ pageBg }}` resolves to `#F7FF9E` (yellow — the chosen default).

## Fidelity
**High-fidelity.** Colors, typography, spacing, copy, and interactions are final. Recreate pixel-perfectly.

## Design Tokens
Colors:
- Ink (text, borders): `#1A1030`
- Page background: `#F7FF9E` (pale yellow — default) / alt `#EDE6FF` (lavender)
- Yellow accent (text on dark, selection): `#F2FF26`
- Violet: `#6B2FD6`
- Lavender: `#C8B6FF`
- Turquoise: `#3BE8D2`
- Pink: `#FF6FB5`
- Card background: `#FFFDF2`

Typography:
- Font: **Space Mono** (Google Fonts, weights 400/700, italic 400), fallback `"Andale Mono", "Lucida Console", monospace`. Applied to everything.
- H1: `clamp(56px, 9vw, 128px)`, line-height 0.95, letter-spacing -0.04em, uppercase
- H2: `clamp(36px, 5vw, 64px)`, letter-spacing -0.03em
- Section eyebrow: 13px, uppercase, letter-spacing 0.15em, violet
- Body: 16px, line-height 1.7

Recurring patterns:
- Borders: `3px solid #1A1030` (2px on small pills/chips)
- Radii: cards 20px, hero image 24px, contact card 28px, pills 999px
- Hard offset shadows (no blur): e.g. `10px 10px 0 #6B2FD6` (hero image), `4-5px 4-5px 0 #1A1030` (stickers), `10px 10px 0 #1A1030` (contact card)
- Content max-width: 1200px, section side padding 32px
- Decorative motifs: text glyphs `✳ ● ↗` only (no icon library)
- `::selection { background: #F2FF26; color: #1A1030; }`
- Default link color: inherit; link hover: `#6B2FD6`

Animations:
- `wobble`: rotate -6deg → 4deg → -6deg, ease-in-out infinite (hero ✳ 5s, contact ✳ 4s)
- `marquee`: translateX 0 → -50%, linear infinite 22s (content duplicated 2× for seamless loop)

## Screens / Views (single page, top to bottom)

### 1. Sticky Nav
- Flex row, space-between, padding 20px 32px, `border-bottom: 3px solid ink`, background = page bg, sticky top, z-50.
- Left: "DAVID KRÄHENBÜHL ●" 15px bold, links to top.
- Right (flex, gap 28px, 13px uppercase): Collaborations, Live, Lessons, Contact — hover: violet + `text-decoration: underline wavy`. Then Instagram pill: ink bg / yellow `#F2FF26` text, radius 999px, padding 2px 10px; hover: pink bg `#FF6FB5`, ink text. Opens instagram.com/davidkrae in new tab.

### 2. Hero (id `top`)
- Padding 64px 32px 0.
- Sticker badge: "✳ Drummer — Zurich", turquoise bg, 2px border, pill, rotate(-2deg), shadow `4px 4px 0 ink`.
- H1: "DAVID / KRÄHEN— / BÜHL." (3 lines, hard breaks), final period in violet.
- Intro paragraph (max-width 520px): "David Krähenbühl is a drummer from Zurich, working as an in-demand sideman and as co-bandleader of the instrumental trio loophole. His playing is groovy and atmospheric, shaped by musicians such as BADBADNOTGOOD, Yussef Dayes, and Tom Misch."
- Wobbling pink ✳ (72px) absolutely positioned top-right of the headline block (intentionally overlaps the headline edge).
- Hero image: 16/9, full content width, 3px border, radius 24px, shadow `10px 10px 0 #6B2FD6`. Use `/images/hero.jpg` from the existing site.
- Sticker on the image's bottom-right (rotate 3deg, turquoise, pill, shadow `5px 5px 0 ink`): "groovy & atmospheric".

### 3. Marquee band
- Full-width strip, ink bg, yellow `#F2FF26` text, rotated -1deg (scale 1.02 to cover edges), margin-top 80px.
- Scrolling text 18px uppercase, letter-spacing 0.08em: "Live shows ✳ Studio sessions ✳ New projects ✳ loophole ✳ James Gruntz ✳ Marlin ✳" — duplicated, 22s linear loop.

### 4. Collaborations (id `collaborations`, eyebrow "(01) Collaborations")
- H2 "I currently play with."
- Grid `repeat(auto-fit, minmax(260px, 1fr))`, gap 20px. Three link cards (open in new tab):
  - James Gruntz → jamesgruntz.com, accent lavender `#C8B6FF`
  - Marlin → marlinmusic.ch, accent turquoise `#3BE8D2`
  - loophole → loophole.ch, accent pink `#FF6FB5`
- Card: `#FFFDF2` bg, 3px border, radius 20px, overflow hidden. Top: band photo, 4/3, `border-bottom: 3px solid ink`, object-fit cover. Bottom row (padding 20px 22px, space-between): band name 20px + `↗` arrow 24px in the card's accent color with 1px ink text-stroke.
- Hover: `translateY(-6px)` + shadow `8px 8px 0 <accent>`; transition 0.2s.

### 5. Live (id `live`, eyebrow "(02) Live")
- H2 "Upcoming shows."
- One table-card: 3px border, radius 20px, `#FFFDF2` bg, overflow hidden.
- Each row: grid `110px 1fr 1fr 120px`, gap 16px, padding 18px 24px, `border-bottom: 2px dashed ink`. Cells: date (13px) / band uppercase / venue / city right-aligned + " ●" (13px).
- Row hover: violet bg, yellow `#F2FF26` text (transition 0.15s).
- Data: 6 loophole shows (dates TBD "DD.MM.YY"): artderkultur Dresden, Backstein West Leipzig, Kiff Aarau, Kulturwerk 118 Sursee, Litcafé Biel, Moods Zurich.

### 6. Lessons (id `lessons`, eyebrow "(03) Lessons") — NEW
- H2 "Learn drums & production."
- Two-column card (50/50 grid, use `minmax(0,1fr) minmax(0,1fr)`), 3px border, radius 20px, `#FFFDF2` bg, overflow hidden.
- Left column (padding clamp(28px,4vw,48px), vertical flex gap 20px, centered):
  - Copy: "Drum lessons from hip-hop to pop — Dilla swing, groove & phrasing, playing in bands — plus mixing and producing with Logic & Ableton Live. In Zurich, for beginners and advanced players, in German or English."
  - Three chips (2px border, pill, 4px 14px, 13px): "Drum lessons" lavender / "Groove & phrasing" turquoise / "Logic & Ableton" pink.
  - CTA button: "Book a trial lesson on Instrumentor ↗" — ink bg, `#F2FF26` text, pill, padding 14px 26px, 15px; hover violet bg/white text. Links to https://www.instrumentor.ch/de/david-kraehenbuehl (new tab).
- Right column: photo (teaching/portrait), `border-left: 3px solid ink`, min-height 320px, object-fit cover.

### 7. Contact (id `contact`, eyebrow "(04) Contact")
- Section padding 120px 32px.
- Card: turquoise `#3BE8D2` bg, 3px border, radius 28px, padding clamp(40px,6vw,80px), shadow `10px 10px 0 ink`.
- H2 "Get in touch." `clamp(40px, 6vw, 80px)`; copy "Open to live shows, studio sessions, and new projects."
- Mail button: "hallo@davidkraehenbuehl.ch ↗" — ink bg, `#F2FF26` text, pill, padding 18px 32px, font `clamp(16px, 2.2vw, 24px)`; hover: pink bg, ink text, rotate(-1.5deg).
- Wobbling violet ✳ (56px) overlapping the card's top-right edge.

### 8. Footer
- Ink bg, lavender `#EDE6FF` text, 13px, padding 24px 32px, flex space-between.
- "© 2026 David Krähenbühl" / "Instagram ↗" in `#F2FF26` (hover white).

## Interactions & Behavior
- Anchor navigation with the sticky nav (smooth scroll optional).
- All hover states as specified per section; transitions 0.15–0.2s.
- Marquee + wobble keyframes as in Design Tokens.
- Responsive: relies on clamp() type, auto-fit grids, and flex wrap. The prototype was designed desktop-first; for narrow screens, collapse the nav links as needed, let the Lessons card stack to one column, and let show rows wrap — use judgment consistent with the tokens.

## State Management
None — fully static page. No JS required beyond (optional) smooth scrolling; marquee and wobble are pure CSS.

## Assets
- Hero: existing `/images/hero.jpg` from the live site.
- Needed from David: one photo per band (James Gruntz, Marlin, loophole) and one lessons/teaching photo. The prototype uses drop placeholders for these.
- Font: Space Mono via Google Fonts (`family=Space+Mono:ital,wght@0,400;0,700;1,400`).

## Files
- `David Kraehenbuehl v2.dc.html` — the full design reference (template + data arrays at the bottom).
