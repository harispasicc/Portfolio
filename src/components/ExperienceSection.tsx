"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import { experienceEntry, surfaceCard } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import {
  CONTENT,
  SECTION_DESC,
  SECTION_TITLE,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { education, experience } from "@/data/site";
import { cn } from "@/lib/cn";

export function ExperienceSection() {
  return (
    <FadeUp
      as="section"
      id="experience"
      className={cn(sectionTone.canvas, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="canvas" />
      <div className={CONTENT}>
        <h2 className={SECTION_TITLE}>Experience</h2>
        <p className={SECTION_DESC}>
          Frontend work in healthcare and research, architecture, testing, and delivery with product
          and backend partners.
        </p>

        <div className="relative mt-8 w-full xl:max-w-4xl 2xl:max-w-5xl">
          <div
            className="absolute bottom-2 left-[7px] top-3 hidden w-px bg-gradient-to-b from-[color-mix(in_oklab,var(--border-strong)_70%,var(--border))] via-[var(--border)] to-transparent md:block"
            aria-hidden
          />
          <motion.div
            className="space-y-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {experience.map((job, index) => (
              <motion.article
                key={`${job.company}-${job.period}`}
                variants={fadeUpItem}
                className={cn(experienceEntry, "md:pr-2")}
              >
                <span
                  className="absolute left-0 top-7 hidden h-3 w-3 rounded-full border-2 border-[var(--surface)] bg-[var(--teal)] shadow-[0_0_0_1px_var(--border)] md:block"
                  aria-hidden
                />
                <div className="flex flex-col gap-2 md:grid md:grid-cols-[minmax(0,1fr)_8.5rem] md:items-start md:gap-4 md:pl-8">
                  <div className="min-w-0 order-2 md:order-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-base">
                        {job.company}
                      </h3>
                      {job.location ? (
                        <span className="text-sm text-[var(--fg-muted)]">· {job.location}</span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">{job.title}</p>
                    <ul className="mt-3 space-y-2 text-sm leading-[1.6] text-[var(--fg-muted)]">
                      {job.highlights.map((line) => (
                        <li key={line} className="flex gap-2.5">
                          <span
                            className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-[var(--teal)]"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="order-1 shrink-0 text-xs font-medium tabular-nums leading-snug text-[var(--fg-muted)] md:order-2 md:text-right md:text-[13px]">
                    {job.period}
                  </p>
                </div>
                {index < experience.length - 1 ? (
                  <div className="mt-4 border-b border-[var(--border)] md:hidden" aria-hidden />
                ) : null}
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div className={cn(surfaceCard, "mt-8 w-full p-5 sm:mt-10 sm:p-6 xl:max-w-4xl 2xl:max-w-5xl")}>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
            Education
          </h3>
          <div className="mt-5 space-y-5">
            {education.map((entry) => (
              <div
                key={`${entry.school}-${entry.period}`}
                className="flex flex-col gap-1 border-b border-[var(--border)] pb-5 last:border-0 last:pb-0 md:grid md:grid-cols-[minmax(0,1fr)_8.5rem] md:gap-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold tracking-tight text-[var(--fg)]">{entry.degree}</p>
                  <p className="mt-0.5 text-sm leading-[1.55] text-[var(--fg-muted)]">
                    {entry.school}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  {"highlights" in entry && entry.highlights ? (
                    <p className="mt-1.5 text-sm leading-[1.55] text-[var(--fg-muted)]">
                      {entry.highlights[0]}
                    </p>
                  ) : null}
                </div>
                <p className="shrink-0 text-sm tabular-nums text-[var(--fg-muted)] md:text-right">
                  {entry.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
