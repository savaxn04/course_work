import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/register');
  const username = createUsername(7);
  const password = createUsername(7);
  await page.getByText('username').click();
  await page.getByLabel('username').fill(username);
  await page.getByText('password').click();
  await page.getByLabel('password').fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.waitForTimeout(1500);
  let pageURL = await page.url();
  await expect(pageURL).toEqual("http://localhost:3001/login");
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