import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "../page";

describe("Home page snapshot test", () => {
  it("matches the stored snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it("keeps the same section count and order", () => {
    const { container } = render(<Home />);
    const ids = Array.from(container.querySelectorAll("section[id]")).map(
      (s) => s.id
    );
    expect(ids).toEqual(["features", "pricing", "faq", "contact"]);
  });
});