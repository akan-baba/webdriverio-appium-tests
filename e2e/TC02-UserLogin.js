import { LoginPage } from "../pages/loginPage";
const userLogin = new LoginPage();

describe("User Login", () => {
  beforeEach(async () => {
    await driver.terminateApp("com.saucelabs.mydemoapp.rn");
    await driver.activateApp("com.saucelabs.mydemoapp.rn");
  });

  it("User login with valid details",async () => {
    await $(userLogin.appSelectors.menuGear).click()
    await $(userLogin.appSelectors.loginLink).click()
    await $(userLogin.appSelectors.userName).setValue('bob@example.com')
    await $(userLogin.appSelectors.passWord).setValue('10203040')
    await $(userLogin.appSelectors.loginButton).click()
    await $(userLogin.appSelectors.cancelPopUp).click()
    await browser.userlogOut()
    
  });

  it('User login with invalid details', async() => {
    await $(userLogin.appSelectors.menuGear).click()
    await $(userLogin.appSelectors.loginLink).click()
    await $(userLogin.appSelectors.userName).setValue('bob@')
    await $(userLogin.appSelectors.passWord).setValue('10203040')
    await $(userLogin.appSelectors.loginButton).click()
    expect ($(userLogin.appSelectors.errorMessage)).toHaveText('Provided credentials do not match any user in this service.')
  });
});
