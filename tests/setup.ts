import { test as setup, expect } from '@playwright/test';
import userCreds from "../playwright/.auth/credentials.json"

const authFile = 'playwright/.auth/users.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill(userCreds.user_name);
  await page.locator('[data-test="password"]').fill(userCreds.password);
  await page.locator('[data-test="login-button"]').click();

  await page.waitForSelector('[data-test="shopping-cart-link"]')


  await page.context().storageState({ path: authFile });
});