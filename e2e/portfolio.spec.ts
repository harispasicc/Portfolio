import { expect, test } from "@playwright/test";

test.describe("portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
  });

  test("toggles dark theme on html", async ({ page }) => {
    const toggle = page.getByRole("button", { name: /switch to dark mode/i });
    await expect(toggle).toBeVisible();

    await toggle.click();
    await expect
      .poll(() => page.locator("html").evaluate((el) => el.classList.contains("dark")))
      .toBe(true);

    await page.getByRole("button", { name: /switch to light mode/i }).click();
    await expect
      .poll(() => page.locator("html").evaluate((el) => el.classList.contains("dark")))
      .toBe(false);
  });

  test("mobile menu opens and closes with Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    const menuBtn = page.locator('button[aria-controls="mobile-nav"]');
    await menuBtn.click();
    await expect(menuBtn).toHaveAttribute("aria-expanded", "true");
    await expect(menuBtn).toHaveAccessibleName(/close menu/i);

    const mobileNav = page.locator("#mobile-nav");
    await expect(mobileNav).not.toHaveAttribute("aria-hidden", "true");
    await expect(mobileNav.getByRole("link", { name: "Contact" })).toBeAttached();

    await page.keyboard.press("Escape");
    await expect(menuBtn).toHaveAttribute("aria-expanded", "false");
    await expect(menuBtn).toHaveAccessibleName(/open menu/i);
  });

  test("exposes FitBook live demo and GitHub links", async ({ page }) => {
    const liveDemo = page.getByRole("link", { name: /live demo/i }).first();
    await expect(liveDemo).toHaveAttribute("href", /fitbook-ai-e2gi\.vercel\.app/);
    await expect(liveDemo).toHaveAttribute("target", "_blank");

    const github = page.getByRole("link", { name: /^github$/i }).first();
    await expect(github).toHaveAttribute("href", /github\.com\/harispasicc/);
  });

  test("contact section is reachable", async ({ page }, testInfo) => {
    const isMobileProject = testInfo.project.name === "mobile-chrome";

    if (isMobileProject) {
      await page.goto("/#contact");
    } else {
      await page
        .getByRole("navigation", { name: "Primary" })
        .getByRole("link", { name: "Contact" })
        .click();
    }

    await expect(page.locator("#contact")).toBeInViewport();
    await expect(page.getByRole("link", { name: "Email", exact: true }).first()).toHaveAttribute(
      "href",
      /^mailto:/,
    );
  });
});
