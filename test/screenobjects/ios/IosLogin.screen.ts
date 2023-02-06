//@ts-ignore
import IosProductsScreen from "./IosProducts.screen.ts";
class IosLoginScreen {
  get usernameField() {
    const usernameArea =
      '**/XCUIElementTypeTextField[`name == "test-Username"`]';
    return $(`-ios class chain:${usernameArea}`);
  }

  get passwordField() {
    const passwordArea = 'name == "test-Password"';
    return $(`-ios predicate string:${passwordArea}`);
  }

  get loginBTN() {
    return $("~test-LOGIN");
  }

  async performLogin() {
    await this.usernameField.setValue("standard_user");
    await this.passwordField.setValue("secret_sauce");
    await this.loginBTN.click();
  }

  async validateLogin():Promise<void>{
    await (await IosProductsScreen.productText).isDisplayed()
  }
}

export default new IosLoginScreen();
