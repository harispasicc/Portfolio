import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-xs font-medium text-[var(--fg-muted)] shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,color] duration-200 hover:border-[var(--border-strong)] hover:text-[var(--fg)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
