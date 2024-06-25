

type LoginPageSelectors = {
    userNameInput: string;
    passwordInput: string;
    loginButton: string;
};

    const loginPageSelectors: LoginPageSelectors = {
            userNameInput: '[data-test="username"]',
            passwordInput: '[data-test="password"]',
            loginButton: '[data-test="login-button"]'

    }
    export default loginPageSelectors;
