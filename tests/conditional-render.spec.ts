import { test, expect } from '@playwright/test';

test('Conditional Login Flow', async ({ page }) => {
  await page.goto('/');
  await page.locator('button[data-tab="selectors"]').click();

  await page.getByRole('button', { name: 'Admin User' }).click();
  await expect(page.getByText('Admin Panel')).toBeVisible();
  await expect(page.getByText('Standard Panel')).toHaveCount(0);

  await page.getByRole('button', { name: 'Logout' }).click();
  await page.getByRole('button', { name: 'Standard User' }).click();

  await expect(page.getByText('Standard Panel')).toBeVisible();
  await expect(page.getByText('Admin Panel')).toHaveCount(0);
});
