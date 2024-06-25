import { test, chromium, firefox, expect } from "@playwright/test"; 
import userCreds from "../playwright/.auth/credentials.json"

test(`Verify products`,async () => { 

     

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

   await page.waitForSelector('[data-test="shopping-cart-link"]')
   

   await page.locator('[data-test="item-4-title-link"]').click();


   await expect(page.locator('[data-test="add-to-cart"]')).toBeVisible();

}) 