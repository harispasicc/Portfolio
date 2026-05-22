import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { about } from "@/data/site";
import { cn } from "@/lib/cn";

export function AboutSection() {
  return (
    <FadeUp
      as="section"
      id="about"
      className={cn(
        "border-b border-[var(--border)] bg-[var(--section-tint)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div className={CONTENT}>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-3xl xl:text-[2rem]">
          About
        </h2>
        <div className="mt-8 max-w-2xl space-y-5 text-pretty text-sm leading-relaxed text-[var(--fg-muted)] sm:text-base sm:leading-relaxed lg:text-[17px] lg:leading-[1.72]">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
