import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { links, person } from "@/data/site";
import Home from "./page";

function renderHome() {
  return render(
    <ThemeProvider>
      <Home />
    </ThemeProvider>,
  );
}

describe("Home page smoke", () => {
  it("renders main sections and profile", () => {
    renderHome();

    expect(screen.getAllByText(person.name).length).toBeGreaterThan(0);
    expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();
  });

  it("exposes primary project and contact links", () => {
    renderHome();

    const liveDemo = screen.getAllByRole("link", { name: /live demo/i })[0];
    expect(liveDemo).toHaveAttribute("href", links.fitbookLive);

    expect(screen.getAllByRole("link", { name: /^github$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /^email$/i })[0]).toHaveAttribute(
      "href",
      links.email,
    );
    expect(screen.getAllByRole("link", { name: /^linkedin$/i })[0]).toHaveAttribute(
      "href",
      links.linkedin,
    );
  });
});
