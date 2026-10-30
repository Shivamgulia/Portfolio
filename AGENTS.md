# AGENTS.md

Single-page personal portfolio (Next.js 14 App Router, no src/ directory).

## Commands

- Dev: `npm run dev` (port 3000)
- Verify: `npm run build` — this is the only check; `next build` type-checks. No tests exist.
- Do not use `npm run lint`: no ESLint config or dependency is installed, so it fails/prompts.
- Node version is pinned: `.nvmrc` and `engines` require Node 24.x.

## Structure

- `@/*` maps to the repo root (tsconfig paths), so imports look like `@/components/main/About`.
- Page composition: `app/page.tsx` → `components/main/Main.tsx` → section components in `components/main/` (About, Experience, Skills, Education, Projects).
- CSS Modules live in `styles/`, mirroring `components/` by folder (`styles/components/main/About.module.css`). Page styles: `styles/pages/index.module.css`. Never colocate CSS beside components.
- Portfolio data (projects, experience) is edited in `components/lib/projectList.ts` and `components/lib/ExperienceList.ts`.
- Fonts are loaded once in `app/layout.tsx` via `next/font` (Archivo + Newsreader) and exposed as `--font-sans` / `--font-serif` CSS variables; use these variables in CSS instead of raw font names.
- Site-wide constants (resume URL, phone, social links) live at the top of `components/main/Main.tsx`.

## Gotchas

- `app/page.tsx` uses `"use client"` with `next/head` — title is set there, while metadata is also in `app/layout.tsx`. Change both if renaming.
- `app/page.tsx` wraps content in `<Suspense>` — keep it when editing.
- Assets (profile images, logos/screenshots) live in `assets/images/` and are imported directly as modules (e.g. `import img from "@/assets/images/logos/reactlogo.png"`) for `next/image` — not served from `public/`.
