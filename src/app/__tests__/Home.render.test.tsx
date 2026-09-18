import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home page render test", () => {
  it("renders the main hero heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { level: 1, name: /build something great/i })
    ).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(<Home />);
    const expectedLinks = ["Features", "Pricing", "FAQ", "Contact"];
    for (const link of expectedLinks) {
      expect(screen.getByRole("link", { name: link })).toBeInTheDocument();
    }
  });

  it("renders the features section with all four cards", () => {
    render(<Home />);
    const cardTitles = ["Fast", "Responsive", "Simple", "Secure"];
    for (const title of cardTitles) {
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    }
  });

  it("renders the pricing plans and footer copyright", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: /pricing/i })).toBeInTheDocument();
    for (const plan of ["Free", "Pro", "Team"]) {
      expect(
        screen.getAllByRole("heading", { name: plan }).length
      ).toBeGreaterThan(0);
    }
    expect(
      screen.getByText(/All rights reserved/i)
    ).toBeInTheDocument();
  });
});