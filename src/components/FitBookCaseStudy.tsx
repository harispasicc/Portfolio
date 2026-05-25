"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import { surfaceCardRaised } from "@/lib/interaction";
import { fadeUpItem, staggerContainer } from "@/lib/motion";
import {
  CONTENT,
  GRID_CASE_STUDY,
  SECTION_LABEL,
  SECTION_TITLE,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { fitbook } from "@/data/site";
import { cn } from "@/lib/cn";

function Block({
  title,
  children,
  emphasized = false,
}: {
  title: string;
  children: React.ReactNode;
  emphasized?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUpItem}
      className={cn(
        surfaceCardRaised,
        "group p-5 hover:-translate-y-0.5 sm:p-6",
        emphasized && "border-[color-mix(in_oklab,var(--teal)_18%,var(--border))]",
      )}
    >
      <div className="flex items-center gap-2.5 border-b border-[color-mix(in_oklab,var(--border-strong)_35%,var(--border))] pb-3.5">
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)] shadow-[0_0_8px_color-mix(in_oklab,var(--teal)_50%,transparent)]"
          aria-hidden
        />
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
          {title}
        </h3>
      </div>
      <div className="mt-4 text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px]">
        {children}
      </div>
    </motion.div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
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

export function FitBookCaseStudy() {
  return (
    <FadeUp
      as="section"
      id="fitbook-case-study"
      className={cn(sectionTone.raised, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="raised" />
      <div className={CONTENT}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Case study</p>
          <h2 className={cn("mt-2", SECTION_TITLE)}>
            How FitBook AI ships a real coaching MVP
          </h2>
        </div>

        <motion.div
          className={GRID_CASE_STUDY}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <Block title="Problem" emphasized>
            <p>{fitbook.problem}</p>
          </Block>
          <Block title="Solution" emphasized>
            <p>{fitbook.solution}</p>
          </Block>
          <Block title="Core features">
            <BulletList items={fitbook.features} />
          </Block>
          <Block title="What I built">
            <BulletList items={fitbook.built} />
          </Block>
        </motion.div>
      </div>
    </FadeUp>
  );
}
