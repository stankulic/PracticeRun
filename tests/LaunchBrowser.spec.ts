import { test, chromium, firefox } from "@playwright/test"; 
import userCreds from "../playwright/.auth/credentials.json"

test(`Launch the browser`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 
   await page.goto("https://www.saucedemo.com/"); 
// 
   await page.locator('[data-test="username"]').fill(userCreds.user_name);
   await page.locator('[data-test="password"]').fill(userCreds.password);
   await page.locator('[data-test="login-button"]').click();
// 

   await page.waitForSelector('[data-test="shopping-cart-link"]')
   const title = await page.title(); 
   console.log("Verifing products:");   



}) 