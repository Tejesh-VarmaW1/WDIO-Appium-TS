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

  async iosLogin(username: string, password: string) {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginBTN.click();
  }
}

export default new IosLoginScreen();
