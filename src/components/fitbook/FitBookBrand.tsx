import { cn } from "@/lib/cn";

type FitBookWordmarkProps = {
  className?: string;
};

export function FitBookWordmark({ className }: FitBookWordmarkProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-baseline whitespace-nowrap", className)}>
      <span className="font-bold tracking-[-0.02em] text-[var(--fitbook-brand-ink)]">
        FitBook
      </span>{" "}
      <span className="font-bold tracking-[-0.02em] text-[var(--fitbook-brand-teal)]">
        AI
      </span>
    </span>
  );
}
