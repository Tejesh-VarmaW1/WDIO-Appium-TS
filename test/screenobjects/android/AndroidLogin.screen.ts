//@ts-ignore
import AndroidProductsScreen from "./AndroidProducts.screen.ts";
class AndroidLoginScreen {
  get usernameField() {
    return $("~test-Username");
  }

  get passwordField() {
    return $("~test-Password");
  }

  get loginBtn() {
    return $("~test-LOGIN");
  }

  get errorMsg(){
    return $("//*[@text=\"Username and password do not match any user in this service.\"]")
  }
  async performLogin(): Promise<void> {
    await this.usernameField.setValue("stand_user");
    await this.passwordField.setValue("secret");
    await this.loginBtn.click();
  }

  async validateLogin():Promise<void>{
    await AndroidProductsScreen.productsText.isDisplayed()
    console.log("successfully validated")
  }

  async validateInvalidLogin():Promise<void>{
    await (await this.errorMsg).isDisplayed()
    console.log("Login failed") 
  }
}

export default new AndroidLoginScreen();
