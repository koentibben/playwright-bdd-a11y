import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "../test.setup";
import AxeBuilder from '@axe-core/playwright'; 

Given('I perform a basic a11y test on {string} and log the results to the console', async function (url) {
  await page.goto(url);
  try {
        const results = await new AxeBuilder({ page }).analyze();
        console.log(results);
    } catch (e) {
        // do something with the error
    }
});

Then("I perform a a11y test using selector {string} on page {string}", async function (selector, url) {
    await page.goto(url);
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include(selector)
        .analyze();
    console.log(accessibilityScanResults);
})