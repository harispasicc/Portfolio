import { cn } from "@/lib/cn";

export const productCardOuter = cn(
  "overflow-hidden rounded-2xl border border-[color-mix(in_oklab,var(--border-strong)_35%,var(--border))] bg-[var(--surface)]",
  "shadow-[var(--shadow-product)] ring-1 ring-black/[0.04]",
  "transition-[box-shadow,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover:-translate-y-1 group-hover:scale-[1.008]",
  "group-hover:border-[color-mix(in_oklab,var(--teal)_28%,var(--border-strong))]",
  "group-hover:shadow-[var(--shadow-product-hover)]",
  "group-hover:ring-[color-mix(in_oklab,var(--teal)_14%,transparent)]",
);

export const productImageZoom = cn(
  "h-auto w-full contrast-[1.05] saturate-[1.04]",
  "transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover:scale-[1.02] group-hover:contrast-[1.07] group-hover:saturate-[1.06]",
);

export const heroProductImage = cn(
  "h-auto w-full hero-product-image",
  "transition-[transform,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "group-hover:scale-[1.015] group-hover:brightness-[1.02]",
);

export const surfaceCard = cn(
  "rounded-2xl border border-[color-mix(in_oklab,var(--border-strong)_30%,var(--border))] bg-[var(--surface)]",
  "shadow-[var(--shadow-card)] ring-1 ring-black/[0.03]",
  "transition-[box-shadow,border-color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--border-strong)_55%,var(--border))]",
  "hover:shadow-[var(--shadow-card-hover)]",
);

export const surfaceCardRaised = cn(
  surfaceCard,
  "bg-[var(--bg-raised)] shadow-[var(--shadow-elevated)]",
  "hover:shadow-[var(--shadow-card-hover),var(--shadow-md)]",
);

export const surfaceCardDark = cn(
  "rounded-2xl border border-white/[0.1] bg-[color-mix(in_oklab,var(--bg-navy-card)_92%,black)]",
  "shadow-[0_1px_0_rgba(255,255,255,0.05)_inset,0_8px_28px_-16px_rgba(0,0,0,0.5)]",
  "transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:border-[color-mix(in_oklab,var(--teal)_32%,white)]",
  "hover:shadow-[0_1px_0_rgba(255,255,255,0.07)_inset,0_0_0_1px_color-mix(in_oklab,var(--teal)_16%,transparent),0_24px_56px_-40px_rgba(0,0,0,0.72)]",
);

export const experienceEntry = cn(
  "relative rounded-xl border border-transparent p-4 sm:pl-10",
  "transition-[border-color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:border-[color-mix(in_oklab,var(--border)_90%,transparent)]",
  "hover:bg-[color-mix(in_oklab,var(--surface)_50%,transparent)] hover:shadow-[var(--shadow-sm)]",
);
