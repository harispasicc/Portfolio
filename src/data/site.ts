export const person = {
  name: "Haris Pašić",
  roleLine:
    "Frontend-focused Software Engineer · React · TypeScript · Next.js",
} as const;

export const links = {
  github: "https://github.com/harispasicc?tab=repositories",
  linkedin: "https://www.linkedin.com/in/haris-pa%C5%A1i%C4%87-386408171/",
  email: "mailto:harispasic63@gmail.com",
  fitbookLive: "https://fitbook-ai-e2gi.vercel.app/",
  fitbookClientDemo: "https://fitbook-ai-e2gi.vercel.app/login?demo=1",
  fitbookCoachDemo: "https://fitbook-ai-e2gi.vercel.app/trainer/login?demo=1",
  fitbookRepo: "https://github.com/harispasicc/FitbookAI",
  urbankeyRepo: "https://github.com/harispasicc/urbankey-platform",
} as const;

export const contact = {
  location: "Sarajevo, Bosnia and Herzegovina",
  phoneDisplay: "+387 62 556 150",
  phoneHref: "tel:+38762556150",
  emailDisplay: "harispasic63@gmail.com",
} as const;

export const heroCredibility = [
  "5+ years in production",
  "Healthcare & research SaaS",
  "Sarajevo · CET",
] as const;

export const hero = {
  title:
    "Frontend Software Engineer building scalable React, TypeScript and AI-powered SaaS products.",
  subtitle:
    "I build production-focused web applications with clean architecture, performance, testing, and strong product UX.",
} as const;

export const about = {
  paragraphs: [
    "I build frontend for products that need to ship, not slide decks. Over five years I've owned React and TypeScript surfaces in healthcare and market research, with a focus on architecture, testing, performance, and calm product UX.",
    "I recently shipped FitBook AI, a full-stack coaching SaaS MVP end to end. I care about maintainable components, clear API boundaries, and interfaces that feel production-ready from the first release.",
  ],
  strengths: [
    "Product-minded UI",
    "Frontend architecture",
    "Testing & quality",
    "SaaS delivery",
  ],
} as const;

export const contactCopy = {
  eyebrow: "Contact",
  title:
    "Senior frontend engineer focused on architecture, performance, testing, and maintainable product systems.",
  timezone: "CET · Sarajevo",
} as const;

