import { test, expect } from "../fixtures/basePage";
import { allure } from "allure-playwright";

test("Test just to pass | @e2e", async ({ homePage }) => {
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

test("Extra test TO FAIL just for Report 3 | @e2e", async ({ request }) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  const response = await request.get(
    "https://magento.softwaretestingboard.com/"
  );
  expect(response.status()).toEqual(201);
});

test("One more Extra test TO FAIL just for Report 5 | @e2e", async ({
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
  expect(response.status()).toEqual(203);
});

test("Extra test TO FAIL just for Report 4 | @e2e", async ({ request }) => {
  allure.suite("Smoke suite");
  allure.owner("Adrian Maciuc");
  allure.tags("Smoke", "Regression");
  allure.issue("JIRA-123 link", "https://www.google.com");
  allure.parameter("username", "<process.env.username type of injection>");

  const response = await request.get(
    "https://magento.softwaretestingboard.com/"
  );
  expect(response.ok).toBeFalsy();
});
