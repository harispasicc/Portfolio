"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { saasProductArchitecture } from "@/data/site";
import { cn } from "@/lib/cn";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function BuiltLikeSaaSSection() {
  return (
    <FadeUp
      as="section"
      id="built-saas"
      className={cn(
        "relative overflow-hidden border-b border-white/10 bg-[var(--bg-navy)] text-[var(--fg-on-dark)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_60%_at_20%_0%,color-mix(in_oklab,var(--teal)_12%,transparent),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.55) 1px, transparent 0)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(75% 65% at 50% 0%, black 40%, transparent 100%)",
        }}
        aria-hidden
      />
      <div className={cn("relative", CONTENT)}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color-mix(in_oklab,var(--teal)_70%,var(--fg-on-dark-muted))]">
          Engineering
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-0.02em] sm:text-3xl">
          Built like a real SaaS product
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--fg-on-dark-muted)] sm:text-base">
          Production-minded surfaces: auth, scheduling, AI workflows, CRM, analytics, and
          architecture that scales with the business—not a UI shell.
        </p>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
        >
          {saasProductArchitecture.map((item) => (
            <motion.article
              key={item.title}
              variants={card}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[color-mix(in_oklab,var(--bg-navy-card)_92%,black)] p-5 shadow-[0_24px_80px_-52px_rgba(0,0,0,0.75)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[color-mix(in_oklab,var(--teal)_38%,white)]"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(120% 80% at 10% 0%, color-mix(in oklab, var(--teal) 16%, transparent), transparent 55%)",
                }}
              />
              <div className="relative">
                <h3 className="text-sm font-semibold tracking-tight text-[var(--fg-on-dark)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--fg-on-dark-muted)]">
                  {item.blurb}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </FadeUp>
  );
}
