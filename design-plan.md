# Design Plan — "Quiet Cupertino"

Redesign of the portfolio from the print/editorial identity (paper texture, crop marks, serif italics,
terracotta rules) to Apple-marketing-page language: light neutral canvas, monochrome surfaces,
frosted nav, soft-rounded panels, whitespace as the separator.

Content placement is governed by `portfolio-content.md`; this file governs look, feel, and motion.

## Decisions (locked)

| Decision | Choice |
|---|---|
| Accent | None — strict monochrome; black pills, underlined ink links |
| Typeface | Inter via `next/font` (`--font-sans`) with system fallback; Archivo/Newsreader removed |
| Dark mode | Manual toggle + auto (`prefers-color-scheme`), persisted in `localStorage` |
| Hero portrait | Cutout kept, floating on a soft radial gradient |
| Stack | CSS Modules only; no new dependencies |

## Tokens (`app/globals.css`)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#ffffff` | `#000000` | canvas |
| `--bg-alt` | `#f5f5f7` | `#1d1d1f` | panels, cards, chips |
| `--ink` | `#1d1d1f` | `#f5f5f7` | primary text, focus ring, selection |
| `--muted` | `#6e6e73` | `#86868b` | secondary text |
| `--hairline` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.14)` | spec-row dividers |
| `--glass` | `rgba(251,251,253,.8)` | `rgba(22,22,23,.75)` | nav backdrop |
| `--pill-bg` / `--pill-ink` | `#1d1d1f` / `#fff` | `#f5f5f7` / `#000` | primary pill CTA |
| `--radius-card` / `--radius-panel` / `--radius-pill` | 20 / 28 / 980px | same | surface language |
| `--shadow-soft` / `--shadow-lift` | subtle | deeper | hover elevation |

## Type scale

- Hero h1: `clamp(2.6rem, 6.2vw, 4.4rem)` / 600 / -0.03em / 1.05
- Section h2: `clamp(2rem, 4vw, 2.8rem)` / 600 / -0.025em
- Body: 17px / 1.6 / 400; secondary text uses `--muted`
- About prose: `clamp(1.05rem, 1.8vw, 1.25rem)` / 1.7, left-aligned in a centered block
- Sentence case everywhere; no all-caps eyebrows; no `font-stretch`

## Layout

```
┌──────────────────────────────────────────────┐
│ SG.          Experience Skills … [Resume] ☾ │ ← sticky frosted, 52px
├──────────────────────────────────────────────┤
│         Shivam Gulia (muted)                 │
│   Backend Engineer building scalable Java    │ ← centered hero
│   systems with an AI edge.                   │
│   SDE @ Fidelity · Gurugram · Open to…       │
│   [View Resume]   Get in Touch   GitHub      │
│      portrait on soft radial gradient        │
├──────────────────────────────────────────────┤
│ About prose ×3 · Reliability/Security chips  │
├──────────────────────────────────────────────┤
│ Experience — one gray rounded panel,         │
│   entries split by hairline                  │
├──────────────────────────────────────────────┤
│ Skills — spec rows with hairlines            │
├──────────────────────────────────────────────┤
│ Education — spec row                         │
├──────────────────────────────────────────────┤
│ Projects — full-width gray cards, hover      │
│   lift; tag · name · overview · bullets ·    │
│   chips + links footer                       │
├──────────────────────────────────────────────┤
│ Beyond Code — profiles + certifications rows │
├──────────────────────────────────────────────┤
│ Let's build something reliable.  + contact   │
└──────────────────────────────────────────────┘
```

- Container `min(1040px, 86vw)`; section spacing `clamp(4rem, 8vw, 6rem)`; no top-border rules between
  sections (except the footer) — spacing and surface shifts do the separating
- Anti-generic guard: section treatments deliberately differ — Experience panel, Skills/Education spec
  rows, Projects card grid, Beyond Code rows. No single card kit applied everywhere
- Nav: frosted glass; text links hide below 820px; Resume pill + theme toggle persist

## Theme mechanism

1. Inline script first in `<body>` (`app/layout.tsx`): `localStorage.theme ?? prefers-color-scheme`
   → `document.documentElement.dataset.theme`, runs before paint (no flash)
2. CSS: `:root` light defaults; `[data-theme="dark"]` overrides;
   `@media (prefers-color-scheme: dark) { :root:not([data-theme]) { … } }` for no-JS fallback
3. `components/UI/ThemeToggle.tsx` toggles + persists, `aria-label` + `aria-pressed`
4. `suppressHydrationWarning` on `<html>`; `viewport.themeColor` per scheme

## Motion

- One hero load rise (staggered ~60ms steps, 520ms ease-out); portrait joins at 160ms
- Hovers 160–200ms ease (color / underline / opacity / 3px lift)
- `prefers-reduced-motion` disables animation (globals.css)

## Component map

| Piece | File |
|---|---|
| Tokens, base type, selection, focus, reduced motion | `app/globals.css` |
| Inter, theme script, metadata, theme-color | `app/layout.tsx` |
| Nav, footer, section order | `components/main/Main.tsx` (+ `styles/pages/index.module.css`) |
| Hero, prose, chips, CTAs | `components/main/About.tsx` (+ module) |
| Theme toggle | `components/UI/ThemeToggle.tsx` (+ module) |
| Experience entries | `components/UI/ExperienceCard.tsx` (+ module) |
| Project grid cards | `components/UI/ProjectCard.tsx` (+ module) |
| Skills / Education / Projects / Beyond Code sections | `components/main/*` (+ modules) |
| Shared links/constants | `components/lib/siteConfig.ts` |
| Experience + project data | `components/lib/ExperienceList.ts` |

## Verification checklist

- [ ] `npm run build`
- [ ] 375 / 768 / 1440 screenshots, both themes
- [ ] No theme flash on reload; toggle persists
- [ ] `--muted` ≥ 4.5:1 on `--bg` and `--bg-alt` in both themes
- [ ] Focus rings visible in both themes; reduced-motion honored
