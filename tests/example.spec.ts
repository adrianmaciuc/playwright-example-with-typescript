import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage'


test('Buy a product', async ({ page }) => {
  const homePage = new HomePage(page)

  await homePage.goto()
  await homePage.productItem.filter({ hasText : 'Radiant Tee'}).click()

  await expect(page).toHaveTitle(/Radiant Tee/);
});

