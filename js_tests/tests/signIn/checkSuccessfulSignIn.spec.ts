import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/login');
  await page.getByText('username').click();
  await page.getByLabel('username').fill('test123');
  await page.getByText('password').click();
  await page.getByLabel('password').fill('test123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  let pageHeading = await page.getByText('Welcome to to this groupChat');
  await expect(pageHeading).toBeVisible();
});