import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('akashpal');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('akashpal@123#');
  await page.getByRole('button', { name: 'Log in' }).click();
});