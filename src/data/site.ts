export const person = {
  name: "Haris Pašić",
  roleLine:
    "Frontend-focused Software Engineer · React · TypeScript · Next.js",
} as const;

export const links = {
  github: "https://github.com/harispasicc?tab=repositories",
  linkedin: "https://www.linkedin.com/in/haris-pa%C5%A1i%C4%87-386408171/",
  email: "mailto:harispasic63@gmail.com",
  fitbookLive: "https://fitbook.ai",
  fitbookRepo: "https://github.com/harispasic/fitbook-ai",
  projectTwoLive: "#",
  projectTwoRepo: "#",
  projectThreeLive: "#",
  projectThreeRepo: "#",
} as const;

export const contact = {
  location: "Sarajevo, Bosnia and Herzegovina",
  phoneDisplay: "+387 62 556 150",
  phoneHref: "tel:+38762556150",
  emailDisplay: "harispasic63@gmail.com",
} as const;

export const heroCredibility = [
  "5+ years in production",
  "React · TypeScript · Next.js",
  "Sarajevo, BiH · CET",
  "Healthcare & research platforms",
  "Mentoring & code quality",
] as const;

export const hero = {
  title:
    "Frontend Software Engineer building scalable React, TypeScript and AI-powered SaaS products.",
  subtitle:
    "I build production-focused web applications with clean architecture, performance, testing, and strong product UX.",
} as const;

export const about = {
  paragraphs: [
    "Frontend-focused software engineer with over 5 years of experience building reliable, scalable web applications used in real-world production environments.",
    "I primarily work with React and TypeScript, focusing on clean architecture, performance, and well-tested code. I have led frontend development on multiple projects, collaborated closely with designers and backend teams, and enjoy mentoring engineers to build maintainable, user-focused products.",
  ],
} as const;

export const experience = [
  {
    company: "Kinly",
    location: "London",
    title: "Lead Frontend Engineer (Project-based)",
    period: "Oct 2024 — Oct 2025",
    highlights: [
      "Led frontend development of a production healthcare platform, owning architecture, scalability, and overall code quality.",
      "Built and maintained complex React features with TypeScript and Redux Toolkit (RTK Query), using a component-driven, performance-focused approach.",
      "Established end-to-end testing with Cypress, improving stability and confidence in releases.",
      "Mentored frontend engineers, led code reviews, and partnered with backend and product to ship maintainable, well-aligned features.",
    ],
  },
  {
    company: "PG Forsta",
    location: "Sarajevo",
    title: "Software Engineer",
    period: "Oct 2022 — Present",
    highlights: [
      "Worked on data-driven and market research platforms across data collection, analysis, and frontend feature development.",
      "Led frontend initiatives independently, improving UX and performance across multiple projects.",
      "Built and maintained React and TypeScript applications with Redux / Redux Toolkit and REST API integration.",
      "Implemented end-to-end and unit testing with Playwright, TestCafe, and Jest to reduce regressions and improve reliability.",
    ],
  },
  {
    company: "Freelance",
    location: "Remote",
    title: "Software Engineer",
    period: "Feb 2020 — Mar 2022",
    highlights: [
      "Collaborated with distributed teams on internal dashboards, e-commerce sites, and client portals.",
      "Delivered React features, performance improvements, and UI fixes to raise overall user experience.",
      "Built reusable components and managed global state with Redux for consistency and long-term maintainability.",
      "Improved responsive layouts and contributed to React Native prototypes for mobile apps.",
    ],
  },
  {
    company: "Various clients",
    location: "Sarajevo, BiH",
    title: "Frontend Developer",
    period: "Jun 2019 — Jan 2020",
    highlights: [
      "Developed e-commerce and single-page experiences with Shopify and React for SMBs across Bosnia and Herzegovina.",
      "Delivered tailored solutions across industries, aligning with brand, business goals, and user needs.",
      "Worked directly with clients and senior developers on requirements, UI/UX best practices, and performance optimization.",
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
      "40+ practical projects across modern frontend and backend, including React, Node.js, MongoDB, and testing fundamentals.",
      "Built real-world apps such as e-commerce and social-style products across the full development lifecycle.",
    ],
  },
] as const;

