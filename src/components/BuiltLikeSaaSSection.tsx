"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionTone } from "@/lib/depth";
import { surfaceCardDark } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import {
  CONTENT,
  GRID_ENGINEERING,
  SECTION_DESC_DARK,
  SECTION_LABEL_DARK,
  SECTION_TITLE_DARK,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { saasProductArchitecture } from "@/data/site";
import { cn } from "@/lib/cn";
import { RichBlurb } from "@/lib/rich-text";

export function BuiltLikeSaaSSection() {
  return (
    <FadeUp
      as="section"
      id="built-saas"
      className={cn(sectionTone.dark, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <SectionAmbient tone="dark" />
      <div className={cn("relative", CONTENT)}>
        <p className={SECTION_LABEL_DARK}>Engineering</p>
        <h2 className={cn("mt-2 max-w-2xl", SECTION_TITLE_DARK)}>
          Built like a real SaaS product
        </h2>
        <p className={SECTION_DESC_DARK}>
          Production-minded surfaces: auth, scheduling, AI workflows, CRM, analytics, and
          architecture that scales with the business, not a UI shell.
        </p>

        <motion.div
          className={GRID_ENGINEERING}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {saasProductArchitecture.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUpItem}
              className={cn(surfaceCardDark, "group p-4 sm:p-[18px]")}
            >
              <h3 className="text-[13px] font-semibold tracking-tight text-[var(--fg-on-dark)] transition-colors duration-300 group-hover:text-white">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.6] text-[var(--fg-on-dark-muted)]">
                <RichBlurb text={item.blurb} />
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </FadeUp>
  );
}
