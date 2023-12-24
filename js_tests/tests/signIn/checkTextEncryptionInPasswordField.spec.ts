import { test, expect } from '@playwright/test';

test('Verify that field unencrypt text in password field', async ({ page }) => {
  await page.goto('http://localhost:3001/login');
  const passwordField = await page.$('#passwordInput');
  if (passwordField){
    await passwordField.fill('qweqwe');
    await page.getByRole('button', { name: '👁' }).click();
    const fieldType = await passwordField.getAttribute("type");
    expect(fieldType).toEqual("text")
  }
}); 

test('Verify that field encrypt text in password field', async ({ page }) => {
  await page.goto('http://localhost:3001/login');
  const passwordField = await page.$('#passwordInput');
  if (passwordField){
    const fieldType = await passwordField.getAttribute("type");
    expect(fieldType).toEqual("password")
  }
});