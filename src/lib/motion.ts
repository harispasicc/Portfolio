export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

const transitionPremium = {
  duration: 0.48,
  ease: EASE_PREMIUM,
} as const;

export const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.04 } },
} as const;

export const fadeUpItem = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: transitionPremium,
  },
} as const;
