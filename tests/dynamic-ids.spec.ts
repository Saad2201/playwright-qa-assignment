import { test, expect } from '@playwright/test';

test('Dynamic ID Handling', async ({ page }) => {
  await page.goto('/');
  await page.locator('button[data-tab="selectors"]').click();

  await page.getByRole('button', { name: 'Regenerate All IDs' }).click();

  const betaItem = page.locator('button', { hasText: 'Beta' });
  await betaItem.click();

  await expect(page.getByText('Selected: Beta')).toBeVisible();
});
