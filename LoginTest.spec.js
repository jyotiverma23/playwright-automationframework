import { test, expect } from '@playwright/test';

test('QA Dashboard Login Test', async ({ page }) => {

  // Navigate to Login Page
  await page.goto(
    'https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F'
  );

  // Assertions: Page loaded
  await expect(page.locator('text=QA-Dashboard')).toBeVisible();

  // Fill Email
  await page.locator('//input[@id="Input_Email"]').fill('testuser@example.com');

  // Fill Password
  await page.locator('//input[@id="Input_Password"]').fill('Password@123');

  // Check Remember Me
  const rememberMe = page.locator('//input[@id="Input_RememberMe"]');
  await rememberMe.check();
  await expect(rememberMe).toBeChecked();

  // Click Login
  await page.locator('#login-submit').click();

  // Optional wait for demo
  await page.waitForTimeout(3000);
});
