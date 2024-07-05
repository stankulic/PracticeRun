import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 
import productsPageSelectors from "../selectors/productsPageSelectors";

test(`Verify products`,async () => {      

   const browser = await chromium.launch({headless:true}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   await expect(page.locator(productsPageSelectors.productsLabel)).toBeVisible();

   //selecting one product:
   await page.locator(productsPageSelectors.addBackpackButton).click();
}) 