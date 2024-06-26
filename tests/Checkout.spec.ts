import { test, chromium, firefox, expect } from "@playwright/test"; 
import CheckoutData from "../testData/checkoutData.json"
import { login } from '../utilMethods/login'; 
import productsPageSelectors from "../selectors/productsPageSelectors";
import cartPageSelectors from "../selectors/cartPageSelectors";
import checkoutPageSelectors from "../selectors/chekoutPageSelectors";

test(`Verify checkout flow`,async () => { 
   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 
   
   login(page);
   
   //add a product and go to checkout 
   await page.locator(productsPageSelectors.addBikeLightButton).click();
   await page.locator(productsPageSelectors.cartObject).click();
   await page.locator(cartPageSelectors.checkoutButton).click();

   //populate checkout data
   await page.locator(checkoutPageSelectors.firstNameInput).fill(CheckoutData.FirstName);
   await page.locator(checkoutPageSelectors.lastNameInput).fill(CheckoutData.LastName);
   await page.locator(checkoutPageSelectors.zipCodeInput).fill(CheckoutData.ZipCode);

   //finish the checkout
   await page.locator(checkoutPageSelectors.continueButton).click();
   await page.locator(checkoutPageSelectors.finishButton).click();

   //verify label "Thank you for your order!":
   await expect(page.locator(checkoutPageSelectors.thankYouLable)).toBeVisible();
   
   //go back to home page
   await page.locator(checkoutPageSelectors.backHomeButton).click();
}) 