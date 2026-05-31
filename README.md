# Haris Pašić — Portfolio

Personal portfolio for **Haris Pašić**, frontend-focused software engineer. Showcases shipped products, technical case studies, experience, and contact details in a performance-focused, responsive single-page site.

**Production:** [portfolio-mauve-nu-57.vercel.app](https://portfolio-mauve-nu-57.vercel.app/)

---

## Overview

A static-first Next.js portfolio built to present production work with clear engineering narrative—featured products (FitBook AI, UrbanKey Sarajevo), case study breakdowns, skills, experience, and contact. Content lives in typed data modules; the UI is composed from focused section components with light/dark theme support.

---

## Features

- **Responsive layout** — mobile-first design from small phones through large desktop viewports
- **Light / dark theme** — navbar toggle with persisted preference and no-flash bootstrap script
- **Featured products** — FitBook AI and UrbanKey Sarajevo with live demos, GitHub links, and screenshots
- **Technical case studies** — problem, solution, delivery, CI pipeline, and roadmap (UrbanKey)
- **Engineering narrative** — SaaS architecture highlights for full-stack product work
- **Accessible navigation** — primary nav, mobile menu, scroll-to-top, and in-page anchors
- **Automated testing** — Vitest unit/smoke tests and Playwright end-to-end coverage
- **CI pipeline** — GitHub Actions quality gate on every push and pull request to `main`

---

## Tech stack

**Framework** — Next.js 16 (App Router), React 19, TypeScript

**Styling** — Tailwind CSS v4, CSS custom properties, design tokens for light/dark surfaces

**Motion** — Framer Motion for section and card entrance animations

**Testing** — Vitest, Testing Library, Playwright

**CI** — GitHub Actions

**Compiler** — React Compiler enabled via Babel plugin

---

## Architecture

**Content-driven UI** — profile, projects, skills, and experience are defined in `src/data/site.ts` and consumed by section components.

**Section-based page** — a single route composes hero, product showcases, case studies, skills, experience, about, and contact.

**Shared layout primitives** — spacing, typography, grids, and surface styles are centralized in `src/lib` for consistent presentation.

**Theme system** — `ThemeProvider` syncs React state with `localStorage`; an inline bootstrap script applies the saved theme before paint.

**Static-first delivery** — pages are pre-rendered at build time for fast loads and straightforward deployment.

---

## Getting started

### Prerequisites

- Node.js 20+ (CI runs on Node 24)
- npm

### Install and run

```bash
git clone <repository-url>
cd <repository-directory>
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

- **`npm run dev`** — Start the development server
- **`npm run build`** — Create a production build
- **`npm run start`** — Serve the production build locally
- **`npm run lint`** — Run ESLint
- **`npm run test`** — Run Vitest once
- **`npm run test:run`** — Run Vitest once (CI)
- **`npm run test:watch`** — Run Vitest in watch mode
- **`npm run test:e2e`** — Run Playwright end-to-end tests
- **`npm run test:e2e:ui`** — Run Playwright with UI
- **`npm run test:e2e:install`** — Install Playwright Chromium

---

## Project structure

```
src/
├── app/              # App Router: layout, page, metadata, global styles
├── components/       # Section and UI components (hero, products, case studies)
├── data/             # Site content and link configuration
├── lib/              # Theme, motion, layout utilities, rich text helper
└── test/             # Vitest setup
e2e/                  # Playwright specs
public/images/        # Profile photo and project screenshots
.github/workflows/    # CI pipeline
```

---

## Testing

**Unit & smoke** — Vitest covers theme utilities, rich text rendering, site data integrity, and a full-page smoke render.

**E2E** — Playwright verifies theme toggle, mobile navigation, product links, and contact section reachability.

Run everything locally:

```bash
npm run lint
npm run test:run
npm run build
npm run test:e2e
```

---

## CI (GitHub Actions)

The workflow in `.github/workflows/ci.yml` runs on every push and pull request to `main`:

1. Install dependencies (`npm ci`)
2. Lint (`npm run lint`)
3. Unit tests (`npm run test:run`)
4. Production build (`npm run build`)
5. Playwright browser setup
6. End-to-end tests (`npm run test:e2e`)

---

## Deployment

**Production:** [https://portfolio-mauve-nu-57.vercel.app/](https://portfolio-mauve-nu-57.vercel.app/)

Hosted on Vercel. Pushes to `main` trigger automatic deployments after CI passes.

---

## Featured work

- **FitBook AI** — Live: [fitbook-ai-e2gi.vercel.app](https://fitbook-ai-e2gi.vercel.app/) · Repo: [FitbookAI](https://github.com/harispasicc/FitbookAI)
- **UrbanKey Sarajevo** — Live: [www.urbankey.ba](https://www.urbankey.ba/) · Repo: [urbankey-platform](https://github.com/harispasicc/urbankey-platform)

---

## License

Private project. All rights reserved.
