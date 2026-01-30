//import { expect } from "@playwright/test";
   const {test, expect} =require('@playwright/test');
   test('LocateMultipleElemments', async ({page})=>{
   await page.goto('https://www.demoblaze.com/index.html')

//    //locate multiple elements
//   const links = await page.$$('a');
// for (const link of links) {
//   const linktext = await link.textContent();
//   console.log(linktext)
//     }
await page.waitForSelector('//div[@id=\'tbodyid\']//h4')

const multipleelements = await page.$$('//div[@id=\'tbodyid\']//h4');
  for(const element of multipleelements){
    const elementtext = await element.textContent();
    console.log(elementtext);


  }
})