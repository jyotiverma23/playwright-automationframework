
// Assertion	Description
// await expect(locator).toBeAttached()	Element is attached
// await expect(locator).toBeChecked()	Checkbox is checked
// await expect(locator).toBeDisabled()	Element is disabled
// await expect(locator).toBeEditable()	Element is editable
// await expect(locator).toBeEmpty()	Container is empty
// await expect(locator).toBeEnabled()	Element is enabled
// await expect(locator).toBeFocused()	Element is focused
// await expect(locator).toBeHidden()	Element is not visible
// await expect(locator).toBeInViewport()	Element intersects viewport
// await expect(locator).toBeVisible()	Element is visible
// await expect(locator).toContainText()	Element contains text
// await expect(locator).toContainClass()	Element has specified CSS classes
// await expect(locator).toHaveAccessibleDescription()	Element has a matching accessible description
// await expect(locator).toHaveAccessibleName()	Element has a matching accessible name
// await expect(locator).toHaveAttribute()	Element has a DOM attribute
// await expect(locator).toHaveClass()	Element has specified CSS class property
// await expect(locator).toHaveCount()	List has exact number of children
// await expect(locator).toHaveCSS()	Element has CSS property
// await expect(locator).toHaveId()	Element has an ID
// await expect(locator).toHaveJSProperty()	Element has a JavaScript property
// await expect(locator).toHaveRole()	Element has a specific ARIA role
// await expect(locator).toHaveScreenshot()	Element has a screenshot
// await expect(locator).toHaveText()	Element matches text
// await expect(locator).toHaveValue()	Input has a value
// await expect(locator).toHaveValues()	Select has options selected
// await expect(locator).toMatchAriaSnapshot()	Element matches the Aria snapshot
// await expect(page).toHaveScreenshot()	Page has a screenshot
// await expect(page).toHaveTitle()	Page has a title
// await expect(page).toHaveURL()	Page has a URL
// await expect(response).toBeOK()	Response has an OK status

const { test, expect } = require('@playwright/test');

test('AssertionsTest', async ({ page }) => {

  // Open URL
  await page.goto('https://demo.nopcommerce.com/register');

  // --- Page Assertions ---
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register');

  // --- Logo visible ---
  await expect(page.locator('img[alt="nopCommerce demo store"]')).toBeVisible();

  // --- Search box enabled ---
  await expect(page.locator('#small-searchterms')).toBeEnabled();

  // --- Newsletter checkbox checked by default ---
  //await expect(page.locator('#Newsletter')).toBeChecked();

  // --- Gender Male radio checked by default ---
  //await expect(page.locator('#gender-male')).toBeChecked();

  // --- Register button attribute check ---
  await expect(page.locator('#register-button'))
        .toHaveAttribute('type', 'submit');

  // --- Page heading text full match ---
  await expect(page.locator('.page-title h1'))
        .toHaveText('Register');

  // --- Page heading partial text ---
  await expect(page.locator('.page-title h1'))
        .toContainText('Reg');

  // --- Input field value assertion ---
  const emailInput = page.locator('#Email');
  await emailInput.fill('test@demo.com');
  await expect(emailInput).toHaveValue('test@demo.com');

});
