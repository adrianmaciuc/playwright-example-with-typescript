// https://playwright.dev/docs/pom

import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page
    // readonly productItem: Locator
    
    constructor(page: Page) {
        this.page = page
    }

    productItem = () => this.page.locator('.product-item-info')

    async goto() {
        await this.page.goto('https://magento.softwaretestingboard.com/');
    }
}