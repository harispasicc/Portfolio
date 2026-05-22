import { FadeUp } from "@/components/motion/FadeUp";
import { CONTENT, SECTION_X } from "@/lib/section";
import { fitbook } from "@/data/site";
import { cn } from "@/lib/cn";

function Block({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)] ring-1 ring-black/[0.02] transition-[box-shadow,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--border-strong)_65%,var(--border))] hover:shadow-[var(--shadow-md)] sm:p-8",
        className,
      )}
    >
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--fg-muted)]">
        {title}
      </h3>
      <div className="mt-3 text-[15px] leading-[1.72] text-[var(--fg)] sm:text-base sm:leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function FitBookCaseStudy() {
  return (
    <FadeUp
      as="section"
      id="fitbook-case-study"
      className={cn(
        "border-b border-[var(--border)] bg-[var(--bg)]",
        SECTION_X,
        "py-16 min-[380px]:py-20 sm:py-24 lg:py-28",
      )}
    >
      <div className={CONTENT}>
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
            Case study
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-[var(--fg)] sm:text-3xl">
            How FitBook AI removes operational drag for coaches
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Block title="Problem">
            <p className="text-[var(--fg-muted)]">{fitbook.problem}</p>
          </Block>
          <Block title="Solution">
            <p className="text-[var(--fg-muted)]">{fitbook.solution}</p>
          </Block>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <Block title="Features">
            <ul className="grid gap-2 sm:grid-cols-2">
              {fitbook.features.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[var(--fg-muted)]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="What I built">
            <ul className="grid gap-2">
              {fitbook.built.map((item) => (
                <li key={item} className="flex items-center gap-2 text-[var(--fg-muted)]">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </FadeUp>
  );
}
