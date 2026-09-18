import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import Home from "../page";

expect.extend(toHaveNoViolations);

describe("Home page accessibility tests", () => {
  it("has no axe accessibility violations", async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("marks the nav as a semantic landmark", () => {
    const { container } = render(<Home />);
    expect(container.querySelector("nav")).not.toBeNull();
    expect(container.querySelector("footer")).not.toBeNull();
    expect(container.querySelector("section")).not.toBeNull();
  });
});