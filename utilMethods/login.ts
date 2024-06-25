import { Page } from '@playwright/test';
import userCreds from "../testData/credentials.json"
import loginPageSelectors from '../selectors/loginPageSelectors';

export async function login(page: Page) {
    await page.goto("https://www.saucedemo.com/");
    await page.locator(loginPageSelectors.userNameInput).fill(userCreds.user_name);
    await page.locator(loginPageSelectors.passwordInput).fill(userCreds.password);
    await page.locator(loginPageSelectors.loginButton).click();
}