import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await page.getByText('sign up!').click();
  let pageURL = await page.url();
  await expect(pageURL).toEqual("http://localhost:3001/register");
});

