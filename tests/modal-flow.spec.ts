import { test, expect } from '@playwright/test';

test('Modal Confirmation Flow', async ({ page }) => {
  await page.goto('/');
  await page.locator('button[data-tab="responsive"]').click();

  await page.getByTestId('open-modal').click();

  const modal = page.getByTestId('modal-content');
  await expect(modal).toBeVisible();

  await modal.getByTestId('show-nested').click();

  const nestedModal = page.getByTestId('nested-modal-content');
  await expect(nestedModal).toBeVisible();

  await nestedModal.getByRole('button', { name: 'Confirm' }).click();

  await expect(page.getByTestId('modal-content')).toHaveCount(0);
  await expect(page.getByText('confirmed')).toBeVisible();
});
