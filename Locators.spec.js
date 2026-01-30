
    const {test,expect}=require('@playwright/test')
   //  import {test, expect} from 'playwright';

   test('Locators ',async ({page}) => {
      await page.goto('https://www.demoblaze.com/index.html')
      //click on login button
      // await page.locator('#login2').click()
      await page.click('#login2')
   
     //provide usermane
     await page.locator('#loginusername').fill('akashpal')
     //provide password
      await page.fill('#loginpassword', 'akashpal@123#');

      //click on login button
      await page.locator("button[onclick='logIn()']").click()
      //clicked on logout button
     const constlink = await page.locator('#logout2')
    await expect(constlink).toBeVisible();
    await page.close()

    })