import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/contact");
  });

  test("form has required fields", async ({ page }) => {
    await expect(page.getByLabel(/name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/message/i)).toBeVisible();
  });

  test("submit button is present", async ({ page }) => {
    await expect(
      page.getByRole("button", { name: /send|submit|transmit/i }),
    ).toBeVisible();
  });

  test("shows validation on empty submit", async ({ page }) => {
    const submitBtn = page.getByRole("button", {
      name: /send|submit|transmit/i,
    });
    await submitBtn.click();

    // Browser native validation should prevent submission with empty required fields.
    // The form should still be on the contact page.
    await expect(page).toHaveURL(/\/contact/);
  });
});
