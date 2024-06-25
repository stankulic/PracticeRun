import { test, chromium, firefox, expect } from "@playwright/test"; 

import { login } from '../utilMethods/login'; 

test(`Verify products`,async () => { 

     

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);


   await page.waitForSelector('[data-test="shopping-cart-link"]')
   

   await page.locator('[data-test="item-4-title-link"]').click();

//to do:
   //click add to cart and verify cart


   //do not do this:
   await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();




}) 