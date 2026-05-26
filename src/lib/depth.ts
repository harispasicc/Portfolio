import { cn } from "@/lib/cn";

const sectionShell = "relative overflow-hidden";

export const sectionDividerTop =
  "pointer-events-none absolute inset-x-0 top-0 z-[1] h-px bg-gradient-to-r from-transparent via-[color-mix(in_oklab,var(--border-strong)_55%,var(--border))] to-transparent";

export const sectionTone = {
  hero: cn(
    sectionShell,
    "border-b border-[var(--border)]",
    "bg-[linear-gradient(180deg,color-mix(in_oklab,var(--bg)_88%,var(--hero-bg-mix)),var(--bg)_42%)]",
  ),
  tint: cn(sectionShell, "border-b border-[var(--border)] bg-[var(--section-warm)]"),
  canvas: cn(sectionShell, "border-b border-[var(--border)] bg-[var(--bg)]"),
  raised: cn(sectionShell, "border-b border-[var(--border)] bg-[var(--bg-raised)]"),
  mist: cn(sectionShell, "border-b border-[var(--border)] bg-[var(--section-mist)]"),
  dark: cn(sectionShell, "border-b border-white/10 bg-[var(--bg-navy)] text-[var(--fg-on-dark)]"),
  deep: cn(sectionShell, "border-t border-white/[0.06] bg-[var(--bg-deep)] text-[var(--fg-on-dark)]"),
} as const;

export type SectionTone = keyof typeof sectionTone;
