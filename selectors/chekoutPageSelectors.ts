type CheckoutPageSelectors = {
    firstNameInput: string;
    lastNameInput: string;
    zipCodeInput: string;
    continueButton: string;
    finishButton: string;
    thankYouLable: string;
    backHomeButton: string;
};

const checkoutPageSelectors: CheckoutPageSelectors = {
    firstNameInput: '[data-test="firstName"]',
    lastNameInput: '[data-test="lastName"]',
    zipCodeInput: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',
    thankYouLable: '[data-test="complete-header"]',
    backHomeButton: '[data-test="back-to-products"]',
}
export default checkoutPageSelectors;