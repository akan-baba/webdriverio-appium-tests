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
    await browser.scrollDown()
  });

  it("Labs Bike Light", async () => {
    
    (await $$(products.appSelectors.products))[4].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.minusIcon).click()
    for (let i = 0; i < 1; i++) {
      await $(products.appSelectors.plusButton).doubleClick();
      await browser.pause(300); // Small delay between clicks
    }
    
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

  it('Backpack', async () => {
    (await $$(products.appSelectors.products))[5].click();
    await $(products.appSelectors.addToCartButton).click();
    await $(products.appSelectors.minusIcon).click()
    for (let i = 0; i < 5; i++) {
      await $(products.appSelectors.plusButton).doubleClick();
      await browser.pause(300); // Small delay between clicks
    }
    
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


});
