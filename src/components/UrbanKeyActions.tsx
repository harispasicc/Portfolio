"use client";

import { motion } from "framer-motion";
import { urbankey } from "@/data/site";
import { btnPrimarySm, btnProductGrid } from "@/lib/ui";
import { cn } from "@/lib/cn";

const productLinks = [
  { href: urbankey.repo, label: "GitHub", external: true },
  { href: "#urbankey-case-study", label: "Case study", external: false },
] as const;

export function UrbanKeyActions() {
  return (
    <aside
      className="w-full lg:sticky lg:top-[5.5rem] lg:w-[14rem] lg:shrink-0 xl:w-[15rem]"
      aria-label="UrbanKey links"
    >
      <div className="flex flex-col gap-2">
        <motion.a
          href={urbankey.live}
          className={cn(btnPrimarySm, "h-11 w-full justify-center rounded-xl")}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.985 }}
        >
          Live demo
        </motion.a>

        <div className="grid grid-cols-2 gap-2">
          {productLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className={btnProductGrid}
              {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </aside>
  );
}
