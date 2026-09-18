import { expect, test } from "@playwright/test";

test("landing page loads with hero content", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /build something great/i })
  ).toBeVisible();
  await expect(page.getByText("Try it free")).toBeVisible();
});

test("navigation links jump to their sections", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Pricing" }).click();
  await expect(
    page.getByRole("heading", { name: /simple, transparent pricing/i })
  ).toBeInViewport();

  await page.getByRole("link", { name: "FAQ" }).click();
  await expect(
    page.getByRole("heading", { name: /frequently asked questions/i })
  ).toBeInViewport();
});

test("FAQ accordion toggles open and closed", async ({ page }) => {
  await page.goto("/");
  const firstFaq = page.getByRole("button", {
    name: /how do i get started/i,
  });
  await expect(firstFaq).toHaveAttribute("aria-expanded", "true");

  await firstFaq.click();
  await expect(firstFaq).toHaveAttribute("aria-expanded", "false");

  await firstFaq.click();
  await expect(firstFaq).toHaveAttribute("aria-expanded", "true");
});

test("page renders correctly on a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1, name: /build something great/i })
  ).toBeVisible();

  const horizontalScroll = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth
  );
  expect(horizontalScroll).toBe(false);
});