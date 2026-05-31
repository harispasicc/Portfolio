import Image from "next/image";
import { urbankey } from "@/data/site";
import { cn } from "@/lib/cn";

type UrbanKeyLogoProps = {
  className?: string;
};

export function UrbanKeyLogo({ className }: UrbanKeyLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg bg-white p-1 shadow-[var(--shadow-sm)] ring-1 ring-[color-mix(in_oklab,var(--border)_60%,transparent)] dark:ring-[color-mix(in_oklab,var(--border-strong)_40%,transparent)]",
        className,
      )}
    >
      <Image
        src={urbankey.logo}
        alt=""
        width={589}
        height={848}
        className="h-9 w-auto sm:h-10"
        priority
      />
    </span>
  );
}
