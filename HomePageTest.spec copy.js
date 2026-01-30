  const {test, expect} =require('@playwright/test');
  test('Home Page', async ({page}) =>{
    await page.goto('https://www.demoblaze.com/');

      const title=await page.title();
      console.log('title is :'+title)

      await  expect(page).toHaveTitle("STORE");

     const url= page.url();
      console.log('url is :'+url)

      await expect(page).toHaveURL('https://www.demoblaze.com/');
      await page.close();
      })