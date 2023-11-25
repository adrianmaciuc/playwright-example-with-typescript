import { test, expect } from "../fixtures/basePage";
import { allure } from "allure-playwright";

test("Buy a product | @e2e", async ({
  homePage,
  shippingPage,
  productPage,
}) => {
  allure.suite("Accounts suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");
  await homePage.goto();
  await homePage.productItem().nth(0).click();

  await productPage.waitForPageToLoad();
  await productPage.chooseSize("s");
  await productPage.chooseColor("orange");
  await productPage.ADD_TO_CART_BTN().click();
  await expect(productPage.ADD_TO_CART_SUCCESS_MSG()).toBeFalsy();

  // await productPage.proceedToCheckout()

  // await shippingPage.waitForPageToLoad()
});

test("Extra test TO FAIL just for Report 1 | @e2e", async ({ homePage }) => {
  allure.suite("Accounts suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  await homePage.goto();
  await expect(homePage.productItem().nth(0).isVisible()).toBeFalsy();
});

test("Extra test just for Report 2 | @e2e", async ({ homePage }) => {
  allure.suite("Accounts suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  await expect(homePage.productItem().nth(0).isVisible()).toBeTruthy();
});
