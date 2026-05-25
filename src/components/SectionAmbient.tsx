import { cn } from "@/lib/cn";
import type { SectionTone } from "@/lib/depth";

type SectionAmbientProps = {
  tone: SectionTone;
};

export function SectionAmbient({ tone }: SectionAmbientProps) {
  if (tone === "hero") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 hero-atmosphere" aria-hidden />
        <div className="pointer-events-none absolute inset-0 hero-spotlight" aria-hidden />
        <div
          className="pointer-events-none absolute -right-[20%] top-[8%] h-[min(36rem,90vw)] w-[min(36rem,90vw)] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_14%,transparent),transparent)] blur-[80px] opacity-90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--section-warm)] to-transparent"
          aria-hidden
        />
      </>
    );
  }

  if (tone === "tint") {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,color-mix(in_oklab,var(--surface)_40%,transparent),transparent)]"
        aria-hidden
      />
    );
  }

  if (tone === "raised") {
    return (
      <>
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_50%_0%,color-mix(in_oklab,var(--teal)_5%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[color-mix(in_oklab,var(--section-warm)_50%,transparent)] to-transparent"
          aria-hidden
        />
      </>
    );
  }

  if (tone === "canvas") {
    return (
      <div
        className="pointer-events-none absolute left-0 top-1/4 h-[min(28rem,70vw)] w-[min(28rem,70vw)] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_6%,transparent),transparent)] blur-[72px] opacity-80"
        aria-hidden
      />
    );
  }

  if (tone === "mist") {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_100%_0%,color-mix(in_oklab,var(--teal)_6%,transparent),transparent)]"
        aria-hidden
      />
    );
  }

  if (tone === "dark") {
    return (
      <>
        <div className="pointer-events-none absolute inset-0 engineering-grid opacity-50" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_55%_at_15%_0%,color-mix(in_oklab,var(--teal)_11%,transparent),transparent)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
          aria-hidden
        />
      </>
    );
  }

  if (tone === "deep") {
    return (
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_100%_0%,color-mix(in_oklab,var(--accent-on-dark)_14%,transparent),transparent)]"
        aria-hidden
      />
    );
  }

  return null;
}
