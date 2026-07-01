# Sun Metalon – Page Map

**Source:** https://sunmetalon.com/  
**Cloned into:** `D:\site-ecomerce\test-clonage`  
**Framework:** Next.js (App Router + Tailwind CSS)

---

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| `--bg-primary` | `#1b170f` | Dark warm brown-black (body bg) |
| `--bg-secondary` | `#2e281e` | Slightly lighter dark |
| `--bg-card` | `#1b170f` | Card background |
| `--text-primary` | `#ece7e2` | Warm off-white |
| `--text-muted` | `#c2bcb5` | Muted/secondary text |
| `--text-bronze` | `#7b756a` | Bronze/dim text |
| `--accent` | `#d96833` | Orange accent (CTA, hover, underline) |
| `--border` | `#3e3a33` | Border color |
| `--font-body` | `Bastardo Grotesk` | Custom font (semibold/regular/light) |
| `--font-heading` | `Rector Web` | Custom serif-style heading font |
| `--font-jp` | `Noto Sans JP` | Japanese fallback |

**Google Fonts fallback:** Inter (used in Next.js clone as Bastardo is proprietary)

---

## Page Sections (in order)

| # | Component | File | Section ID |
|---|-----------|------|------------|
| 1 | Navbar | `Navbar.tsx` | `#header` |
| 2 | Hero | `Hero.tsx` | `#hero` |
| 3 | Features Strip | `FeaturesStrip.tsx` | `#features` |
| 4 | Applications | `Applications.tsx` | `#applications` |
| 5 | Venus Product | `VenusProduct.tsx` | `#venus` |
| 6 | Briquettes | `Briquettes.tsx` | `#briquettes` |
| 7 | Mission Statement | `MissionStatement.tsx` | `#mission` |
| 8 | Three Benefits | `ThreeBenefits.tsx` | `#benefits` |
| 9 | News Section | `NewsSection.tsx` | `#news` |
| 10 | Newsletter | `Newsletter.tsx` | `#newsletter` |
| 11 | Footer | `Footer.tsx` | `#footer` |

---

## Typography Scale (from source CSS)

| Class | Font | Size | Weight | Notes |
|-------|------|------|--------|-------|
| `.h0` | Rector | 15.28vw | 300 | Hero display |
| `h1` | Rector | 5.56vw | 300 | Page title |
| `h2` | Bastardo | 3.61vw | 400 | Section heading |
| `h3` | Rector | 2.36vw | 300 | Sub-heading |
| `h4` | Bastardo | 1.81vw | 400 | Card heading |
| `h5` | Rector | 1.55rem | 300 | Callout |
| `h6` / `.global-label` | Bastardo | 0.73rem | 400 | Label |
| `p` | Bastardo | 1rem | 400 | Body |
| `.type-benefits` | Bastardo | 12.5vw | 500 | Large benefit text |

---

## Colour Usage Map

| Area | Background | Text | Border | Accent |
|------|-----------|------|--------|--------|
| Body / Global | `#1b170f` | `#ece7e2` | – | – |
| Navbar | `#1b170fcc` (80% opacity) | `#ece7e2` | `#3e3a33` | `#d96833` (active underline) |
| Buttons (default) | `#ece7e2` | `#1b170f` | – | – |
| Buttons (hover) | `#d96833` | `#ece7e2` | – | – |
| Cards / stacking | `#1b170f` | `#ece7e2` | `#3e3a33` | – |
| Footer | `#1b170f` | `#ece7e2` | `#3e3a33` | `#d96833` (hover) |
| Footer submit | `#3e3a33` | `#ece7e2` | – | `#d96833` (hover) |
| Input fields | `#1b170f` | `#ece7e2` | `#3e3a33` | `#d96833` (focus) |
| Nav hover bg | `#2e281e` | – | – | – |

---

## Layout Grid

- Desktop: 12-column grid, `column-gap: 1.11vw`, `padding-left: 2.22vw`
- Mobile: 6-column grid, `column-gap: 4.27vw`, `padding-left: 6.4vw`
- Breakpoint: `939px` (mobile), `766px` (small mobile)

---

## Interaction Patterns

- **Navbar:** Sticky top, hides on scroll down (`transform: translateY(-105%)`), shows on scroll up. Backdrop blur `5px`.
- **Nav links:** Orange 3px underline on active; dark bg fill slide animation on hover.
- **Buttons:** Background transitions `0.35s ease-in-out`; hover → `#d96833` bg, `#ece7e2` text.
- **Applications tabs:** Click to switch active tab (state-driven).
- **News items:** Underline reveals on hover, color → `#d96833`.
