import { type Locator, type Page, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page
    readonly SIZE_S: Locator
    readonly SIZE_M: Locator
    readonly ADD_TO_CART_BTN: Locator
    readonly ADD_TO_CART_SUCCESS_MSG: Locator
    readonly MINI_CART_COUNTER: Locator
    readonly MINI_CART: Locator
    readonly CHECKOUT_BTN: Locator
    readonly COLOR_ORANGE: Locator
    readonly COLOR_BLUE: Locator

    constructor(page: Page) {
        this.page = page
        this.SIZE_S = page.locator('#option-label-size-143-item-167')
        this.SIZE_M = page.locator('#option-label-size-143-item-168')
        this.ADD_TO_CART_BTN = page.locator('#product-addtocart-button')
        this.ADD_TO_CART_SUCCESS_MSG = page.locator('[data-ui-id="message-success"]')
        this.MINI_CART_COUNTER = page.locator('[data-block="minicart"] .counter .counter-number')
        this.MINI_CART = page.locator('[data-block="minicart"]')
        this.CHECKOUT_BTN = page.locator('#top-cart-btn-checkout')
        this.COLOR_ORANGE = page.locator('[id="option-label-color-93-item-56"]')
        this.COLOR_BLUE = page.locator('#option-label-color-93-item-50')
    }

    async waitForPageToLoad() {
        await expect(this.SIZE_S).toBeVisible()
    }

    async chooseSize(size: string) {
        switch(size.toLowerCase()) {
            case ('s') : 
                await this.SIZE_S.click()
                break
            case ('m') : 
                await this.SIZE_M.click()
                break
            default:
                throw new Error("Test failed due to wrong or no size provided for product item")
        }
    }

    async chooseColor(color: string) {
        switch(color.toLowerCase()) {
            case ('orange') : 
                await this.COLOR_ORANGE.click()
                break
            case ('blue') : 
                await this.COLOR_BLUE.click()
                break
            default:
                throw new Error("Test failed due to wrong or no color provided for product item")
        }
    }

    async proceedToCheckout() {
        await this.MINI_CART.click()
        await this.CHECKOUT_BTN.click()
    }
}