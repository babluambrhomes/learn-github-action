import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import Hello from "./hello";

describe("Hello", () => {
  it("renders the name in the heading", () => {
    render(<Hello name="OpenCode" />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello, OpenCode!",
    );
  });

  it("increments the counter when the button is clicked", async () => {
    const user = userEvent.setup();
    render(<Hello name="OpenCode" />);
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 0");

    await user.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByTestId("count")).toHaveTextContent("Count: 1");
  });
});