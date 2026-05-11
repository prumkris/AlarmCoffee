# Alarm Clock Coffee — Design Brainstorm

## Context
A coffee shop and roastery in Chamkar Doung, Phnom Penh, Cambodia.
Known for: freshly roasted Mondulkiri robusta, drip Arabica, iced lattes, bubble tea.
Vibe: friendly, passionate, potent, aromatic. Rating: 4.6/5 (38 reviews).

---

<response>
<probability>0.07</probability>
<idea>

**Design Movement:** Brutalist Warmth — raw structure softened by amber and espresso tones

**Core Principles:**
- Unapologetic typographic hierarchy with oversized display text
- Industrial grid broken by organic coffee-stain motifs
- Warmth through color, not decoration
- Honest, direct communication — no fluff

**Color Philosophy:**
Deep espresso (#1A0F08), burnt amber (#C8622A), cream parchment (#F5EDD8), charcoal (#2E2E2E).
The palette evokes a roastery — dark, rich, with flashes of warm amber like a flame under a roaster drum.

**Layout Paradigm:**
Asymmetric column splits — hero uses a 60/40 vertical split with text bleeding into image.
Sections alternate between full-bleed dark and cream backgrounds.
Menu uses a raw table layout with thick borders.

**Signature Elements:**
- Oversized clock numerals as decorative background watermarks
- Coffee ring stain SVG dividers between sections
- Bold uppercase section labels with letter-spacing: 0.3em

**Interaction Philosophy:**
Hover states reveal amber underlines. Scroll-triggered text slides in from left.
Buttons are rectangular with thick borders — no rounded corners.

**Animation:**
- Hero text: staggered word-by-word entrance, 0.08s delay each
- Section transitions: horizontal wipe reveals
- Menu items: fade-up on scroll

**Typography System:**
- Display: "Playfair Display" (serif, bold 900) — for headlines
- Body: "DM Sans" (400/500) — clean, readable
- Accent: "Space Mono" (monospace) — for prices, times, labels

</idea>
</response>

<response>
<probability>0.06</probability>
<idea>

**Design Movement:** Southeast Asian Modernism — Khmer craft meets contemporary minimalism

**Core Principles:**
- Geometric patterns inspired by Khmer textile motifs
- Warm neutrals with a single bold accent
- Generous whitespace as a luxury signal
- Photography-first storytelling

**Color Philosophy:**
Warm ivory (#FAF6EE), deep teak (#3D2B1F), saffron gold (#E8A020), muted sage (#8A9E7A).
Inspired by Cambodian silk weaving and the golden hour light of Phnom Penh.

**Layout Paradigm:**
Offset card grid — content cards sit at slight angles (2–3deg rotation) to suggest handcrafted imperfection.
Navigation is a slim left-anchored vertical bar on desktop.
Hero is full-bleed with a diagonal crop revealing the interior photo.

**Signature Elements:**
- Thin geometric border patterns (Khmer-inspired) as section dividers
- Gold leaf texture overlays on dark backgrounds
- Circular image crops for staff/product photography

**Interaction Philosophy:**
Hover rotates cards back to 0deg (snapping to grid). Smooth, deliberate transitions at 400ms.
Gold accent color bleeds into interactive elements on focus.

**Animation:**
- Page load: fade in from warm white
- Cards: rotate-correct on hover (from slight tilt to straight)
- Scroll: parallax on hero image at 0.4x speed

**Typography System:**
- Display: "Cormorant Garamond" (serif, italic 600) — elegant, literary
- Body: "Nunito Sans" (300/400) — approachable, light
- Labels: "Courier Prime" — for menu prices and timestamps

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

**Design Movement:** Analog Warmth — vintage print shop aesthetic meets specialty coffee culture

**Core Principles:**
- Texture-forward design: paper grain, ink bleed, worn edges
- Typographic layering — multiple type styles coexist like a hand-composed poster
- Warm, low-contrast photography treatment (slight sepia)
- Handcrafted feel without being kitschy

**Color Philosophy:**
Aged paper (#EDE0C8), dark roast brown (#2C1A0E), rust red (#A63D2F), faded olive (#6B7A4A).
Like a vintage coffee tin label — deliberate, nostalgic, trustworthy.

**Layout Paradigm:**
Magazine-style editorial layout: varying column widths, pull quotes, and text wrapping around images.
Hero section mimics a vintage poster with layered type and a centered composition.
Menu section styled as a chalkboard or printed broadsheet.

**Signature Elements:**
- Halftone dot texture overlays on image backgrounds
- Stamp/badge UI elements for ratings and certifications
- Distressed border frames around photos

**Interaction Philosophy:**
Hover adds a subtle ink-press shadow effect. Buttons have a "stamp" press animation on click.
Transitions are slightly slower (500ms) to feel deliberate and weighted.

**Animation:**
- Hero: typewriter effect for tagline
- Section entrance: fade-in with slight downward drift (20px → 0)
- Menu items: stagger reveal like cards being dealt

**Typography System:**
- Display: "Abril Fatface" (serif display) — bold, poster-like
- Body: "Lora" (serif, 400) — warm, readable, editorial
- Labels: "IBM Plex Mono" — for prices, tags, operational info

</idea>
</response>

---

## Selected Design: **Analog Warmth** (Option 3)

Chosen for its authentic, handcrafted personality that matches Alarm Clock Coffee's identity as a passionate local roastery. The vintage poster aesthetic, editorial layout, and warm earthy palette will make the site feel distinctive and memorable — not like a generic coffee chain website.
