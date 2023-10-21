import { test, expect } from '../fixtures/basePage'


test('Buy a product | @e2e', async ({ homePage, shippingPage, productPage }) => {

  await homePage.goto()
  await homePage.productItem().nth(0).click()

  await productPage.waitForPageToLoad()
  await productPage.chooseSize('s')
  await productPage.chooseColor('orange')
  await productPage.ADD_TO_CART_BTN().click()
  await expect(productPage.ADD_TO_CART_SUCCESS_MSG()).toBeVisible()

  await productPage.proceedToCheckout()

  await shippingPage.waitForPageToLoad()
  await expect(productPage.ADD_TO_CART_SUCCESS_MSG()).toBeChecked()

});

test('Extra test just for Report 1 | @e2e', async ({ homePage }) => {

  await expect(homePage.productItem().nth(0).isVisible())

});

test('Extra test just for Report 2 | @e2e', async ({ homePage }) => {

  await expect(homePage.productItem().nth(0).isVisible())

});