export const experience = [
  {
    company: "Kinly",
    location: "London",
    title: "Lead Frontend Engineer (Project-based)",
    period: "Oct 2024 — Oct 2025",
    highlights: [
      "Owned frontend architecture and delivery on a production healthcare platform.",
      "Shipped complex React/TypeScript features with RTK Query; introduced Cypress E2E in the release flow.",
      "Mentored engineers, led reviews, and aligned delivery with product and backend.",
    ],
  },
  {
    company: "Qualtrics (formerly PG Forsta)",
    location: "Sarajevo",
    title: "Software Engineer",
    period: "Oct 2022 — Present",
    highlights: [
      "Led frontend work on data-driven research products—UX, performance, and feature ownership.",
      "Built React/TypeScript apps with Redux and REST APIs; Playwright and Jest for regression safety.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    title: "Software Engineer",
    period: "Feb 2020 — Mar 2022",
    highlights: [
      "Delivered dashboards, e-commerce, and client portals with React and reusable component systems.",
      "Improved performance, responsive layouts, and Redux-based state for long-term maintainability.",
    ],
  },
  {
    company: "Various clients",
    location: "Sarajevo, BiH",
    title: "Frontend Developer",
    period: "Jun 2019 — Jan 2020",
    highlights: [
      "Built Shopify and React storefronts for SMBs requirements, UI polish, and performance.",
    ],
  },
] as const;

export const education = [
  {
    school: "International University of Sarajevo",
    location: "Sarajevo",
    degree: "BSc Electrical and Electronic Engineering",
    period: "Oct 2015 — Jan 2020",
  },
  {
    school: "Paragon Bootcamp",
    location: "Sarajevo",
    degree: "Full-stack intensive program",
    period: "Mar 2022",
    highlights: [
      "Intensive full-stack track: React, Node.js, MongoDB, and testing across 40+ hands-on projects.",
    ],
  },
] as const;

export const skillGroups: readonly {
  title: string;
  subtitle: string;
  items: readonly { label: string; emphasis?: boolean }[];
}[] = [
  {
    title: "Frontend",
    subtitle: "React, TypeScript, Next.js production SaaS UI",
    items: [
      { label: "React", emphasis: true },
      { label: "TypeScript", emphasis: true },
      { label: "Next.js", emphasis: true },
      { label: "Performance", emphasis: true },
      { label: "Redux" },
      { label: "React Native" },
      { label: "Accessibility" },
    ],
  },
  {
    title: "Quality & APIs",
    subtitle: "Testing in CI, REST and GraphQL integration",
    items: [
      { label: "Playwright", emphasis: true },
      { label: "Jest", emphasis: true },
      { label: "REST APIs", emphasis: true },
      { label: "Cypress" },
      { label: "GraphQL" },
      { label: "TestCafe" },
    ],
  },
  {
    title: "Styling & systems",
    subtitle: "Tailwind, components, Storybook, design tokens",
    items: [
      { label: "Tailwind", emphasis: true },
      { label: "Storybook", emphasis: true },
      { label: "CSS" },
      { label: "SCSS" },
      { label: "Figma" },
    ],
  },
  {
    title: "Platform",
    subtitle: "Node, data layer, CI/CD when the product needs it",
    items: [
      { label: "Node.js", emphasis: true },
      { label: "PostgreSQL" },
      { label: "CI/CD", emphasis: true },
      { label: "Docker" },
      { label: "SQL" },
      { label: "Git" },
    ],
  },
] as const;

export const saasProductArchitecture = [
  {
    title: "Role-based authentication",
    blurb:
      "Separate App Router layouts for client (/me) and coach (/dashboard), with **JWT httpOnly sessions** and route guards.",
  },
  {
    title: "Booking engine",
    blurb:
      "Full lifecycle from open slots through confirm, reschedule, and complete, with **concurrency checks** and a shared BookingsProvider.",
  },
  {
    title: "AI workflows",
    blurb:
      "Optional, **lazy-loaded assistant** with booking aware tools and coach side drafting when OpenAI is configured.",
  },
  {
    title: "Client portal",
    blurb:
      "Session booking, goals, workout history, notifications, and **post-session reviews** on live data.",
  },
  {
    title: "Trainer CRM",
    blurb:
      "Client notes, services, availability, and calendar in one coach workspace, not scattered spreadsheets.",
  },
  {
    title: "Analytics dashboard",
    blurb:
      "Dashboard KPIs tied to **real bookings**; plan tiers (Free / Pro / AI Pro) enforced in the UI.",
  },
  {
    title: "Responsive architecture",
    blurb:
      "Shared **EmptyState**, ModalShell, and product tokens across marketing, client, and coach surfaces.",
  },
  {
    title: "API / backend-ready structure",
    blurb:
      "Thin app/api routes delegating to server modules with **Zod validation** and Prisma-backed persistence.",
  },
] as const;

export const fitbook = {
  name: "FitBook AI",
  tagline: "Production-oriented full-stack coaching SaaS",
  short:
    "Full-stack coaching MVP with real PostgreSQL data—role-based client and coach dashboards, a full booking lifecycle, JWT auth, and Playwright E2E coverage. Optional AI and email when configured.",
  highlights: [
    "Role-based /me and /dashboard workspaces",
    "PostgreSQL + Prisma persistence",
    "Booking lifecycle with concurrency checks",
    "JWT httpOnly sessions & route guards",
    "Playwright E2E (auth, bookings, reviews)",
    "Optional AI workflows & Resend email",
  ],
  stackPrimary: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Playwright",
  ],
  stackSecondary: ["Tailwind CSS 4", "Radix UI", "Zod", "JWT", "OpenAI", "Resend", "Vercel"],
  problem:
    "Coaches and clients juggle discovery, booking, CRM, and progress across tools, with no shared source of truth.",
  solution:
    "One product: marketplace, client and coach dashboards, booking lifecycle, CRM, notifications, and reviews on live PostgreSQL data.",
  features: [
    "Coach directory & availability",
    "Book → confirm → complete flow",
    "Client goals, sessions, reviews",
    "Coach CRM, calendar, services",
    "In-app notifications",
    "Optional AI & email",
  ],
  built: [
    "App Router layouts & role guards",
    "Prisma schema, migrations, seed",
    "BookingsProvider + thin API (Zod)",
    "JWT sessions & password reset",
    "Lazy-loaded AI panel",
    "Shared UI primitives",
  ],
} as const;

