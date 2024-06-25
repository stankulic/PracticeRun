import { test, chromium, firefox, expect } from "@playwright/test"; 
import CheckoutData from "../testData/CheckoutData.json"

import { login } from '../utilMethods/login'; 

test(`Verify checkout flow`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   
   login(page);

      
 
   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
   await page.locator('[data-test="shopping-cart-link"]').click();
   await page.locator('[data-test="checkout"]').click();

   await page.locator('[data-test="firstName"]').fill(CheckoutData.FirstName);
   await page.locator('[data-test="lastName"]').fill(CheckoutData.LastName);
   await page.locator('[data-test="postalCode"]').fill(CheckoutData.ZipCode);


   await page.locator('[data-test="continue"]').click();
   await page.locator('[data-test="finish"]').click();

   //verify "Thank you for your order!"
   
   await page.locator('[data-test="pony-express"]').click();
}) 