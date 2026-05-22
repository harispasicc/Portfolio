"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { links } from "@/data/site";
import { BrowserChrome } from "./BrowserChrome";

const outlineBtn =
  "inline-flex h-10 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] px-4 text-sm font-medium text-[var(--fg)] shadow-[var(--shadow-sm)] backdrop-blur-[1px] transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-md)] active:scale-[0.985]";
const solidBtn =
  "inline-flex h-10 items-center justify-center rounded-full bg-[var(--accent)] px-4 text-sm font-medium text-white shadow-[0_14px_40px_-24px_color-mix(in_oklab,var(--accent)_55%,transparent),var(--shadow-sm)] ring-1 ring-white/10 transition-[box-shadow,transform,filter] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-22px_color-mix(in_oklab,var(--accent)_58%,transparent)] hover:brightness-[1.03] active:scale-[0.985]";

const landingMetrics = [
  { label: "Signups", value: "+12%" },
  { label: "Activation", value: "38%" },
] as const;

const dashboardMetrics = [
  { label: "Bookings", value: "186" },
  { label: "Retention", value: "88%" },
] as const;

function Sparkline() {
  return (
    <svg
      className="h-6 w-20 text-[color-mix(in_oklab,var(--teal)_60%,white)]"
      viewBox="0 0 120 32"
      fill="none"
      aria-hidden
    >
      <path
        d="M4 24 C20 10 36 28 52 14 S88 22 116 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="sparkline-animate"
        opacity={0.85}
      />
    </svg>
  );
}

function MicroBars() {
  const heights = [42, 68, 54, 82, 58, 90, 48];
  return (
    <div className="flex h-6 items-end justify-end gap-0.5">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-0.5 rounded-sm bg-[color-mix(in_oklab,var(--teal)_60%,#94a3b8)]"
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          animate={{ scaleY: [1, 1.12, 1] }}
          transition={{
            duration: 2.4 + i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.08,
          }}
        />
      ))}
    </div>
  );
}

function PreviewShell({
  children,
  glowClassName,
}: {
  children: React.ReactNode;
  glowClassName?: string;
}) {
  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -inset-6 -z-10 rounded-[32px] blur-3xl ${glowClassName ?? "bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_18%,transparent),transparent)] opacity-90"}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -inset-10 -z-20 rounded-[40px] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_12%,transparent),transparent)] opacity-80 blur-2xl"
        aria-hidden
      />
      {children}
    </div>
  );
}

function LiveGlassOverlay({ variant }: { variant: "marketing" | "app" }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-[10px] text-slate-200 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md">
        <span className="flex min-w-0 flex-1 items-center gap-2 font-medium">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/50 opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="min-w-0 truncate">
            {variant === "app" ? "Live workspace" : "Live funnel"}
            <span className="ml-2 hidden font-normal text-slate-400 sm:inline">
              {variant === "app"
                ? "· 12 active clients · AI plans on"
                : "· 186 bookings · 88% retention"}
            </span>
          </span>
        </span>
        <div className="shrink-0 opacity-90">
          {variant === "app" ? <MicroBars /> : <Sparkline />}
        </div>
      </div>
    </div>
  );
}

export function FitBookShowcase() {
  return (
    <>
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <motion.figure
          className="group"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] as const }}
          whileHover={{ y: -5 }}
        >
          <PreviewShell glowClassName="bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_20%,transparent),transparent)] opacity-95">
            <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-md)] ring-1 ring-black/[0.04] transition-[box-shadow,border-color] duration-300 group-hover:border-[color-mix(in_oklab,var(--border-strong)_70%,var(--border))] group-hover:shadow-[var(--shadow-lg)]">
              <BrowserChrome domain="fitbook.ai" metrics={landingMetrics} tone="light">
                <div className="relative">
                  <Image
                    src="/images/fitbook-landing.svg"
                    alt="FitBook AI marketing landing page mockup"
                    width={1200}
                    height={720}
                    className="h-auto w-full brightness-[0.92] contrast-[1.05] saturate-[0.95] transition-[filter,transform] duration-500 group-hover:scale-[1.01]"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/25 via-transparent to-[color-mix(in_oklab,var(--teal)_12%,transparent)] mix-blend-multiply"
                    aria-hidden
                  />
                  <LiveGlassOverlay variant="marketing" />
                </div>
              </BrowserChrome>
            </div>
          </PreviewShell>
          <figcaption className="mt-3 px-1 text-xs font-medium text-[var(--fg-muted)]">
            Landing &amp; acquisition surface
          </figcaption>
        </motion.figure>

        <motion.figure
          className="group"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.52, delay: 0.06, ease: [0.22, 1, 0.36, 1] as const }}
          whileHover={{ y: -5 }}
        >
          <PreviewShell glowClassName="bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--teal)_22%,transparent),transparent)] opacity-95">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070d18] shadow-[0_28px_90px_-48px_rgba(0,0,0,0.75)] ring-1 ring-white/10 transition-[box-shadow,border-color] duration-300 group-hover:border-[color-mix(in_oklab,var(--teal)_35%,white)] group-hover:shadow-[0_32px_100px_-44px_color-mix(in_oklab,var(--teal)_18%,black)]">
              <BrowserChrome domain="app.fitbook.ai" metrics={dashboardMetrics} tone="dark">
                <div className="relative">
                  <Image
                    src="/images/fitbook-dashboard.svg"
                    alt="FitBook AI trainer dashboard mockup"
                    width={1200}
                    height={720}
                    className="h-auto w-full brightness-[0.85] contrast-[1.08] saturate-[0.9] transition-[filter,transform] duration-500 group-hover:scale-[1.01]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[color-mix(in_oklab,var(--teal)_10%,transparent)] via-transparent to-black/35"
                    aria-hidden
                  />
                  <LiveGlassOverlay variant="app" />
                </div>
              </BrowserChrome>
            </div>
          </PreviewShell>
          <figcaption className="mt-3 px-1 text-xs font-medium text-[var(--fg-muted)]">
            Trainer operating system
          </figcaption>
        </motion.figure>
      </div>
    </>
  );
}

export function FitBookActions() {
  return (
    <div className="flex flex-wrap gap-2 lg:justify-end">
      <motion.a
        href={links.fitbookLive}
        className={solidBtn}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        Live demo
      </motion.a>
      <motion.a
        href={links.fitbookRepo}
        className={outlineBtn}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        GitHub
      </motion.a>
      <motion.a
        href="#fitbook-case-study"
        className={outlineBtn}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.985 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        Case study
      </motion.a>
    </div>
  );
}
