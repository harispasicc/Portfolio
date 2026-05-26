import "@testing-library/jest-dom/vitest";
import React from "react";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove("dark");
  document.body.style.overflow = "";
});

vi.mock("next/image", () => ({
  default: function MockImage({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
  }) {
    return React.createElement("img", { src, alt, ...props });
  },
}));

vi.mock("next/link", () => ({
  default: function MockLink({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) {
    return React.createElement("a", { href, ...props }, children);
  },
}));

vi.mock("framer-motion", () => {
  const motion = new Proxy(
    {},
    {
      get(_target, tag: string) {
        return ({
          children,
          ...props
        }: {
          children?: React.ReactNode;
          [key: string]: unknown;
        }) => {
          const domProps = { ...props };
          for (const key of [
            "initial",
            "whileHover",
            "whileTap",
            "whileInView",
            "viewport",
            "transition",
          ]) {
            delete domProps[key];
          }
          return React.createElement(tag, domProps, children);
        };
      },
    },
  );

  return {
    motion,
    useReducedMotion: () => true,
    useMotionValue: () => ({ set: vi.fn(), get: () => 0 }),
    useSpring: (value: unknown) => value,
    useTransform: () => 0,
  };
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, "scrollY", { writable: true, value: 0 });
