import type { ReactNode } from "react";

type BrowserChromeProps = {
  domain: string;
  children: ReactNode;
};

export function BrowserChrome({ domain, children }: BrowserChromeProps) {
  return (
    <div className="overflow-hidden rounded-2xl">
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-[var(--border)] bg-[color-mix(in_oklab,var(--bg-subtle)_92%,white)] px-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ec6a5e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f4be4f]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#61c554]" />
        </div>
        <div className="mx-auto flex min-w-0 max-w-[min(100%,11rem)] flex-1 justify-center sm:max-w-[14rem] md:max-w-[16rem]">
          <div className="w-full truncate rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-0.5 text-center text-[9px] font-medium text-[var(--fg-muted)] tabular-nums shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:px-2.5 sm:py-1 sm:text-[10px]">
            {domain}
          </div>
        </div>
        <div className="w-10 shrink-0" aria-hidden />
      </div>
      <div className="relative bg-[var(--bg)]">{children}</div>
    </div>
  );
}
