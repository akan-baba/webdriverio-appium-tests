import { ProductPage } from "../pages/productPage";
import { faker } from "@faker-js/faker";
const products = new ProductPage();
const fullName = faker.person.fullName();
const city = faker.address.city()

describe("Shopping Basket", () => {
  beforeEach(async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
    await browser.bsCleanup()
    await browser.userlogIn()
  });

  it("T-Shirt", async () => {
    
    (await $$(products.appSelectors.products))[0].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.shoppingCart).click();
    await $(products.appSelectors.checkOutButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.addressField).setValue('Moss Grange')
    await $(products.appSelectors.cityField).setValue(city)
    await $(products.appSelectors.zipCodeField).setValue('89750')
    await $(products.appSelectors.countryField).setValue('UK')
    await $(products.appSelectors.paymentButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.CardNumberField).setValue('3258 1265 7568 789')
    await $(products.appSelectors.dateField).setValue('03/35')
    await $(products.appSelectors.codeField).setValue('257')
    await $(products.appSelectors.reviewOrderButton).click()
    await $(products.appSelectors.placeOrderButton).click()
    await expect($(products.appSelectors.orderCompleteMessage)).toHaveText('Checkout Complete')

    await browser.userlogOut()


  });

  it('Onis Jacket', async () => {
    (await $$(products.appSelectors.products))[1].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.shoppingCart).click();
    await $(products.appSelectors.checkOutButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.addressField).setValue('Moss Grange')
    await $(products.appSelectors.cityField).setValue(city)
    await $(products.appSelectors.zipCodeField).setValue('89750')
    await $(products.appSelectors.countryField).setValue('UK')
    await $(products.appSelectors.paymentButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.CardNumberField).setValue('3258 1265 7568 789')
    await $(products.appSelectors.dateField).setValue('03/35')
    await $(products.appSelectors.codeField).setValue('257')
    await $(products.appSelectors.reviewOrderButton).click()
    await $(products.appSelectors.placeOrderButton).click()
    await expect($(products.appSelectors.orderCompleteMessage)).toHaveText('Checkout Complete')

    await browser.userlogOut()
  });

  it('Fleece Jacket', async() => {
    (await $$(products.appSelectors.products))[2].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.shoppingCart).click();
    await $(products.appSelectors.checkOutButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.addressField).setValue('Moss Grange')
    await $(products.appSelectors.cityField).setValue(city)
    await $(products.appSelectors.zipCodeField).setValue('89750')
    await $(products.appSelectors.countryField).setValue('UK')
    await $(products.appSelectors.paymentButton).click()
    await $(products.appSelectors.firstNameField).setValue('joe')
    await $(products.appSelectors.CardNumberField).setValue('3258 1265 7568 789')
    await $(products.appSelectors.dateField).setValue('03/35')
    await $(products.appSelectors.codeField).setValue('257')
    await $(products.appSelectors.reviewOrderButton).click()
    await $(products.appSelectors.placeOrderButton).click()
    await expect($(products.appSelectors.orderCompleteMessage)).toHaveText('Checkout Complete')

    await browser.userlogOut()
  });

  it('Bolt T-shirt', async() => {
    (await $$(products.appSelectors.products))[3].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.shoppingCart).click();
    await $(products.appSelectors.checkOutButton).click()
    await $(products.appSelectors.firstNameField).setValue(fullName)
    await $(products.appSelectors.addressField).setValue('Moss Grange')
    await $(products.appSelectors.cityField).setValue(city)
    await $(products.appSelectors.zipCodeField).setValue('89750')
    await $(products.appSelectors.countryField).setValue('UK')
    await $(products.appSelectors.paymentButton).click()
    await $(products.appSelectors.firstNameField).setValue('joe')
    await $(products.appSelectors.CardNumberField).setValue('3258 1265 7568 789')
    await $(products.appSelectors.dateField).setValue('03/35')
    await $(products.appSelectors.codeField).setValue('257')
    await $(products.appSelectors.reviewOrderButton).click()
    await $(products.appSelectors.placeOrderButton).click()
    await expect($(products.appSelectors.orderCompleteMessage)).toHaveText('Checkout Complete')

    await browser.userlogOut()
  });

});
