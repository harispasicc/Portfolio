"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const floatTransition = {
  duration: 5.2,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

function MiniBarChart() {
  const heights = [40, 72, 52, 88, 64, 96, 56];
  return (
    <div className="flex h-16 items-end gap-1">
      {heights.map((h, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-sm bg-[color-mix(in_oklab,var(--teal)_42%,#cbd5e1)]"
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          animate={{ scaleY: [1, 1.1, 1] }}
          transition={{
            duration: 2.6 + i * 0.12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.09,
          }}
        />
      ))}
    </div>
  );
}

function MiniCalendar() {
  return (
    <div className="space-y-2">
      <p className="text-[10px] font-medium text-[var(--fg-muted)]">Today</p>
      <div className="space-y-1.5">
        {["09:00 · Intro", "11:30 · Strength", "16:00 · Check-in"].map((row) => (
          <div
            key={row}
            className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[10px] text-[var(--fg)]"
          >
            {row}
          </div>
        ))}
      </div>
    </div>
  );
}

function MiniAI() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[11px] font-semibold text-[var(--accent)]">
          AI
        </span>
        <p className="text-[11px] leading-snug text-[var(--fg-muted)]">
          Generate a 4-week progressive overload plan for this client.
        </p>
      </div>
      <div className="rounded-md border border-dashed border-[var(--border-strong)] bg-[var(--bg-subtle)] px-2 py-1.5 text-[10px] font-medium text-[var(--accent)]">
        Draft plan ready · Review
      </div>
    </div>
  );
}

function MiniClients() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-7 w-7 rounded-full border-2 border-[var(--surface)] bg-[color-mix(in_oklab,var(--accent)_22%,#e2e8f0)]"
            />
          ))}
        </div>
        <div>
          <p className="text-[10px] font-medium text-[var(--fg)]">Active roster</p>
          <p className="text-[9px] text-[var(--fg-muted)]">12 clients this week</p>
        </div>
      </div>
      <div className="flex gap-2 text-[9px] text-[var(--fg-muted)]">
        <span className="rounded bg-[var(--surface)] px-1.5 py-0.5">On track</span>
        <span className="rounded bg-[var(--surface)] px-1.5 py-0.5">1 follow-up</span>
      </div>
    </div>
  );
}

const floatingBadges = [
  { label: "186 bookings", style: "left-[-6%] top-[10%] sm:left-[-4%]" },
  { label: "88% retention", style: "right-[-4%] top-[18%]" },
  { label: "12 active clients", style: "left-[4%] bottom-[8%]" },
  { label: "AI-generated plans", style: "right-[2%] bottom-[14%]" },
] as const;

export function HeroProductPreview() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5.5, -5.5]), {
    stiffness: 140,
    damping: 22,
    mass: 0.35,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6.5, 6.5]), {
    stiffness: 140,
    damping: 22,
    mass: 0.35,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function handleLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div className="relative mx-auto min-w-0 w-full max-w-[440px] lg:mx-0 lg:max-w-none">
      {floatingBadges.map((b, i) => (
        <motion.span
          key={b.label}
          className={`pointer-events-none absolute z-20 hidden rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] px-3 py-1 text-[11px] font-medium text-[var(--fg)] shadow-[0_10px_40px_-22px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:inline-flex ${b.style} animate-float-soft`}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 + i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ animationDelay: `${i * 0.28}s` }}
        >
          {b.label}
        </motion.span>
      ))}

      <motion.div
        className="relative rounded-3xl border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] p-3 shadow-[0_24px_80px_-40px_color-mix(in_oklab,var(--fg)_12%,transparent),0_1px_0_var(--preview-inset-highlight)_inset] ring-1 ring-[color-mix(in_oklab,var(--teal)_12%,transparent)]"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
      >
        <motion.div
          className="rounded-2xl border border-[var(--border)]/80 bg-[var(--surface)] p-3 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
          style={{
            perspective: 1100,
            transformStyle: "preserve-3d",
            rotateX,
            rotateY,
          }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={floatTransition}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="mb-2 flex items-center justify-between px-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--fg-muted)]">
                FitBook AI
              </p>
              <span className="rounded-full bg-[var(--bg-subtle)] px-2 py-0.5 text-[10px] font-medium text-[var(--fg-muted)]">
                Trainer OS
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3">
                <p className="text-[10px] font-medium text-[var(--fg-muted)]">Analytics</p>
                <p className="mt-1 text-lg font-semibold tabular-nums tracking-tight text-[var(--fg)]">
                  94.2k
                </p>
                <p className="text-[9px] text-[var(--fg-muted)]">sessions · 30d</p>
                <div className="mt-3">
                  <MiniBarChart />
                </div>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3">
                <p className="text-[10px] font-medium text-[var(--fg-muted)]">Bookings</p>
                <MiniCalendar />
              </div>
              <div className="col-span-2 min-h-[108px] rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3">
                <p className="text-[10px] font-medium text-[var(--fg-muted)]">AI assistant</p>
                <div className="mt-2">
                  <MiniAI />
                </div>
              </div>
              <div className="col-span-2 min-h-[92px] rounded-xl border border-[var(--border)] bg-[var(--bg)] p-3">
                <p className="text-[10px] font-medium text-[var(--fg-muted)]">Client management</p>
                <div className="mt-2">
                  <MiniClients />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="mt-5 flex flex-wrap justify-center gap-2 sm:hidden">
        {floatingBadges.map((b, i) => (
          <motion.span
            key={`m-${b.label}`}
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[11px] font-medium text-[var(--fg)] shadow-sm"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
          >
            {b.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
