import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3001/');
  await page.getByText('password').click();
  const passwordField = await page.$('#passwordInput');
  if (passwordField) {
    const titleAttribute: string | null = await passwordField.getAttribute('title');
    if (titleAttribute !== null) {
      expect(titleAttribute).toContain('password should consist only of letters of english alphabet or numbers and must be at least 6 symbols long');
    }
  }
});

