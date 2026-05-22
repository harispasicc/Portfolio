"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { person } from "@/data/site";
import { CONTENT, SECTION_X } from "@/lib/section";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { cn } from "@/lib/cn";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#built-saas", label: "Product" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const talkBtn =
  "inline-flex shrink-0 items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-[background-color,border-color,box-shadow,transform,color] duration-200 active:scale-[0.985]";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-[color-mix(in_oklab,var(--border)_85%,transparent)] bg-[color-mix(in_oklab,var(--surface)_78%,transparent)] shadow-[var(--shadow-header)]"
          : "border-transparent bg-[color-mix(in_oklab,var(--bg)_42%,transparent)] shadow-none"
      }`}
    >
      <div
        className={cn(
          "flex flex-col gap-3 py-3 sm:h-14 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-0",
          CONTENT,
          SECTION_X,
        )}
      >
        <div className="flex min-w-0 items-center justify-between gap-3 sm:min-w-[12rem] sm:max-w-[min(100%,18rem)] sm:flex-initial">
          <Link
            href="#top"
            className="flex min-w-0 items-center gap-2.5 text-sm font-medium tracking-tight text-[var(--fg)] transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/images/haris-profile.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-[color-mix(in_oklab,var(--border)_80%,transparent)]"
              sizes="32px"
              priority
            />
            <span className="min-w-0 truncate">{person.name}</span>
          </Link>
          <div className="flex shrink-0 items-center gap-2 sm:hidden">
            <ThemeToggle />
            <a
              href="#contact"
              className={`${talkBtn} border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] text-[var(--fg)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover-soft)]`}
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
        <nav
          className="-mx-1 flex flex-nowrap items-center gap-x-4 gap-y-2 overflow-x-auto px-1 pb-1 text-sm text-[var(--fg-muted)] [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-1 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0 lg:gap-x-7 xl:gap-x-8 [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative shrink-0 whitespace-nowrap transition-[color,transform] duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-200 hover:text-[var(--fg)] hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <ThemeToggle />
          <a
            href="#contact"
            className={`${talkBtn} border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] text-[var(--fg)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover-soft)]`}
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  );
}
