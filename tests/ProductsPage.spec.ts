import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 
import mainPageSelectors from "../selectors/mainPageSelectors";

test(`Verify products`,async () => {      

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   await expect(page.locator(mainPageSelectors.productsLabel)).toBeVisible();
}) 