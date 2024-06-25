import { test, chromium, firefox } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 


test(`Launch the browser`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   //verify the shopping cart exists
   await page.waitForSelector('[data-test="shopping-cart-link"]');



   // const title = await page.title(); 
  
   // console.log("page title eeeeeeeeeeeeeeeeeeeeee" + title);

}) 