type MainPageSelectors = {
    cartObject: string;
    addBackpackButton: string;
    addBikeLightButton: string;
    addFleeceJacketButton: string;
    productsLabel: string;
};

const mainPageSelectors: MainPageSelectors = {
    cartObject: '[data-test="shopping-cart-link"]',
    addBackpackButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    addBikeLightButton: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    addFleeceJacketButton: '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    productsLabel: '[data-test="title"]'
}
export default mainPageSelectors;