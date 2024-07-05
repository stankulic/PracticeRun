import { expect, Page } from '@playwright/test';
import userCreds from "../testData/credentials.json";
// import loginPage from "../testData/loginPage.json";
// import mainPage from "../testData/mainPage.json";
import loginPageSelectors from '../selectors/loginPageSelectors';
import { env } from 'process';

export async function login(page: Page) {
    console.log("   environment: " + process.env.URL);
    await page.goto(process.env.URL as string);

    // console.log("tiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitleeeeeeeeeeeeeeeeeeeee before: " + await page.title);

    //verify page title before login
    //expect(page).toHaveTitle(loginPage.loginPageTitle);

    await page.locator(loginPageSelectors.userNameInput).fill(userCreds.user_name_standard_user);
    await page.locator(loginPageSelectors.passwordInput).fill(userCreds.correct_password);
    await page.locator(loginPageSelectors.loginButton).click();

    //verify page title after login
    // console.log("tiiiiiiiiiiiiiiiiiiiiiiiiiiiiiitleeeeeeeeeeeeeeeeeeeee after: " + await page.title);
    // expect(page).toHaveTitle(mainPage.mainPageTitle);
}

export async function loginIncorrectPass(page: Page) {
    console.log("   environment: " + process.env.URL);
    await page.goto(process.env.URL as string);

    //verify page title before login
    // expect(page).toHaveTitle(loginPage.loginPageTitle);
    
    await page.locator(loginPageSelectors.userNameInput).fill(userCreds.user_name_standard_user);
    await page.locator(loginPageSelectors.passwordInput).fill(userCreds.incorrect_password);
    await page.locator(loginPageSelectors.loginButton).click();

    //verify page title after login
    // expect(page).toHaveTitle(loginPage.loginPageTitle);
}

export async function loginIncorrectUserName(page: Page) {    
    console.log("   environment: " + process.env.URL);
    await page.goto(process.env.URL as string);
    //verify page title before login
    // expect(page).toHaveTitle(loginPage.loginPageTitle);

    await page.locator(loginPageSelectors.userNameInput).fill(userCreds.incorrect_user_name);
    await page.locator(loginPageSelectors.passwordInput).fill(userCreds.correct_password);
    await page.locator(loginPageSelectors.loginButton).click();

    //verify page title after login
    // expect(page).toHaveTitle(loginPage.loginPageTitle);
}

