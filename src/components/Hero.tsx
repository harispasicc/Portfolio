"use client";

import { motion } from "framer-motion";
import { CONTENT, SECTION_X } from "@/lib/section";
import { hero, heroCredibility, links, person } from "@/data/site";
import { cn } from "@/lib/cn";
import { HeroProductPreview } from "./HeroProductPreview";

const ghostClass =
  "inline-flex h-11 min-h-11 w-full min-w-0 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-4 text-sm font-medium text-[var(--fg)] shadow-[var(--shadow-sm)] backdrop-blur-[2px] transition-[border-color,box-shadow,transform] duration-200 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover-soft)] active:scale-[0.985] sm:w-auto sm:min-w-0 sm:px-5";

const primaryClass =
  "inline-flex h-11 min-h-11 w-full min-w-0 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] px-4 text-sm font-medium text-white shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_55%,transparent),var(--shadow-sm)] ring-1 ring-[var(--ring-on-accent)] transition-[box-shadow,transform,filter] duration-200 hover:shadow-[0_18px_50px_-22px_color-mix(in_oklab,var(--accent)_60%,transparent)] hover:brightness-[1.03] active:scale-[0.985] active:brightness-[0.98] sm:w-auto sm:min-w-0 sm:px-5";

export function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg)_88%,var(--hero-bg-mix))]",
        SECTION_X,
        "pb-20 pt-14 min-[380px]:pb-24 min-[380px]:pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24 xl:pb-36 xl:pt-28",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 hero-atmosphere"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-[-25%] w-[min(90%,520px)] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_14%,transparent),transparent)] blur-3xl opacity-90"
        aria-hidden
      />
      <div
        className={cn(
          "relative grid gap-10 min-[380px]:gap-12 lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:gap-y-12 xl:gap-x-12 xl:gap-y-14",
          CONTENT,
        )}
      >
        <div className="min-w-0 lg:col-span-6">
          <motion.p
            className="mb-5 max-w-2xl text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--fg-muted)]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {person.roleLine}
          </motion.p>
          <motion.h1
            className="fluid-hero-title max-w-[min(26ch,100%)] text-balance text-[var(--fg)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-[min(52ch,100%)] text-pretty text-sm leading-relaxed text-[var(--fg-muted)] sm:text-base sm:leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:flex sm:flex-row sm:flex-wrap sm:items-stretch"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.a
              href="#projects"
              className={primaryClass}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              View projects
            </motion.a>
            <motion.a
              href="#contact"
              className={ghostClass}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              Contact me
            </motion.a>
            <motion.a
              href={links.github}
              className={ghostClass}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href={links.linkedin}
              className={ghostClass}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {heroCredibility.map((label, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.28 + i * 0.04,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="min-w-0 max-w-full break-words rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] px-2.5 py-1 text-[10px] font-medium leading-snug text-[var(--fg-muted)] shadow-[var(--shadow-sm)] backdrop-blur-[1px] transition-[border-color,box-shadow,color] duration-200 min-[380px]:px-3 min-[380px]:text-[11px] hover:border-[var(--border-strong)] hover:text-[var(--fg)] sm:px-3"
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="relative min-w-0 lg:col-span-6">
          <div
            className="pointer-events-none absolute -inset-10 left-[-8%] top-[8%] rounded-[40px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_16%,transparent),transparent)] blur-3xl opacity-90 lg:left-[-12%]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 right-[-10%] h-56 w-56 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_18%,transparent),transparent)] blur-3xl opacity-80"
            aria-hidden
          />
          <HeroProductPreview />
        </div>
      </div>
    </section>
  );
}
