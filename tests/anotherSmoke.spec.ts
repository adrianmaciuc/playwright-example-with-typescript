import { test, expect } from "../fixtures/basePage";
import { allure } from "allure-playwright";

test("Test just to pass 6| @e2e", async ({ homePage }) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  await homePage.goto();
  await expect(homePage.page).toHaveURL(
    "https://magento.softwaretestingboard.com/"
  );
});

test("Extra test TO FAIL just for Report 7 | @e2e", async ({ request }) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  const response = await request.get(
    "https://magento.softwaretestingboard.com/"
  );
  expect(response.status()).toEqual(200);
});

test("One more Extra test TO PASS just for Report 8 | @e2e", async ({
  request,
}) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  const response = await request.get(
    "https://magento.softwaretestingboard.com/"
  );
  expect(response.status()).toEqual(200);
});

test("Extra test TO PASS just for Report | @e2e", async ({ request }) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  const response = await request.get(
    "https://magento.softwaretestingboard.com/"
  );
  expect(response.ok).toBeTruthy();
});
