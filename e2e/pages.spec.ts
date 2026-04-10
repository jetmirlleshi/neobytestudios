import { test, expect } from "@playwright/test";

test.describe("Main pages load correctly", () => {
  test("homepage renders hero section", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/NEOBYTE STUDIOS/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("about page renders", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle(/About/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("divisions page renders all sections", async ({ page }) => {
    await page.goto("/divisions");
    await expect(page).toHaveTitle(/Divisions/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("portfolio page renders", async ({ page }) => {
    await page.goto("/portfolio");
    await expect(page).toHaveTitle(/Portfolio/i);
    await expect(page.locator("main")).toBeVisible();
  });

  test("contact page renders form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page).toHaveTitle(/Contact/i);
    await expect(page.locator("form")).toBeVisible();
  });

  test("division detail pages render", async ({ page }) => {
    const slugs = ["writer", "forge", "games", "vision"];
    for (const slug of slugs) {
      await page.goto(`/divisions/${slug}`);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("legal pages render", async ({ page }) => {
    await page.goto("/legal/privacy");
    await expect(page).toHaveTitle(/Privacy/i);

    await page.goto("/legal/terms");
    await expect(page).toHaveTitle(/Terms/i);
  });
});

test.describe("Navigation", () => {
  test("navbar links navigate correctly", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Divisions" }).first().click();
    await expect(page).toHaveURL(/\/divisions/);
  });

  test("404 page shows for unknown routes", async ({ page }) => {
    const response = await page.goto("/nonexistent-page");
    expect(response?.status()).toBe(404);
  });
});
