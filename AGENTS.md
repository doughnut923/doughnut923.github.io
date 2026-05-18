# AGENTS.md

## Project

Personal portfolio site (Nextfolio template) deployed at `doughnut923.github.io`.
- **Framework**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS 3 + `@tailwindcss/typography`
- **Package manager**: `pnpm` (preferred). CI falls back to `npm` if no `pnpm-lock.yaml`.

## Commands

```
pnpm dev       # dev server on :3000
pnpm build     # static export → ./out
pnpm start     # serve production build (not used in prod)
```

No test, lint, or typecheck scripts exist. Verify changes with `pnpm build`.

## Deployment

- **Production**: GitHub Pages via `.github/workflows/nextjs.yml` on push to `main`.
- `next.config.ts` sets `output: "export"` — the site is fully static. The `./out` directory is the deploy artifact.
- Feed rewrites (`/rss.xml`, `/atom.xml`, `/feed.json`) work in dev via `async rewrites()`; static export serves files directly from `/feed/`.

## Architecture

- All code lives under `app/` (App Router). No top-level `components/` or `lib/` dirs.
- `app/config.ts` — site metadata, social links. Primary edit point for SEO/personalization.
- `app/components/` — all UI components (nav, footer, mdx renderer, theme switch, etc.).
- `content/` — MDX blog posts.
- `public/` — static assets (images, fonts, SVGs).

## Conventions / Quirks

- `tsconfig.json`: `strict: false`, only `strictNullChecks: true`. Don't assume strict TS.
- Blog MDX uses `remark-math` + `rehype-katex` for math rendering.
- Smooth scroll via `lenis` — `<Lenis root />` wraps content in `app/layout.tsx`.
- Theme: `next-themes` with system default, toggle in `app/components/theme-switch.tsx`.
- RSS/Atom/JSON feeds generated at build time from blog content.
- Both `package-lock.json` and `pnpm-lock.yaml` exist — use `pnpm` locally.

## Theme & Dark Mode

- `tailwind.config.js` uses `darkMode: "class"`.
- `app/layout.tsx` has a `<script dangerouslySetInnerHTML>` in `<head>` that applies the `dark` class before React hydrates — do not remove; it prevents hydration mismatch.
- Custom color `dark: '#111010'` is defined in `tailwind.config.js`. Prefer `text-[#111010] dark:text-white` over `text-dark dark:text-white` — the custom utility class can be overridden incorrectly in production builds due to CSS specificity.
- `.stroked` class (stroked/outline text) has a `.dark .stroked` override in `app/global.css` for stroke color adaptation.

## Animations

- **Use CSS `@keyframes` for opacity/visibility transitions**, not React-driven `transition-*` class swaps. CSS transitions fail in static export because React hydration timing doesn't reliably trigger them. Use `fade-in`, `appear-left`, `appear-right`, `appear-up` from `app/global.css`.
- Staggered entrance animations use `.delay-100` through `.delay-700` classes (defined in `app/global.css`).
- Elements with slide-in animations should be wrapped in `overflow-hidden` containers to hide the off-screen starting position.
- `.clip-right` wraps elements that should clip overflow on the right side only (used for large text that bleeds past container).

## Workflow

- Use subagents for planning, research, and implementing changes. Delegate file edits, component creation, and content updates to subagents rather than doing them inline.
- For multi-part tasks (e.g. adding a feature across several components), split work across parallel subagents.
- After subagent work completes, verify with `pnpm build`.
