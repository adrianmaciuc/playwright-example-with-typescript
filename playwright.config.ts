import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  // Fail the build on CI if you accidentally left test.only in the source code. 
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI ? "allure-playwright" : "allure-playwright",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    screenshot: "only-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace on failure. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
  },

  projects: [
    {
      name: "Chrome desktop web",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

});
