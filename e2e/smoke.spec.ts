import { test, expect } from "@playwright/test";

test("public pages load and booking goes through phone or WhatsApp", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("улыбка");
  await expect(page.getByText("Стоматология доктора Евстигнеева").first()).toBeVisible();
  await expect(page.locator('a[href="tel:+79258075807"]').first()).toBeVisible();
  await expect(page.locator('a[href="https://wa.me/79258075807"]').first()).toBeVisible();
  await expect(page.locator('a[href*="/booking"], a[href*="/cabinet"]')).toHaveCount(0);

  await page.goto("/services/");
  await expect(page.getByText("Лечение кариеса", { exact: true })).toBeVisible();

  await page.goto("/doctors/");
  await expect(page.getByRole("heading", { name: /Дмитрий Юрьевич/ })).toBeVisible();

  await page.goto("/contacts/");
  await expect(page.getByText(/ИНН/).first()).toBeVisible();
});
