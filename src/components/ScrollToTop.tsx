"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

function ChevronUp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M18 15l-6-6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function goTop(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    try {
      window.history.replaceState(null, "", "#top");
    } catch {}
  }

  return (
    <a
      href="#top"
      onClick={goTop}
      className={cn(
        "fixed z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_92%,transparent)] text-[var(--fg)] shadow-[var(--shadow-md)] backdrop-blur-md transition-[opacity,transform,box-shadow,border-color,background-color] duration-300 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-lg)] active:scale-[0.96] bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-[max(1.25rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6",
        visible ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
      aria-label="Back to top"
      title="Back to top"
    >
      <ChevronUp className="h-5 w-5" />
    </a>
  );
}