export const urbankey = {
  name: "UrbanKey Sarajevo",
  live: "https://www.urbankey.ba/",
  logo: "/images/urbankey-logo.png",
  repo: "https://github.com/harispasicc/urbankey-platform",
  tagline: "Production-ready property management platform",
  problem:
    "Apartment owners in Sarajevo need a credible way to present Airbnb and Booking management services online, with bilingual copy, trust signals, and a consultation path, without building a custom backend on day one.",
  solution:
    "A static-first Next.js marketing platform with typed EN/BS i18n, SEO and JSON-LD baked in, Formspree lead capture, and a CI gate (lint, unit, build, Playwright) before every production deploy to Vercel.",
  built: [
    "Section-based landing page (hero, services, process, FAQ, contact)",
    "Custom bilingual i18n with persisted locale preference",
    "Metadata, Open Graph, sitemap, robots, and FAQ structured data",
    "Validated consultation form via Formspree",
    "Vitest + Testing Library unit coverage",
    "Playwright E2E specs for critical user flows",
    "GitHub Actions pipeline on every push and PR to main",
    "Production deploy on Vercel with custom domain www.urbankey.ba",
  ],
  ciPipeline: [
    "Install dependencies (npm ci)",
    "Lint (ESLint)",
    "Unit tests (Vitest)",
    "Production build",
    "Playwright browser setup",
    "End-to-end tests",
  ],
  roadmap: {
    intro:
      "The next phase of UrbanKey focuses on evolving the platform beyond marketing into an operational management system for short-term rental properties.",
    plannedFeatures: [
      "Property and owner management",
      "Lead and client CRM",
      "Task and operations management",
      "Cleaning and maintenance scheduling",
      "Revenue and occupancy reporting",
      "Authentication and role-based access",
      "Backend API and database infrastructure",
    ],
    vision:
      "Long-term, UrbanKey aims to become the central operational platform used by the UrbanKey team and property owners to manage apartment operations efficiently, while continuing to leverage Airbnb and Booking.com as booking channels.",
  },
  description: [
    "Production-ready bilingual property management platform built with Next.js, React, and TypeScript.",
    "Developed to help apartment owners outsource Airbnb and Booking.com operations through a conversion-focused marketing experience.",
    "Features include multilingual support, SEO optimization, structured data (JSON-LD), responsive design, automated testing, CI/CD workflows, and production deployment on Vercel.",
    "The application follows a static-first architecture focused on performance, accessibility, maintainability, and search visibility.",
  ],
  keyFeatures: [
    "Bilingual experience (Bosnian / English)",
    "SEO optimization (metadata, Open Graph, sitemap, robots.txt)",
    "JSON-LD structured data",
    "Responsive design",
    "Contact form integration",
    "Automated testing (Unit + E2E)",
    "CI/CD pipeline with GitHub Actions",
    "Production deployment on Vercel",
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS v4",
    "Formspree",
    "Vitest",
    "Testing Library",
    "Playwright",
    "GitHub Actions",
    "Vercel",
  ],
  screenshots: [
    {
      src: "/images/urbankey-hero.jpg",
      alt: "UrbanKey Sarajevo marketing homepage hero",
      caption: "Hero & conversion-focused landing",
    },
    {
      src: "/images/urbankey-why.png",
      alt: "UrbanKey Sarajevo why choose us section",
      caption: "Value proposition & trust signals",
    },
    {
      src: "/images/urbankey-contact.png",
      alt: "UrbanKey Sarajevo contact and consultation form",
      caption: "Lead capture & consultation flow",
    },
  ],
} as const;
