import { cn } from "@/lib/cn";

export const SECTION_X = cn(
  "pl-[max(0.75rem,env(safe-area-inset-left))]",
  "pr-[max(0.75rem,env(safe-area-inset-right))]",
  "sm:pl-6 sm:pr-6",
  "md:pl-8 md:pr-8",
  "lg:pl-10 lg:pr-10",
  "xl:pl-12 xl:pr-12",
  "2xl:pl-16 2xl:pr-16",
  "min-[1920px]:pl-20 min-[1920px]:pr-20",
);

export const CONTENT =
  "relative z-[1] mx-auto w-full min-w-0 max-w-6xl 2xl:max-w-7xl min-[1920px]:max-w-[88rem]";

export const SECTION_Y =
  "py-10 sm:py-14 md:py-16 lg:py-20 xl:py-[5.25rem] min-[1920px]:py-24";

export const HERO_Y = cn(
  "pb-12 pt-8",
  "sm:pb-16 sm:pt-10",
  "md:pb-[4.5rem] md:pt-11",
  "lg:pb-20 lg:pt-12",
  "xl:pb-24 xl:pt-14",
  "min-[1920px]:pb-28",
);

export const SECTION_LABEL =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]";

export const SECTION_LABEL_DARK =
  "text-[11px] font-semibold uppercase tracking-[0.18em] text-[color-mix(in_oklab,var(--teal)_65%,var(--fg-on-dark-muted))]";

export const SECTION_TITLE =
  "text-[1.375rem] font-semibold leading-[1.15] tracking-[-0.025em] text-[var(--fg)] sm:text-2xl md:text-[1.75rem]";

export const SECTION_TITLE_DARK =
  "text-[1.375rem] font-semibold leading-[1.15] tracking-[-0.025em] text-[var(--fg-on-dark)] sm:text-2xl md:text-[1.75rem]";

export const SECTION_DESC =
  "mt-3 max-w-2xl text-sm leading-[1.65] text-[var(--fg-muted)] sm:text-[15px] md:max-w-3xl md:text-base 2xl:max-w-[40rem]";

export const SECTION_DESC_DARK =
  "mt-3 max-w-2xl text-sm leading-[1.65] text-[var(--fg-on-dark-muted)] sm:text-[15px] md:max-w-3xl md:text-base 2xl:max-w-[40rem]";

export const GRID_SHOWCASE =
  "mt-8 grid min-w-0 grid-cols-1 gap-5 sm:mt-9 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:gap-8";

export const GRID_ENGINEERING =
  "mt-8 grid min-w-0 gap-3 sm:mt-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4 2xl:gap-5";

export const GRID_SKILLS =
  "mt-8 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4";

export const GRID_PROJECTS =
  "mt-8 grid min-w-0 grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 md:gap-6 xl:gap-8";

export const GRID_CASE_STUDY =
  "mt-8 grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-4 md:gap-5";

export const PROSE_BODY = "max-w-2xl md:max-w-3xl 2xl:max-w-[42rem]";