export const skills = {
  frontend: [
    "React",
    "TypeScript",
    "JavaScript",
    "Next.js",
    "React Native",
    "Redux",
    "AI integrations",
  ],
  styling: ["Tailwind", "CSS", "SCSS", "styled-components", "Storybook"],
  backend: ["Node.js", "Express", "MongoDB", "SQL", "GraphQL"],
  testing: ["Jest", "Playwright", "TestCafe", "Cypress"],
  workflow: ["Git", "Jira", "Figma"],
  platform: ["Docker", "Grafana", "Loki", "CI/CD"],
} as const;

export const saasProductArchitecture = [
  {
    title: "Role-based authentication",
    blurb: "Org-aware sessions, protected routes, and least-privilege defaults across coach and client surfaces.",
  },
  {
    title: "Booking engine",
    blurb: "Availability rules, conflict checks, reminders, and calendar sync designed for real-world scheduling load.",
  },
  {
    title: "AI workflows",
    blurb: "Guard-railed prompts, structured outputs, and review steps so AI assists coaches without risking trust.",
  },
  {
    title: "Client portal",
    blurb: "Self-serve progress, messaging, and plan visibility with responsive layouts for mobile-first clients.",
  },
  {
    title: "Trainer CRM",
    blurb: "Pipeline views, notes, tags, and follow-ups so coaches can run a practice—not just a calendar.",
  },
  {
    title: "Analytics dashboard",
    blurb: "Operational metrics, cohort signals, and export-friendly reporting for retention and growth decisions.",
  },
  {
    title: "Responsive architecture",
    blurb: "Composable UI boundaries, lazy boundaries where it matters, and predictable state for fast iteration.",
  },
  {
    title: "API / backend-ready structure",
    blurb: "Typed contracts, service layers, and clear separation so the UI scales with evolving APIs and data models.",
  },
] as const;

export const fitbook = {
  name: "FitBook AI",
  tagline: "AI-powered coaching marketplace & trainer OS",
  short:
    "A full-stack SaaS product connecting clients with fitness coaches, including booking, coach dashboard, client portal, CRM, analytics, and AI assistant tools.",
  stack: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "Tailwind",
    "styled-components",
    "CSS",
    "SCSS",
    "GraphQL",
    "REST",
    "OpenAI",
    "AI integrations",
    "Storybook",
    "Auth",
    "Vercel",
  ],
  problem:
    "Coaches manage bookings, clients, reminders and progress through scattered tools.",
  solution:
    "FitBook AI centralizes booking, client management, progress tracking, and AI-powered coaching workflows.",
  features: [
    "Marketplace",
    "Booking flow",
    "Trainer dashboard",
    "Client portal",
    "AI assistant",
    "Analytics",
    "Role-based auth",
  ],
  built: [
    "UI architecture",
    "Reusable components",
    "Protected routes",
    "Data model",
    "Backend/API integration",
    "Responsive UX",
  ],
} as const;

export const secondaryProjects = [
  {
    slug: "ops-console",
    name: "Operations console",
    tagline: "Internal SaaS for fulfillment and support teams",
    summary:
      "Role-aware console for queues, SLAs, and audit trails with fast tables and keyboard-first workflows.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "CSS",
      "styled-components",
      "TanStack Query",
      "REST",
      "GraphQL",
      "Storybook",
    ],
    image: "/images/project-ops.svg",
    live: links.projectTwoLive,
    repo: links.projectTwoRepo,
  },
  {
    slug: "insights-hub",
    name: "Insights hub",
    tagline: "Self-serve analytics for product-led growth",
    summary:
      "Composable dashboards with saved views, exports, and guardrails so non-technical teams can explore safely.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "SCSS",
      "Charts",
      "RBAC",
      "GraphQL",
      "AI integrations",
      "Storybook",
    ],
    image: "/images/project-insights.svg",
    live: links.projectThreeLive,
    repo: links.projectThreeRepo,
  },
] as const;
