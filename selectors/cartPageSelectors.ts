type CartPageSelectors = {
    removeBackpackButton: string;
    removeBikeLightButton: string;
    removeFleeceJacketButton: string;
    checkoutButton: string;
};

const cartPageSelectors: CartPageSelectors = {
    removeBackpackButton: '[data-test="remove-sauce-labs-backpack"]',
    removeBikeLightButton: '[data-test="remove-sauce-labs-bike-light"]',
    removeFleeceJacketButton: '[data-test="remove-sauce-labs-fleece-jacket"]',
    checkoutButton: '[data-test="checkout"]'
}
export default cartPageSelectors;