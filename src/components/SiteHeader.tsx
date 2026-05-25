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
] as const;

const talkBtn =
  "inline-flex shrink-0 items-center justify-center rounded-full border px-3 py-1.5 text-sm font-medium transition-[background-color,border-color,box-shadow,transform,color] duration-200 active:scale-[0.985]";

const navLinkClass =
  "relative transition-[color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[var(--accent)] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--fg)] hover:after:scale-x-100";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = () => setMenuOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-[color-mix(in_oklab,var(--fg)_14%,transparent)] backdrop-blur-[2px] md:hidden"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <header
        className={cn(
          "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-[color-mix(in_oklab,var(--border)_85%,transparent)] bg-[color-mix(in_oklab,var(--surface)_78%,transparent)] shadow-[var(--shadow-header)]"
            : "border-transparent bg-[color-mix(in_oklab,var(--bg)_42%,transparent)] shadow-none",
        )}
      >
        <div
          className={cn(
            "flex h-[3.25rem] min-w-0 items-center justify-between gap-3 pt-[max(0.625rem,env(safe-area-inset-top))]",
            CONTENT,
            SECTION_X,
          )}
        >
          <Link
            href="#top"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2.5 text-sm font-medium tracking-tight text-[var(--fg)] transition-opacity duration-200 hover:opacity-80"
          >
            <Image
              src="/images/haris-profile.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-[color-mix(in_oklab,var(--border)_80%,transparent)]"
              sizes="32px"
              loading="eager"
              fetchPriority="high"
            />
            <span className="min-w-0 truncate">{person.name}</span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1 px-2 text-sm text-[var(--fg-muted)] md:flex lg:gap-x-7 xl:gap-x-8 2xl:gap-x-10"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(navLinkClass, "shrink-0 whitespace-nowrap")}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            <a
              href="#contact"
              className={cn(
                talkBtn,
                "hidden border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_90%,transparent)] text-[var(--fg)] hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-hover-soft)] md:inline-flex",
              )}
            >
              Let&apos;s talk
            </a>

            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_88%,transparent)] text-[var(--fg)] shadow-[var(--shadow-sm)] transition-[border-color,background-color] duration-200 hover:border-[var(--border-strong)] active:scale-[0.96] md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
          aria-hidden={!menuOpen}
        >
          <div className="overflow-hidden">
            <div
              className={cn(
                "border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--surface)_94%,var(--bg))] pb-4 backdrop-blur-xl",
                SECTION_X,
              )}
            >
              <div className={cn(CONTENT, "pt-3")}>
                <nav className="flex flex-col gap-0.5" aria-label="Mobile">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[var(--fg-muted)] transition-[background-color,color] duration-200 hover:bg-[color-mix(in_oklab,var(--bg-subtle)_80%,transparent)] hover:text-[var(--fg)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className={cn(
                    talkBtn,
                    "mt-3 w-full justify-center border-transparent bg-[var(--accent)] text-white shadow-[var(--shadow-sm)] hover:brightness-[1.03]",
                  )}
                >
                  Let&apos;s talk
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
