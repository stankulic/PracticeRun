import { Page } from '@playwright/test';
import burgerMenuSelectors from '../selectors/burgerMenuSelectors';


export async function logout(page: Page) {
    await page.goto("https://www.saucedemo.com/inventory.html");
    //open the burger menu:
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.locator(burgerMenuSelectors.logoutButton).click();
}