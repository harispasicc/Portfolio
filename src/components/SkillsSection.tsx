"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { skills } from "@/data/site";
import { cn } from "@/lib/cn";

const groups: { title: string; items: readonly string[] }[] = [
  { title: "Frontend", items: skills.frontend },
  { title: "Styling & UI systems", items: skills.styling },
  { title: "Backend & APIs", items: skills.backend },
  { title: "Testing", items: skills.testing },
  { title: "Workflow & design", items: skills.workflow },
  { title: "Platform & observability", items: skills.platform },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const row = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SkillsSection() {
  return (
    <FadeUp
      as="section"
      id="skills"
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-[var(--bg-navy)] text-[var(--fg-on-dark)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_55%_at_80%_0%,color-mix(in_oklab,var(--teal)_10%,transparent),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(70% 60% at 50% 0%, black 35%, transparent 100%)",
        }}
        aria-hidden
      />

      <div className={cn("relative", CONTENT)}>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">Skills</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--fg-on-dark-muted)] sm:text-base">
          Stack and tooling from production web, research platforms, and healthcare products—grouped for clarity, not buzzwords.
        </p>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          variants={container}
        >
          {groups.map((group) => (
            <motion.div
              key={group.title}
              variants={row}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={cn(
                "rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--bg-navy-card)_92%,black)] p-5 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.75)] backdrop-blur-sm",
                "transition-[border-color,box-shadow,transform] duration-300 hover:border-[color-mix(in_oklab,var(--teal)_35%,white)]",
                "hover:shadow-[0_0_0_1px_color-mix(in_oklab,var(--teal)_28%,transparent),0_26px_70px_-40px_color-mix(in_oklab,var(--teal)_14%,black)]",
              )}
            >
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-on-dark-muted)]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={cn(
                      "rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-[var(--fg-on-dark)]",
                      "shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-[border-color,box-shadow,color,transform] duration-200",
                      "hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--teal)_40%,white)] hover:text-[color-mix(in_oklab,var(--teal)_70%,white)]",
                    )}
                  >
                    {item}
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
