import { test as base } from "@playwright/test";
import { HomePage, ShippingPage, ProductPage } from "../pages";

export const test = base.extend<{
  homePage: HomePage;
  shippingPage: ShippingPage;
  productPage: ProductPage;
}>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  shippingPage: async ({ page }, use) => {
    await use(new ShippingPage(page));
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
  },
});

export { expect } from "@playwright/test";
