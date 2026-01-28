import { test, expect } from '@playwright/test';

test('Load and Verify List Items', async ({ page }) => {
  await page.goto('/');
  await page.locator('button[data-tab="timing"]').click();

  const loadMore = page.getByRole('button', { name: 'Load More Items' });

  for (let i = 0; i < 3; i++) {
    await loadMore.click();
    await page.locator('.animate-spin').first().waitFor({ state: 'hidden' });
  }

  const items = page.locator('[data-testid^="list-item"]');
  await expect(items).toHaveCount(15);

  await expect(items.filter({ hasText: 'active' })).toHaveCountGreaterThan(0);
  await expect(items.filter({ hasText: 'pending' })).toHaveCountGreaterThan(0);
});
