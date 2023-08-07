import { test, expect } from '@playwright/test'
import { HomePage, ProductPage, ShippingPage } from '../pages'


test('Buy a product', async ({ page }) => {
  const homePage = new HomePage(page)

  await homePage.goto()

  await homePage.productItem().nth(0).click()

  const productPage = new ProductPage(page)

  await productPage.waitForPageToLoad()
  await productPage.chooseSize('s')
  await productPage.chooseColor('orange')
  
  await productPage.ADD_TO_CART_BTN().click()
  await expect(productPage.ADD_TO_CART_SUCCESS_MSG()).toBeVisible()

  await productPage.proceedToCheckout()

  const shippingPage = new ShippingPage(page)

  await shippingPage.waitForPageToLoad()

});

