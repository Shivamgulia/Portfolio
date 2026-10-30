# AGENTS.md

Single-page personal portfolio (Next.js 14 App Router, no src/ directory).

## Commands

- Dev: `npm run dev` (port 3000)
- Verify: `npm run build` — this is the only check; `next build` type-checks. No tests exist.
- Do not use `npm run lint`: no ESLint config or dependency is installed, so it fails/prompts.
- Node version is pinned: `.nvmrc` and `engines` require Node 24.x.

## Structure

- `@/*` maps to the repo root (tsconfig paths), so imports look like `@/components/main/About`.
- Page composition: `app/page.tsx` → `components/main/Main.tsx` → section components in `components/main/` (About, Experience, Skills, Education, Projects, BeyondCode).
- CSS Modules live in `styles/`, mirroring `components/` by folder (`styles/components/main/About.module.css`). Page styles: `styles/pages/index.module.css`. Never colocate CSS beside components.
- Portfolio data (projects, experience) is edited in `components/lib/ExperienceList.ts`. Copy is governed by `portfolio-content.md`; metrics must stay truthful there (700+ accounts / 40+ hrs).
- Shared links/constants (resume URL, email, phone, social links) live in `components/lib/siteConfig.ts`.
- Fonts: single Inter family loaded in `app/layout.tsx` via `next/font` as `--font-sans` (no serif); use the variable in CSS instead of raw font names.
- Design language is documented in `design-plan.md` (tokens, type scale, theme mechanism). Tokens live in `app/globals.css` (`--bg`, `--bg-alt`, `--ink`, `--muted`, `--hairline`, `--glass`, `--pill-*`); use them instead of raw colors.

## Gotchas

- `app/page.tsx` uses `"use client"` with `next/head` — title is set there, while metadata is also in `app/layout.tsx`. Change both if renaming.
- `app/page.tsx` wraps content in `<Suspense>` — keep it when editing.
- Assets (profile images, logos/screenshots) live in `assets/images/` and are imported directly as modules (e.g. `import img from "@/assets/images/logos/reactlogo.png"`) for `next/image` — not served from `public/`.
- Theming: an inline script in `app/layout.tsx` sets `data-theme` on `<html>` before paint (`localStorage.theme ?? prefers-color-scheme`); `components/UI/ThemeToggle.tsx` flips and persists it. Dark-mode styles are `[data-theme="dark"]` token overrides in `app/globals.css` — never hard-code dark variants in modules.
