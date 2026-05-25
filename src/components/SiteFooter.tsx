import { CONTENT, SECTION_X } from "@/lib/section";
import { person } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "border-t border-[color-mix(in_oklab,var(--footer-divider)_100%,transparent)] bg-[var(--bg-deep)] py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-center text-sm text-[var(--fg-on-dark-muted)] sm:py-10",
        SECTION_X,
      )}
    >
      <div className={cn(CONTENT)}>
        <p>
          © {year} {person.name}
        </p>
      </div>
    </footer>
  );
}
