"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionTone } from "@/lib/depth";
import { surfaceCardDark } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import {
  CONTENT,
  GRID_SKILLS,
  SECTION_DESC_DARK,
  SECTION_TITLE_DARK,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { skillGroups } from "@/data/site";
import { cn } from "@/lib/cn";

export function SkillsSection() {
  return (
    <FadeUp
      as="section"
      id="skills"
      className={cn(sectionTone.dark, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <SectionAmbient tone="dark" />
      <div className={cn("relative", CONTENT)}>
        <h2 className={SECTION_TITLE_DARK}>Skills</h2>
        <p className={SECTION_DESC_DARK}>
          Core stack for production React/TypeScript products, grouped by how I work on real teams.
        </p>

        <motion.div
          className={GRID_SKILLS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          variants={staggerContainer}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUpItem}
              className={cn(surfaceCardDark, "p-4 sm:p-5")}
            >
              <h3 className="text-sm font-semibold tracking-tight text-[var(--fg-on-dark)]">
                {group.title}
              </h3>
              <p className="mt-1 text-[12px] text-[var(--fg-on-dark-muted)]">{group.subtitle}</p>
              <div className="mt-3.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item.label}
                    className={cn(
                      "rounded-md border px-2.5 py-0.5 text-[11px] font-medium",
                      item.emphasis
                        ? "border-[color-mix(in_oklab,var(--teal)_32%,white)] bg-[color-mix(in_oklab,var(--teal)_10%,transparent)] text-[var(--fg-on-dark)]"
                        : "border-white/10 bg-white/[0.03] text-[var(--fg-on-dark-muted)]",
                    )}
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </FadeUp>
  );
}
