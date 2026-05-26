"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { links } from "@/data/site";
import { productCardOuter, productImageZoom } from "@/lib/interaction";
import { GRID_SHOWCASE } from "@/lib/section";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import { btnPrimarySm, btnProductGrid } from "@/lib/ui";
import { BrowserChrome } from "./BrowserChrome";
import { cn } from "@/lib/cn";

const SCREENSHOT_WIDTH = 1024;
const SCREENSHOT_HEIGHT = 558;

const fitbookScreenshots = [
  {
    href: links.fitbookLive,
    src: "/images/fitbook-landing.png",
    alt: "FitBook AI marketing landing page",
    domain: "fitbook-ai-e2gi.vercel.app",
    caption: "Marketing site",
  },
  {
    href: links.fitbookCoachDemo,
    src: "/images/fitbook-coach-dashboard.png",
    alt: "FitBook AI coach dashboard with KPIs and calendar",
    domain: "fitbook-ai-e2gi.vercel.app/dashboard",
    caption: "Coach dashboard",
  },
  {
    href: links.fitbookClientDemo,
    src: "/images/fitbook-client-dashboard.png",
    alt: "FitBook AI client home with goals, sessions, and AI assistant",
    domain: "fitbook-ai-e2gi.vercel.app/me",
    caption: "Client app",
  },
] as const;

function FitBookScreenshot({
  href,
  src,
  alt,
  domain,
  caption,
}: {
  href: string;
  src: string;
  alt: string;
  domain: string;
  caption: string;
}) {
  return (
    <motion.figure variants={fadeUpItem} className="group">
      <Link
        href={href}
        target="_blank"
        rel="noreferrer"
        className="block outline-offset-4"
      >
        <div className={productCardOuter}>
          <BrowserChrome domain={domain}>
            <div className="overflow-hidden">
              <Image
                src={src}
                alt={alt}
                width={SCREENSHOT_WIDTH}
                height={SCREENSHOT_HEIGHT}
                className={productImageZoom}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 420px"
              />
            </div>
          </BrowserChrome>
        </div>
        <figcaption className="mt-2.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 px-0.5">
          <span className="text-xs font-medium text-[var(--fg-muted)] transition-colors duration-300 group-hover:text-[var(--fg)]">
            {caption}
          </span>
          <span className="hidden text-[10px] font-medium text-[var(--teal)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inline">
            Open live →
          </span>
        </figcaption>
      </Link>
    </motion.figure>
  );
}

export function FitBookShowcase({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(className ?? GRID_SHOWCASE)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={staggerContainer}
    >
      {fitbookScreenshots.map((shot) => (
        <FitBookScreenshot key={shot.src} {...shot} />
      ))}
    </motion.div>
  );
}

const productLinks = [
  { href: links.fitbookClientDemo, label: "Client", external: true },
  { href: links.fitbookCoachDemo, label: "Coach", external: true },
  { href: links.fitbookRepo, label: "GitHub", external: true },
  { href: "#fitbook-case-study", label: "Case study", external: false },
] as const;

export function FitBookActions() {
  return (
    <aside
      className="w-full lg:sticky lg:top-[5.5rem] lg:w-[14rem] lg:shrink-0 xl:w-[15rem]"
      aria-label="FitBook links"
    >
      <div className="flex flex-col gap-2">
        <motion.a
          href={links.fitbookLive}
          className={cn(btnPrimarySm, "h-11 w-full justify-center rounded-xl")}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.985 }}
        >
          Live demo
        </motion.a>

        <div className="grid grid-cols-2 gap-2">
          {productLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={btnProductGrid}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </aside>
  );
}
