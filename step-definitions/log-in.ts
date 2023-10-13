import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from '@playwright/test';
import { page } from "../test.setup";

Given("I navigate to the log in page", async function () {
  await page.goto(`https://angular.realworld.io/`);
  await page.getByText('Sign in').click()
  await expect(page).toHaveURL("https://angular.realworld.io/login");
});