"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";

type As = "div" | "section";

type FadeUpProps = Omit<HTMLMotionProps<"div">, "initial" | "whileInView"> & {
  delay?: number;
  y?: number;
  as?: As;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 16,
  as = "div",
  ...rest
}: FadeUpProps) {
  const Motion = as === "section" ? motion.section : motion.div;

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px", amount: 0.12 }}
      transition={{
        duration: 0.5,
        delay,
        ease: EASE_PREMIUM,
      }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
