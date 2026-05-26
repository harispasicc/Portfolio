import { describe, expect, it, beforeEach } from "vitest";
import {
  THEME_BOOTSTRAP_SCRIPT,
  THEME_STORAGE_KEY,
  applyThemeClass,
  getStoredTheme,
} from "./theme";

describe("theme", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });

  describe("getStoredTheme", () => {
    it("returns null when nothing is stored", () => {
      expect(getStoredTheme()).toBeNull();
    });

    it("returns dark when localStorage has dark", () => {
      localStorage.setItem(THEME_STORAGE_KEY, "dark");
      expect(getStoredTheme()).toBe("dark");
    });

    it("returns light when localStorage has light", () => {
      localStorage.setItem(THEME_STORAGE_KEY, "light");
      expect(getStoredTheme()).toBe("light");
    });

    it("returns null for invalid values", () => {
      localStorage.setItem(THEME_STORAGE_KEY, "sepia");
      expect(getStoredTheme()).toBeNull();
    });
  });

  describe("applyThemeClass", () => {
    it("adds dark class for dark mode", () => {
      applyThemeClass("dark");
      expect(document.documentElement.classList.contains("dark")).toBe(true);
    });

    it("removes dark class for light mode", () => {
      document.documentElement.classList.add("dark");
      applyThemeClass("light");
      expect(document.documentElement.classList.contains("dark")).toBe(false);
    });
  });

  it("bootstrap script references storage key", () => {
    expect(THEME_BOOTSTRAP_SCRIPT).toContain(THEME_STORAGE_KEY);
  });
});
