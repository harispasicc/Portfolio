import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type BrowserMetric = { label: string; value: string };

type BrowserChromeProps = {
  domain: string;
  children: ReactNode;
  metrics: readonly BrowserMetric[];
  tone?: "light" | "dark";
};

export function BrowserChrome({ domain, children, metrics, tone = "light" }: BrowserChromeProps) {
  const isDark = tone === "dark";

  return (
    <div className="overflow-hidden rounded-2xl">
      <div
        className={cn(
          "flex h-9 shrink-0 items-center gap-2 border-b px-3",
          isDark
            ? "border-white/10 bg-[#0a1424]"
            : "border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-subtle)_92%,white)]",
        )}
      >
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4be4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[220px] flex-1 justify-center">
          <div
            className={cn(
              "truncate rounded-md px-2.5 py-1 text-[10px] font-medium tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]",
              isDark
                ? "border border-white/10 bg-black/35 text-slate-300"
                : "border border-[var(--border)] bg-[var(--surface)] text-[var(--fg-muted)] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]",
            )}
          >
            {domain}
          </div>
        </div>
        <div className="w-10 shrink-0" aria-hidden />
      </div>
      <div className={cn("relative", isDark ? "bg-[#070d18]" : "bg-[var(--bg)]")}>
        {children}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t to-transparent",
            isDark
              ? "from-[#070d18] via-[color-mix(in_oklab,#070d18_55%,transparent)]"
              : "from-[var(--surface)] via-[color-mix(in_oklab,var(--surface)_55%,transparent)]",
          )}
          aria-hidden
        />
        <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={cn(
                "rounded-lg px-2.5 py-1.5 backdrop-blur-md",
                isDark
                  ? "border border-white/10 bg-black/45 shadow-[0_12px_40px_-18px_rgba(0,0,0,0.65)]"
                  : "border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_86%,transparent)] shadow-[0_8px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-[2px]",
              )}
            >
              <p
                className={cn(
                  "text-[9px] font-medium uppercase tracking-wide",
                  isDark ? "text-slate-400" : "text-[var(--fg-muted)]",
                )}
              >
                {m.label}
              </p>
              <p
                className={cn(
                  "text-xs font-semibold tabular-nums",
                  isDark ? "text-slate-100" : "text-[var(--fg)]",
                )}
              >
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
