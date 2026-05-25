"use client";

import { motion } from "framer-motion";
import { SectionAmbient } from "@/components/SectionAmbient";
import { EASE_PREMIUM } from "@/lib/motion";
import { sectionTone } from "@/lib/depth";
import { CONTENT, HERO_Y, SECTION_X } from "@/lib/section";
import { btnPrimary, btnSecondary, btnTertiary } from "@/lib/ui";
import { hero, heroCredibility, links, person } from "@/data/site";
import { cn } from "@/lib/cn";
import { HeroProductPreview } from "./HeroProductPreview";

export function Hero() {
  return (
    <section className={cn(sectionTone.hero, SECTION_X, HERO_Y, "overflow-x-clip")}>
      <SectionAmbient tone="hero" />
      <div
        className={cn(
          "relative z-[1] grid min-w-0 gap-8 sm:gap-10 md:gap-12 lg:grid-cols-12 lg:items-start lg:gap-x-8 xl:gap-x-12 2xl:gap-x-14",
          CONTENT,
        )}
      >
        <div className="min-w-0 lg:col-span-5 lg:pt-2 xl:pt-4 2xl:col-span-5">
          <motion.p
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)] sm:mb-4 sm:text-[12px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE_PREMIUM }}
          >
            {person.roleLine}
          </motion.p>
          <motion.h1
            className="fluid-hero-title max-w-full font-semibold text-[var(--fg)] md:max-w-[28ch] 2xl:max-w-[32ch]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.03, ease: EASE_PREMIUM }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-full text-pretty text-sm leading-[1.65] text-[var(--fg-muted)] sm:mt-5 sm:text-[15px] md:max-w-[46ch]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: EASE_PREMIUM }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-6 space-y-2.5 sm:mt-8"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.12, ease: EASE_PREMIUM }}
          >
            <div className="flex flex-col gap-2.5 min-[400px]:flex-row min-[400px]:flex-wrap sm:gap-3">
              <motion.a
                href="#projects"
                className={cn(btnPrimary, "w-full min-[400px]:w-auto")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                View projects
              </motion.a>
              <motion.a
                href="#contact"
                className={cn(btnSecondary, "w-full min-[400px]:w-auto")}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
              >
                Contact me
              </motion.a>
            </div>
            <div className="flex flex-wrap gap-2 pt-0.5">
              <motion.a
                href={links.github}
                className={btnTertiary}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href={links.linkedin}
                className={btnTertiary}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.985 }}
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="mt-5 flex flex-wrap gap-2 sm:mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.18 }}
          >
            {heroCredibility.map((label) => (
              <span
                key={label}
                className="rounded-full border border-[color-mix(in_oklab,var(--border-strong)_35%,var(--border))] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-2.5 py-0.5 text-[10px] font-medium text-[var(--fg-muted)] sm:text-[11px]"
              >
                {label}
              </span>
            ))}
          </motion.div>
        </div>

        <div className="relative min-w-0 lg:col-span-7 lg:pl-2 xl:pl-4 2xl:col-span-7">
          <HeroProductPreview />
        </div>
      </div>
    </section>
  );
}
