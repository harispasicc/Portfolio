"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { contact, links, person } from "@/data/site";
import { cn } from "@/lib/cn";

const linkClass =
  "inline-flex h-11 items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 text-sm font-medium text-[var(--fg-on-dark)] backdrop-blur-sm shadow-[0_12px_40px_-32px_rgba(0,0,0,0.55)] transition-[border-color,background-color,transform,box-shadow] duration-200 hover:border-white/25 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.985]";

export function ContactSection() {
  return (
    <FadeUp as="section" id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,color-mix(in_oklab,var(--accent-on-dark)_14%,transparent),transparent)]"
        aria-hidden
      />
      <div
        className={cn(
          "relative bg-[var(--bg-deep)] text-[var(--fg-on-dark)]",
          SECTION_X,
          "py-16 min-[380px]:py-20 sm:py-28 lg:py-32",
        )}
      >
        <div className={CONTENT}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-on-dark)]">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] sm:text-4xl">
            Want to work together?
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--fg-on-dark-muted)] sm:text-base">
            {person.name} — {person.roleLine}
          </p>
          <dl className="mt-8 grid gap-3 text-sm text-[var(--fg-on-dark-muted)] sm:grid-cols-2 sm:gap-x-10">
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                Location
              </dt>
              <dd className="mt-1 text-[var(--fg-on-dark)]">{contact.location}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                Phone
              </dt>
              <dd className="mt-1">
                <a
                  href={contact.phoneHref}
                  className="text-[var(--fg-on-dark)] underline decoration-[color:var(--link-underline-on-dark)] underline-offset-4 transition-colors hover:decoration-[var(--accent-on-dark)]"
                >
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-[11px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={links.email}
                  className="text-[var(--fg-on-dark)] underline decoration-[color:var(--link-underline-on-dark)] underline-offset-4 transition-colors hover:decoration-[var(--accent-on-dark)]"
                >
                  {contact.emailDisplay}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <motion.a
              href={links.email}
              className={linkClass}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              Email me
            </motion.a>
            <motion.a
              href={contact.phoneHref}
              className={linkClass}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              Call
            </motion.a>
            <motion.a
              href={links.linkedin}
              className={linkClass}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href={links.github}
              className={linkClass}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.985 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
