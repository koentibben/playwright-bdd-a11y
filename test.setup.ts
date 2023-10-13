import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";

let browser: Browser;
let page: Page;
let context: BrowserContext;

setDefaultTimeout(60000)

// launch the browser
BeforeAll(async function () {
    browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    })
})

// close the browser
AfterAll(async function () {
    await browser.close();
})

// create a new browser context and page per scenario
Before(async function () {
    context = await browser.newContext({permissions: []});
    page = await context.newPage();
})

// cleanup after each scenario
After(async function () {
    await page.close();
    await context.close();
})

export {page, browser} // this page will be used in the step-definitions files