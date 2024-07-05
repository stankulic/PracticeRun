import { test, chromium, firefox, expect } from "@playwright/test"; 
import { login, loginIncorrectPass, loginIncorrectUserName } from '../utilMethods/login'; 
import mainPageSelectors from '../selectors/productsPageSelectors'
import loginPageSelectors from "../selectors/loginPageSelectors";
import loginPage from '../testData/loginPage.json'

test(`Authenticate`,async () => {
   const browser = await chromium.launch({headless:true}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   //verify the shopping cart exists
   await page.waitForSelector(mainPageSelectors.cartObject);
   await expect(page.locator(mainPageSelectors.cartObject)).toBeVisible();
   
}) 

test(`Authenticate incorrect password`,async () => {
   const browser = await chromium.launch({headless:true}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   loginIncorrectPass(page);

   //verify failed login error message
   await page.waitForSelector(loginPageSelectors.incorrectPassMessage);

   await expect(page.locator(loginPageSelectors.incorrectPassMessage)).toContainText(loginPage.incorrect_password_or_username_message);
}) 

test(`Authenticate incorrect user name`,async () => {
   const browser = await chromium.launch({headless:true}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   loginIncorrectUserName(page);

   //verify failed login error message
   await page.waitForSelector(loginPageSelectors.incorrectPassMessage);
   await expect(page.locator(loginPageSelectors.incorrectPassMessage)).toContainText(loginPage.incorrect_password_or_username_message);
}) 