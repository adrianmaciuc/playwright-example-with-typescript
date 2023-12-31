import { test, expect } from '../fixtures/basePage'


test('Buy a product | @e2e', async ({ homePage }) => {

  await homePage.goto()
  await expect(homePage.page).toHaveURL("https://magento.softwaretestingboard.com/")

});

test('Extra test just for Report 3 | @e2e', async ({ request }) => {

  const response = await request.get('https://magento.softwaretestingboard.com/')
  expect(response.status()).toEqual(202)

});

