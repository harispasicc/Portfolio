"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FitBookWordmark } from "@/components/fitbook/FitBookBrand";
import { links } from "@/data/site";
import { heroProductImage } from "@/lib/interaction";
import { EASE_PREMIUM } from "@/lib/motion";
import { cn } from "@/lib/cn";
import { BrowserChrome } from "./BrowserChrome";

export function HeroProductPreview() {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [1.5, -1.5]), {
    stiffness: 160,
    damping: 26,
    mass: 0.4,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-2.5, 2.5]), {
    stiffness: 160,
    damping: 26,
    mass: 0.4,
  });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      className="relative mx-auto min-w-0 w-full max-w-[min(100%,36rem)] overflow-hidden sm:max-w-[32rem] lg:mx-0 lg:max-w-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.08, ease: EASE_PREMIUM }}
    >
      <div
        className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_8%,transparent),transparent)] blur-[48px] opacity-50 sm:-inset-6 sm:blur-[56px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-[-6%] h-10 w-[88%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,color-mix(in_oklab,var(--fg)_10%,transparent),transparent_70%)] blur-xl opacity-35 sm:h-12 sm:w-[90%]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-4 top-6 right-2 bottom-2 -z-10 hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] sm:block md:left-5 md:top-7"
        aria-hidden
      />

      <motion.div
        className={cn(
          "product-frame relative min-w-0 rounded-[16px] border border-[var(--border)] p-2.5 sm:rounded-[18px] sm:p-3 md:p-3.5",
          "transition-shadow duration-300 hover:shadow-[var(--shadow-product-hover)]",
        )}
        style={
          reduceMotion
            ? undefined
            : {
                perspective: 1200,
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
              }
        }
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <div className="mb-2 flex items-center justify-between gap-2 px-0.5 sm:gap-3">
          <FitBookWordmark className="text-xs sm:text-sm md:text-[15px]" />
          <span className="shrink-0 text-[9px] font-medium text-[var(--fg-muted)] sm:text-[10px]">
            FitBook AI
          </span>
        </div>

        <Link
          href={links.fitbookLive}
          target="_blank"
          rel="noreferrer"
          className="group block min-w-0 overflow-hidden rounded-lg ring-1 ring-black/[0.06] transition-[ring-color] duration-300 hover:ring-[color-mix(in_oklab,var(--teal)_25%,var(--border))] sm:rounded-xl"
        >
          <BrowserChrome domain="fitbook-ai-e2gi.vercel.app/dashboard" tone="light">
            <div className="overflow-hidden bg-white">
              <Image
                src="/images/fitbook-coach-dashboard.png"
                alt="FitBook AI coach dashboard"
                width={1024}
                height={558}
                className={heroProductImage}
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 58vw, 680px"
              />
            </div>
          </BrowserChrome>
        </Link>
      </motion.div>
    </motion.div>
  );
}
