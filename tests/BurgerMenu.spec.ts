import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 


test(`Verify burger menu`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

//first go to the cart 

   //open the burger menu:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   //all items:
   await page.locator('[data-test="inventory-sidebar-link"]').click();
//verify page title or
//verify url


   //close the menu
   await page.getByRole('button', { name: 'Close Menu' }).click();
   //about:
   //open the burger menu:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.locator('[data-test="about-sidebar-link"]').click();
   //since there's no aboout webpage, verifying the logo only:
   await expect(page.getByRole('link', { name: 'Saucelabs' })).toBeVisible();
   await page.goBack();



   //reset app state:
   //open the burger menu:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   //await page.locator('[data-test="reset-sidebar-link"]').click();
   await expect(page.locator('[data-test="reset-sidebar-link"]')).toBeVisible();
   //close the menu
   await page.getByRole('button', { name: 'Close Menu' }).click();
   //logut:
   //open the burger menu:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.locator('[data-test="logout-sidebar-link"]').click();
   //verifying the login button is visible:
   await expect(page.locator('[data-test="login-button"]')).toBeVisible();

}) 