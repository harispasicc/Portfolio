"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { secondaryProjects } from "@/data/site";
import { cn } from "@/lib/cn";
import { Badge } from "./Badge";

const outlineBtn =
  "inline-flex h-9 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-3 text-xs font-medium text-[var(--fg)] shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)] active:scale-[0.985] sm:text-sm";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function SecondaryProjects() {
  return (
    <FadeUp
      as="section"
      className={cn(
        "border-b border-[var(--border)] bg-[var(--section-tint)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div className={CONTENT}>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-3xl">
          More work
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--fg-muted)] sm:text-base">
          Additional product surfaces with the same bar for clarity, performance,
          and maintainability.
        </p>

        <motion.div
          className="mt-12 grid min-w-0 gap-8 lg:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={listVariants}
        >
          {secondaryProjects.map((project) => (
            <motion.article
              key={project.slug}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] ring-1 ring-black/[0.02] transition-[box-shadow,border-color] duration-300 hover:border-[color-mix(in_oklab,var(--border-strong)_70%,var(--border))] hover:shadow-[var(--shadow-lg)]"
            >
              <div className="relative aspect-[8/5] border-b border-[var(--border)] bg-[var(--bg)]">
                <Image
                  src={project.image}
                  alt={`${project.name} product mockup`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--fg)]">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-[var(--fg-muted)]">{project.tagline}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {project.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={project.live}
                    className={outlineBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live demo
                  </a>
                  <a
                    href={project.repo}
                    className={outlineBtn}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </FadeUp>
  );
}
