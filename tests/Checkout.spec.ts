import { test, chromium, firefox, expect } from "@playwright/test"; 
import CheckoutData from "../tests/CheckoutData.json"
import userCreds from "../playwright/.auth/credentials.json"

test(`Verify checkout flow`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 
   await page.goto("https://www.saucedemo.com/"); 
   const title = await page.title();       
 
 //
      await page.locator('[data-test="username"]').fill(userCreds.user_name);
      await page.locator('[data-test="password"]').fill(userCreds.password);
      await page.locator('[data-test="login-button"]').click();
   //  

      
 
   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
   await page.locator('[data-test="shopping-cart-link"]').click();
   await page.locator('[data-test="checkout"]').click();

   await page.locator('[data-test="firstName"]').fill(CheckoutData.FirstName);
   await page.locator('[data-test="lastName"]').fill(CheckoutData.LastName);
   await page.locator('[data-test="postalCode"]').fill(CheckoutData.ZipCode);


   await page.locator('[data-test="continue"]').click();
   await page.locator('[data-test="finish"]').click();

   await page.locator('[data-test="pony-express"]').click();
}) 