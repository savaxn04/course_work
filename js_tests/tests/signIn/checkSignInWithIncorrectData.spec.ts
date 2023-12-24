import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByText('username').click();
  await page.getByLabel('username').fill(createUsername(15));
  await page.getByText('password').click();
  await page.getByLabel('password').fill('qweqwe123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  let errorMsg = await page.getByText('User not found');
  await expect(errorMsg).toBeVisible();
});

function createUsername(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}
