import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByText('username').click();
  const inputField = await page.$('#usernameInput');
  if (inputField) {
    const titleAttribute: string | null = await inputField.getAttribute('title');
    if (titleAttribute !== null) {
      expect(titleAttribute).toContain('username should consist only of letters of english alphabet or numbers and can be at most 20 symbols long');
    }
  }
});

