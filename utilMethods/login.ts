import { Page } from '@playwright/test';
import userCreds from "../testData/credentials.json"

export async function login(page: Page) {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill(userCreds.user_name);
    await page.locator('[data-test="password"]').fill(userCreds.password);
    await page.locator('[data-test="login-button"]').click();
}