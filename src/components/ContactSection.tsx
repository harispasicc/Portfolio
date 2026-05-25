"use client";

import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionTone } from "@/lib/depth";
import {
  CONTENT,
  SECTION_LABEL_DARK,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { contact, contactCopy, links, person } from "@/data/site";
import { btnOutlineOnDark, btnPrimary } from "@/lib/ui";
import { cn } from "@/lib/cn";

const linkQuiet =
  "break-all text-sm font-medium text-[var(--fg-on-dark)] underline decoration-[color:var(--link-underline-on-dark)] underline-offset-4 transition-colors duration-200 hover:decoration-[var(--accent-on-dark)] sm:break-normal";

export function ContactSection() {
  return (
    <FadeUp
      as="section"
      id="contact"
      className={cn(sectionTone.deep, "relative overflow-x-clip")}
    >
      <SectionAmbient tone="deep" />
      <div className={cn("relative", SECTION_X, SECTION_Y)}>
        <div className={CONTENT}>
          <div className="flex min-w-0 flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16 xl:gap-20">
            <div className="min-w-0 max-w-2xl lg:flex-1 2xl:max-w-3xl">
              <p className={SECTION_LABEL_DARK}>{contactCopy.eyebrow}</p>
              <h2 className="mt-2 text-pretty text-lg font-semibold leading-[1.35] tracking-[-0.02em] text-[var(--fg-on-dark)] sm:text-xl md:text-2xl 2xl:text-[1.75rem]">
                {contactCopy.title}
              </h2>

              <dl className="mt-8 grid gap-5 text-sm sm:grid-cols-2 sm:gap-x-8 md:gap-x-10">
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                    Email
                  </dt>
                  <dd className="mt-1.5">
                    <a href={links.email} className={linkQuiet}>
                      {contact.emailDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                    Phone
                  </dt>
                  <dd className="mt-1.5">
                    <a href={contact.phoneHref} className={linkQuiet}>
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                    Location
                  </dt>
                  <dd className="mt-1.5 text-[var(--fg-on-dark)]">{contact.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] font-medium uppercase tracking-wider text-[var(--fg-on-dark-muted)]">
                    Timezone
                  </dt>
                  <dd className="mt-1.5 text-[var(--fg-on-dark)]">{contactCopy.timezone}</dd>
                </div>
              </dl>

              <p className="mt-6 text-xs text-[var(--fg-on-dark-muted)]">
                {person.name} · React · TypeScript · Next.js
              </p>
            </div>

            <div className="flex w-full min-w-0 flex-col gap-2 sm:max-w-sm md:max-w-md lg:w-[12rem] lg:max-w-none lg:shrink-0 xl:w-[13rem]">
              <a
                href={links.email}
                className={cn(
                  btnPrimary,
                  "w-full justify-center bg-[var(--accent-on-dark)] text-[var(--bg-deep)] hover:brightness-105",
                )}
              >
                Email
              </a>
              <a
                href={links.linkedin}
                className={cn(btnOutlineOnDark, "w-full")}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={links.github}
                className={cn(btnOutlineOnDark, "w-full")}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
