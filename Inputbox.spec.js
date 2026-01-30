 const {test,expect}=require('@playwright/test')
test('',async ({page})=>{


  await page.goto('https://qa-dashboard.azurewebsites.net/Identity/Account/Login?ReturnUrl=%2F')
  const emailInput= page.locator('//input[@id="Input_Email"]')

  await expect(emailInput).toBeVisible()
    await expect(emailInput).toBeEnabled()
    await expect(emailInput).toBeEditable() 
  console.log('Email input is empty:', await emailInput.inputValue())
  



    await page.waitForTimeout(3000)
   await emailInput.fill('akashpal.qa.tester123@gmail.com')
   


})