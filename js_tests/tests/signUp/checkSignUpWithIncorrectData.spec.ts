import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/register');
  await page.getByText('username').click();
  await page.getByLabel('username').fill('qweqwe123');
  await page.getByText('password').click();
  await page.getByLabel('password').fill('qweqwe123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  let errorMsg = await page.getByText('Error while creating new user');
  await expect(errorMsg).toBeVisible();
});