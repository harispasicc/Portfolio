"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { Badge } from "@/components/Badge";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import { productCardOuter, productImageZoom, surfaceCardRaised } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import { UrbanKeyActions } from "@/components/UrbanKeyActions";
import { UrbanKeyLogo } from "@/components/urbankey/UrbanKeyBrand";
import {
  CONTENT,
  GRID_SHOWCASE,
  PROSE_BODY,
  SECTION_LABEL,
  SECTION_TITLE,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { urbankey } from "@/data/site";
import { cn } from "@/lib/cn";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm leading-[1.6] text-[var(--fg-muted)]">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function UrbanKeyFeatured() {
  return (
    <FadeUp
      as="section"
      id="urbankey"
      className={cn(sectionTone.mist, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="mist" />
      <div className={CONTENT}>
        <div className="flex min-w-0 flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
          <div className="min-w-0 flex-1 lg:max-w-2xl">
            <p className={SECTION_LABEL}>Shipped product</p>
            <h2 className={cn("mt-2 flex min-w-0 items-center gap-3", SECTION_TITLE)}>
              <UrbanKeyLogo />
              <span className="min-w-0">{urbankey.name}</span>
            </h2>
            <p className="mt-2.5 text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px] md:text-base">
              {urbankey.tagline}
            </p>
          </div>
          <div className="w-full min-w-0 sm:max-w-md lg:w-[14rem] lg:max-w-none lg:shrink-0 xl:w-[15rem]">
            <UrbanKeyActions />
          </div>
        </div>

        <div className={cn(PROSE_BODY, "mt-6 space-y-4 text-sm leading-[1.7] text-[var(--fg-muted)] sm:text-[15px]")}>
          {urbankey.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <motion.div
          className={cn(GRID_SHOWCASE, "mt-8 lg:mt-10")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {urbankey.screenshots.map((shot) => (
            <motion.figure
              key={shot.src}
              variants={fadeUpItem}
              className="group min-w-0"
            >
              <a
                href={urbankey.live}
                target="_blank"
                rel="noreferrer"
                className="block outline-offset-4"
              >
                <div className={productCardOuter}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={1280}
                    height={800}
                    className={productImageZoom}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              </a>
              <figcaption className="mt-2.5 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 px-0.5">
                <span className="text-xs font-medium text-[var(--fg-muted)]">{shot.caption}</span>
                <a
                  href={urbankey.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-medium text-[var(--teal)] opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100"
                >
                  Open live →
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <div className="mt-10 grid min-w-0 gap-6 lg:grid-cols-2 lg:gap-8">
          <div className={cn(surfaceCardRaised, "p-5 sm:p-6")}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Key features
            </h3>
            <div className="mt-4">
              <BulletList items={urbankey.keyFeatures} />
            </div>
          </div>
          <div className={cn(surfaceCardRaised, "p-5 sm:p-6")}>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
              Tech stack
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {urbankey.stack.map((tech) => (
                <Badge
                  key={tech}
                  className="border-[color-mix(in_oklab,var(--teal)_28%,var(--border-strong))] bg-[color-mix(in_oklab,var(--teal)_6%,var(--surface))] font-medium text-[var(--fg)]"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
