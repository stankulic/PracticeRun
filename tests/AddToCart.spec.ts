import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 


test(`Verify add to cart flow`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   
   login(page);


   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
   await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
   await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();

   await page.locator('[data-test="shopping-cart-link"]').click();

   await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
   await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
   await expect(page.locator('[data-test="item-5-title-link"]')).toBeVisible();

   await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible();
   await expect(page.locator('[data-test="remove-sauce-labs-bike-light"]')).toBeVisible();
   await expect(page.locator('[data-test="remove-sauce-labs-fleece-jacket"]')).toBeVisible();



   //remove the items
})