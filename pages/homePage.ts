// https://playwright.dev/docs/pom

import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page
    readonly productItem: Locator

    constructor(page: Page) {
        this.page = page
        this.productItem = page.locator('css=.product-item-info')
    }

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }

}