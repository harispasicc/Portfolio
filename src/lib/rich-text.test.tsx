import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RichBlurb } from "./rich-text";

describe("RichBlurb", () => {
  it("renders plain text without markers", () => {
    render(<RichBlurb text="Role-based authentication" />);
    expect(screen.getByText("Role-based authentication")).toBeInTheDocument();
  });

  it("emphasizes text wrapped in **", () => {
    render(<RichBlurb text="Uses **JWT httpOnly sessions** and guards." />);
    const emphasis = screen.getByText("JWT httpOnly sessions");
    expect(emphasis.tagName).toBe("SPAN");
    expect(emphasis).toHaveClass("text-[var(--fg-on-dark)]");
    expect(screen.getByText(/Uses/)).toBeInTheDocument();
    expect(screen.getByText(/and guards\./)).toBeInTheDocument();
  });
});
