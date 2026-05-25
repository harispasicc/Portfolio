import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import {
  CONTENT,
  PROSE_BODY,
  SECTION_TITLE,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { about } from "@/data/site";
import { cn } from "@/lib/cn";

export function AboutSection() {
  return (
    <FadeUp
      as="section"
      id="about"
      className={cn(sectionTone.mist, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="mist" />
      <div className={CONTENT}>
        <h2 className={SECTION_TITLE}>About</h2>
        <div
          className={cn(
            PROSE_BODY,
            "mt-5 space-y-4 text-pretty text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px]",
          )}
        >
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {about.strengths.map((label) => (
            <li
              key={label}
              className="rounded-full border border-[color-mix(in_oklab,var(--border-strong)_35%,var(--border))] bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--fg)] shadow-[var(--shadow-sm)]"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </FadeUp>
  );
}
