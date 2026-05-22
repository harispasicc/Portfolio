"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

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
  y = 22,
  as = "div",
  ...rest
}: FadeUpProps) {
  const Motion = as === "section" ? motion.section : motion.div;

  return (
    <Motion
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-72px", amount: 0.15 }}
      transition={{
        duration: 0.52,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      {...rest}
    >
      {children}
    </Motion>
  );
}
