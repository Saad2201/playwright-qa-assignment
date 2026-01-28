import { test, expect } from '@playwright/test';

test('Delayed Button Flow', async ({ page }) => {
  await page.goto('/');

  await page.locator('button[data-tab="timing"]').click();
  await page.getByTestId('start-process').click();

  const confirmButton = page.getByTestId('confirm-button');
  await expect(confirmButton).toBeEnabled();

  await confirmButton.click();
  await expect(page.getByTestId('success-message')).toBeVisible();
});
