Test Automation Framework 

 Overview
This document provides an in-depth explanation of the test automation framework implemented using Playwright. 
Content:
1. Introduction
2. Framework Structure
3. Test Architecture
4. Setup and Installation
5. Running the tests:


 
 
1. Introduction
The test automation framework is designed to streamline and enhance the testing process for web applications. Cypress is utilized for its powerful capabilities and ease of use. The framework leverages modern design patterns to ensure scalability, maintainability, and reusability of test scripts.

 2. Framework Structure
The framework is structured to separate concerns clearly, ensuring that each component has a single responsibility. The main components of the framework are:
•	tests: Contain the test cases.
•	selectors: Contain the locators for UI elements per an application feature
•	testData: Stores test data in JSON files.
•	utilMethods: Contain the methods that are being reused

 3. Test Architecture
The core components include:
 Test Scripts
Test scripts contain one or more test cases, following the design of the tested application.
 Actions
Actions are reusable functions that interact with the application and are part of Playwright. 
 Selectors
Selectors are centralized in a separate folder, per file, corresponding to an application feature. This ensures locators are easy to maintain. 
 Test Data
Selectors are centralized in a separate folder, per file, corresponding to an application feature in JSON files. This allows for easy modification and expansion of test scenarios.
 
4. Setup and Installation
 Prerequisites:
•	Visual Studio Code
•	Node.js
•	npm
•	Playwright
Installation:
•	Install Visual Studio Code
•	Install npm init playwright@latest (select all default values)
•	npx playwright install

5. Running the tests:
1. Clone the repository:
•	git clone https://github.com/stankulic/task2
2. Running Tests
•	run the tests: npx playwright test
•	run the tests in UI mode: npx playwright test --ui
3. Reports
•	In local: HTML Reporter generates the execution report. The report will be presented automatically if there are errors in the script, otherwise, the report may 
be generated as follows: 
    •	npx playwright show-report
•	In GitHub: Navigate to a run and scroll down, the report is available for download at the bottom of the page.
4. Directory Structure
|-- PLAYWRIGHTPROJECT
    |-- selectors
        |--burgerMenuSelectors.ts
        |--cartPageSelectors.ts
        |--chekoutPageSelectors.ts
        |--loginPageSelectors.ts
        |--productsPageSelectors.ts
    |-- testData
        |--checkoutData.json
        |--credentials.json
    |-- tests
        |--AddToCart.spec.ts
        |--Authenticate.spec.ts
        |--BurgerMenu.spec.ts
        |--Checkout.spec.ts
        |--ProductsPage.spec.ts
    |-- utilMethods
        |--login.ts
        |--logout.ts
    |--package-lock.json
    |--package.json
    |--playwright.config.js
    |--playwright.config.ts
    |--playwright.yml
    |-- README.md 
