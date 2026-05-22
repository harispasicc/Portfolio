import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { fitbook } from "@/data/site";
import { Badge } from "./Badge";
import { FitBookActions, FitBookShowcase } from "./FitBookShowcase";
import { cn } from "@/lib/cn";

export function FitBookFeatured() {
  return (
    <FadeUp
      as="section"
      id="projects"
      className={cn(
        "border-b border-[var(--border)] bg-[var(--section-tint)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28 xl:py-32",
      )}
    >
      <div className={CONTENT}>
        <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
          <div className="min-w-0 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
              Featured product
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-3xl xl:text-[2.15rem] xl:leading-tight 2xl:text-[2.35rem]">
              {fitbook.name}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] sm:text-lg">
              {fitbook.tagline}
            </p>
          </div>
          <div className="min-w-0 shrink-0 lg:max-w-[min(100%,28rem)]">
            <FitBookActions />
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-pretty text-sm leading-[1.72] text-[var(--fg-muted)] sm:text-[15px] sm:leading-relaxed lg:text-base">
          {fitbook.short}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {fitbook.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <FitBookShowcase />
      </div>
    </FadeUp>
  );
}
