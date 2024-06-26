import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 
import mainPageSelectors from "../selectors/mainPageSelectors";
import cartPageSelectors from "../selectors/cartPageSelectors";


test(`Verify add to cart flow`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 
   
   login(page);

   //add 3 items to cart
   await page.locator(mainPageSelectors.addBackpackButton).click();
   await page.locator(mainPageSelectors.addBikeLightButton).click();
   await page.locator(mainPageSelectors.addFleeceJacketButton).click();

   //navigate to cart
   await page.locator(mainPageSelectors.cartObject).click();

   //remove the items from the cart
   await page.locator(cartPageSelectors.removeBackpackButton).click();
   await page.locator(cartPageSelectors.removeBikeLightButton).click();
   await page.locator(cartPageSelectors.removeFleeceJacketButton).click();
})