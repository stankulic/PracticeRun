type LoginPageSelectors = {
    userNameInput: string;
    passwordInput: string;
    loginButton: string;
    incorrectPassMessage: string;
};

const loginPageSelectors: LoginPageSelectors = {
    userNameInput: '[data-test="username"]',
    passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    incorrectPassMessage: '[data-test="error"]'
}
export default loginPageSelectors;
