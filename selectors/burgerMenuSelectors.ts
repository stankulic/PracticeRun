type BurgerMenuSelectors = {
     logoutButton: string;
     aboutLink: string;
     resetAppState: string;
     allItems: string;
};

const burgerMenuSelectors: BurgerMenuSelectors = {
    logoutButton: '[data-test="logout-sidebar-link"]',
    aboutLink: '[data-test="about-sidebar-link"]',
    resetAppState: '[data-test="reset-sidebar-link"]',
    allItems: '[data-test="inventory-sidebar-link"]',
}
export default burgerMenuSelectors;