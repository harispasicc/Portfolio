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
import { FitBookWordmark } from "@/components/fitbook/FitBookBrand";
import { fitbook } from "@/data/site";
import { Badge } from "./Badge";
import { FitBookActions, FitBookShowcase } from "./FitBookShowcase";
import { cn } from "@/lib/cn";

export function FitBookFeatured() {
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
              <FitBookWordmark className="text-xl sm:text-2xl md:text-[1.75rem]" />
              <span className="sr-only">{fitbook.name}</span>
            </h2>
            <p className="mt-2.5 text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px] md:text-base">
              {fitbook.tagline}
            </p>
          </div>
          <div className="w-full min-w-0 sm:max-w-md lg:w-[14rem] lg:max-w-none lg:shrink-0 xl:w-[15rem]">
            <FitBookActions />
          </div>
        </div>

        <p
          className={cn(
            PROSE_BODY,
            "mt-6 text-pretty text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px]",
          )}
        >
          {fitbook.short}
        </p>

        <ul className="mt-5 grid min-w-0 gap-2 sm:grid-cols-2 lg:max-w-3xl">
          {fitbook.highlights.map((item) => (
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
          {fitbook.stackPrimary.map((tech) => (
            <Badge
              key={tech}
              className="border-[color-mix(in_oklab,var(--teal)_32%,var(--border-strong))] bg-[color-mix(in_oklab,var(--teal)_8%,var(--surface))] font-semibold text-[var(--fg)] shadow-[var(--shadow-sm)]"
            >
              {tech}
            </Badge>
          ))}
          {fitbook.stackSecondary.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <FitBookShowcase className={GRID_SHOWCASE} />
      </div>
    </FadeUp>
  );
}
