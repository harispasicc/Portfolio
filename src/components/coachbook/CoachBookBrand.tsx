import { cn } from "@/lib/cn";

type CoachBookWordmarkProps = {
  className?: string;
};

export function CoachBookWordmark({ className }: CoachBookWordmarkProps) {
  return (
    <span className={cn("inline-flex min-w-0 items-baseline whitespace-nowrap", className)}>
      <span className="font-bold tracking-[-0.02em] text-[var(--coachbook-brand-ink)]">
        Coach
      </span>
      <span className="font-bold tracking-[-0.02em] text-[var(--coachbook-brand-teal)]">
        Book
      </span>
    </span>
  );
}
