import { Page, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  SIZE_S = () => this.page.locator("#option-label-size-143-item-167");
  SIZE_M = () => this.page.locator("#option-label-size-143-item-168");
  ADD_TO_CART_BTN = () => this.page.locator("#product-addtocart-button");
  ADD_TO_CART_SUCCESS_MSG = () =>
    this.page.locator('[data-ui-id="message-success"]');
  MINI_CART_COUNTER = () =>
    this.page.locator('[data-block="minicart"] .counter .counter-number');
  MINI_CART = () => this.page.locator('[data-block="minicart"]');
  CHECKOUT_BTN = () => this.page.locator("#top-cart-btn-checkout");
  COLOR_ORANGE = () =>
    this.page.locator('[id="option-label-color-93-item-56"]');
  COLOR_BLUE = () => this.page.locator("#option-label-color-93-item-50");

  // Alternative locators
  // SIZE_S = () => this.page.getByLabel('S', { exact: true })
  // COLOR_ORANGE = () => this.page.getByLabel('Orange')
  // ADD_TO_CART_BTN = () => this.page.getByRole('button', { name: 'Add to Cart' })

  async waitForPageToLoad() {
    await expect(this.SIZE_S()).toBeVisible();
  }

  async chooseSize(size: string) {
    switch (size.toLowerCase()) {
      case "s":
        await this.SIZE_S().click();
        break;
      case "m":
        await this.SIZE_M().click();
        break;
      default:
        throw new Error(
          "Test failed due to wrong or no size provided for product item"
        );
    }
  }

  async chooseColor(color: string) {
    switch (color.toLowerCase()) {
      case "orange":
        await this.COLOR_ORANGE().click();
        break;
      case "blue":
        await this.COLOR_BLUE().click();
        break;
      default:
        throw new Error(
          "Test failed due to wrong or no color provided for product item"
        );
    }
  }

  async proceedToCheckout() {
    await this.MINI_CART().click();
    await this.CHECKOUT_BTN().click();
  }
}
