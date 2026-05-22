import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { education, experience } from "@/data/site";
import { cn } from "@/lib/cn";

export function ExperienceSection() {
  return (
    <FadeUp
      as="section"
      id="experience"
      className={cn(
        "border-b border-[var(--border)] bg-[var(--bg)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div className={CONTENT}>
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-3xl">
          Experience
        </h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[var(--fg-muted)] sm:text-base">
          Production roles from healthcare platforms to market research products—ownership
          of architecture, quality, and cross-functional delivery.
        </p>

        <div className="mt-12 space-y-14">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="border-b border-[var(--border)] pb-14 transition-colors last:border-0 last:pb-0 hover:border-[color-mix(in_oklab,var(--border-strong)_55%,var(--border))]"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
                      {job.company}
                    </h3>
                    {job.location ? (
                      <span className="text-sm text-[var(--fg-muted)]">· {job.location}</span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm font-medium text-[var(--fg-muted)]">{job.title}</p>
                </div>
                <p className="shrink-0 text-sm tabular-nums text-[var(--fg-muted)] sm:pt-0.5 sm:text-right">
                  {job.period}
                </p>
              </div>
              <ul className="mt-5 max-w-3xl space-y-2.5 text-sm leading-relaxed text-[var(--fg-muted)] sm:text-[15px] sm:leading-relaxed">
                {job.highlights.map((line, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[color-mix(in_oklab,var(--accent)_70%,var(--teal))]"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-14">
          <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
            Education
          </h3>
          <div className="mt-8 space-y-10">
            {education.map((entry) => (
              <div
                key={`${entry.school}-${entry.period}`}
                className="grid gap-2 sm:grid-cols-[1fr_auto] sm:gap-x-10"
              >
                <div>
                  <p className="text-base font-semibold text-[var(--fg)]">{entry.degree}</p>
                  <p className="mt-0.5 text-sm text-[var(--fg-muted)]">
                    {entry.school}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  {"highlights" in entry && entry.highlights ? (
                    <ul className="mt-4 max-w-3xl space-y-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                      {entry.highlights.map((line, i) => (
                        <li key={i} className="flex gap-3">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
                            aria-hidden
                          />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <p className="text-sm tabular-nums text-[var(--fg-muted)] sm:text-right">{entry.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeUp>
  );
}
