"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import { surfaceCardRaised } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import {
  CONTENT,
  GRID_PROJECTS,
  SECTION_DESC,
  SECTION_LABEL,
  SECTION_TITLE,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { nextProjects } from "@/data/site";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";

export function SecondaryProjects() {
  return (
    <FadeUp
      as="section"
      id="next-projects"
      className={cn(sectionTone.mist, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="mist" />
      <div className={CONTENT}>
        <p className={SECTION_LABEL}>Pipeline</p>
        <h2 className={cn("mt-2", SECTION_TITLE)}>Next projects</h2>
        <p className={SECTION_DESC}>
          Planned product surfaces in the same direction as FitBook internal tools and analytics
          with a high bar for clarity and maintainability.
        </p>

        <motion.div
          className={GRID_PROJECTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {nextProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={fadeUpItem}
              className={cn(
                surfaceCardRaised,
                "group flex flex-col overflow-hidden hover:-translate-y-0.5",
              )}
            >
              <div className="relative aspect-[8/5] overflow-hidden border-b border-[color-mix(in_oklab,var(--border-strong)_30%,var(--border))] bg-[var(--bg-subtle)]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover opacity-75 grayscale-[0.35] transition-[transform,filter,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02] group-hover:opacity-90"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <span className="absolute left-3 top-3 rounded-md border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_96%,transparent)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--fg-muted)] shadow-[var(--shadow-sm)] backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-[-0.02em] text-[var(--fg)]">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{project.tagline}</p>
                <p className="mt-2.5 flex-1 text-sm leading-[1.6] text-[var(--fg-muted)]">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <p className="mt-4 text-xs font-medium text-[var(--fg-muted)]">Coming soon</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </FadeUp>
  );
}
