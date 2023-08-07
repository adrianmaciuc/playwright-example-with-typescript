import { Page, expect } from '@playwright/test';

export class ShippingPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    SHIP_METHOD_5 = () => this.page.locator('input.radio')
    NEXT_BTN = () => this.page.locator('[data-role="opc-continue"]')
    COUNTRY_VALUE = () => this.page.locator('[name="country_id"]')
    STATE_VALUE = () => this.page.locator('[name="shippingAddress.region_id"] > div > select')

    async waitForPageToLoad() {
        await this.page.waitForURL('**/checkout/#shipping')
        await expect(this.SHIP_METHOD_5().first()).toBeVisible()
    }

   
}