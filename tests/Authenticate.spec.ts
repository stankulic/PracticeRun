import { test, chromium, firefox } from "@playwright/test"; 
import { login, loginIncorrectPass } from '../utilMethods/login'; 
import mainPageSelectors from '../selectors/mainPageSelectors'
import loginPageSelectors from "../selectors/loginPageSelectors";


test(`Authenticate`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   login(page);

   //verify the shopping cart exists
   await page.waitForSelector(mainPageSelectors.cartObject);
}) 

test(`Authenticate incorrect password`,async () => { 

   const browser = await chromium.launch({headless:false}); 
   const browserContext = await browser.newContext(); 
   const page = await browserContext.newPage(); 

   loginIncorrectPass(page);

   //verify failed login error message
   await page.waitForSelector(loginPageSelectors.incorrectPassMessage);
}) 