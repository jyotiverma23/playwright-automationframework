const { test, expect } = require('@playwright/test');

test('SoftAssertionsTest', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');

    await page.waitForTimeout(2000); // ✅ await added

    // ---------- Hard Assertions ----------

    // Page title (CORRECT usage)
    await expect(page).toHaveTitle('STORE');

    // URL check
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    // Element visibility
    const brand = page.locator('.navbar-brand');
    await expect(brand).toBeVisible();

    // ---------- Soft Assertions ----------
    // These will continue even if one fails

    await expect.soft(page).toHaveTitle('STORE123'); // intentionally wrong
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect.soft(brand).toBeVisible();

});
