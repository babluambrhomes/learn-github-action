import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../page";

describe("Home page interaction tests", () => {
  it("shows the first FAQ answer by default", () => {
    render(<Home />);
    expect(
      screen.getByText(/most people go live in under ten minutes/i)
    ).toBeVisible();
  });

  it("collapses an open FAQ and expands a closed one on click", async () => {
    const user = userEvent.setup();
    render(<Home />);

    const firstButton = screen.getByRole("button", {
      name: /how do i get started/i,
    });
    expect(firstButton).toHaveAttribute("aria-expanded", "true");

    await user.click(firstButton);
    expect(firstButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryByText(/most people go live in under ten minutes/i)
    ).not.toBeInTheDocument();

    const secondButton = screen.getByRole("button", {
      name: /can i cancel anytime/i,
    });
    await user.click(secondButton);
    expect(secondButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByText(/no lock-in, no hidden fees/i)
    ).toBeVisible();
  });

  it("keeps pricing buttons functional (no navigation breakage)", async () => {
    const user = userEvent.setup();
    render(<Home />);
    const choosePro = screen.getByRole("button", { name: /choose pro/i });
    await user.click(choosePro);
    expect(choosePro).toBeInTheDocument();
  });
});