import { FadeUp } from "@/components/motion/FadeUp";
import { SectionAmbient } from "@/components/SectionAmbient";
import { sectionDividerTop, sectionTone } from "@/lib/depth";
import {
  CONTENT,
  GRID_SHOWCASE,
  PROSE_BODY,
  SECTION_LABEL,
  SECTION_X,
  SECTION_Y,
} from "@/lib/section";
import { CoachBookWordmark } from "@/components/coachbook/CoachBookBrand";
import { coachbook } from "@/data/site";
import { Badge } from "./Badge";
import { CoachBookActions, CoachBookShowcase } from "./CoachBookShowcase";
import { cn } from "@/lib/cn";

export function CoachBookFeatured() {
  return (
    <FadeUp
      as="section"
      id="projects"
      className={cn(sectionTone.tint, SECTION_X, SECTION_Y, "overflow-x-clip")}
    >
      <div className={sectionDividerTop} aria-hidden />
      <SectionAmbient tone="tint" />
      <div className={CONTENT}>
        <div className="flex min-w-0 flex-col gap-6 md:gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-12">
          <div className="min-w-0 flex-1 lg:max-w-2xl">
            <p className={SECTION_LABEL}>Featured product</p>
            <h2 className="mt-2">
              <CoachBookWordmark className="text-xl sm:text-2xl md:text-[1.75rem]" />
              <span className="sr-only">{coachbook.name}</span>
            </h2>
            <p className="mt-2.5 text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px] md:text-base">
              {coachbook.tagline}
            </p>
          </div>
          <div className="w-full min-w-0 sm:max-w-md lg:w-[14rem] lg:max-w-none lg:shrink-0 xl:w-[15rem]">
            <CoachBookActions />
          </div>
        </div>

        <p
          className={cn(
            PROSE_BODY,
            "mt-6 text-pretty text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px]",
          )}
        >
          {coachbook.short}
        </p>

        <ul className="mt-5 grid min-w-0 gap-2 sm:grid-cols-2 lg:max-w-3xl">
          {coachbook.highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm leading-[1.55] text-[var(--fg-muted)]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {coachbook.stackPrimary.map((tech) => (
            <Badge
              key={tech}
              className="border-[color-mix(in_oklab,var(--teal)_32%,var(--border-strong))] bg-[color-mix(in_oklab,var(--teal)_8%,var(--surface))] font-semibold text-[var(--fg)] shadow-[var(--shadow-sm)]"
            >
              {tech}
            </Badge>
          ))}
          {coachbook.stackSecondary.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <CoachBookShowcase className={GRID_SHOWCASE} />
      </div>
    </FadeUp>
  );
}
