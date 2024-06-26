import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login } from '../utilMethods/login'; 
import burgerMenuSelectors from "../selectors/burgerMenuSelectors";
import loginPageSelectors from "../selectors/loginPageSelectors";
import mainPageSelectors from "../selectors/mainPageSelectors";
import { logout } from "../utilMethods/logout";


test(`Verify burger menu`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   //reset app state:
   //open the burger menu:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   //await page.locator(burgerMenuSelectors.resetAppState).click();
   //since Reset App State doesn't make any change on the page, verifying if visible only:
   await expect(page.locator(burgerMenuSelectors.resetAppState)).toBeVisible();
   //close the menu
   await page.getByRole('button', { name: 'Close Menu' }).click();
 
}) 

test(`Verify burger menu - All items`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

     //all items:
   //navigate away from the main page
   await page.locator(mainPageSelectors.cartObject).click();
   //navigate back to all items:
   await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.locator(burgerMenuSelectors.allItems).click();  
   await expect(page.locator(mainPageSelectors.productsLabel)).toBeVisible();
}) 

test(`Verify burger menu - About`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   await page.getByRole('button', { name: 'Open Menu' }).click();
   await page.locator(burgerMenuSelectors.aboutLink).click();
   //there is no typical about page, verifying if the logo is visible
   await expect(page.getByRole('link', { name: 'Saucelabs' })).toBeVisible();
}) 

test(`Verify burger menu - Logout`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);
   await page.getByRole('button', { name: 'Open Menu' }).click();
   logout(page);
   //verifying the login button is visible:
   await expect(page.locator(loginPageSelectors.loginButton)).toBeVisible();
}) 

test(`Verify burger menu - Reset App State`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   await page.getByRole('button', { name: 'Open Menu' }).click();
   //Reset App State doesnt do anything, verifying only if visible
   await expect(page.locator(burgerMenuSelectors.resetAppState)).toBeVisible();

}) 