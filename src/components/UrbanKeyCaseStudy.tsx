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
import { urbankey } from "@/data/site";
import { cn } from "@/lib/cn";

function Block({
  title,
  children,
  emphasized = false,
  className,
}: {
  title: string;
  children: React.ReactNode;
  emphasized?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUpItem}
      className={cn(
        surfaceCardRaised,
        "group p-5 hover:-translate-y-0.5 sm:p-6",
        emphasized && "border-[color-mix(in_oklab,var(--teal)_18%,var(--border))]",
        className,
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

function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="space-y-2.5">
      {items.map((item, i) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklab,var(--accent)_12%,var(--surface))] text-[10px] font-semibold tabular-nums text-[var(--accent)]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function UrbanKeyCaseStudy() {
  return (
    <FadeUp
      as="section"
      id="urbankey-case-study"
      className={cn(sectionTone.raised, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="raised" />
      <div className={CONTENT}>
        <div className="max-w-2xl">
          <p className={SECTION_LABEL}>Engineering highlights</p>
          <h2 className={cn("mt-2", SECTION_TITLE)}>Technical Case Study</h2>
        </div>

        <motion.div
          className={GRID_CASE_STUDY}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <Block title="Problem" emphasized>
            <p>{urbankey.problem}</p>
          </Block>
          <Block title="Solution" emphasized>
            <p>{urbankey.solution}</p>
          </Block>
          <Block title="What I built">
            <BulletList items={urbankey.built} />
          </Block>
          <Block title="CI pipeline">
            <NumberedList items={urbankey.ciPipeline} />
          </Block>
          <Block title="Future roadmap" className="sm:col-span-2">
            <p>{urbankey.roadmap.intro}</p>
            <p className="mt-4 font-medium text-[var(--fg)]">Planned features include:</p>
            <div className="mt-3">
              <BulletList items={urbankey.roadmap.plannedFeatures} />
            </div>
            <p className="mt-4">{urbankey.roadmap.vision}</p>
          </Block>
        </motion.div>
      </div>
    </FadeUp>
  );
}
