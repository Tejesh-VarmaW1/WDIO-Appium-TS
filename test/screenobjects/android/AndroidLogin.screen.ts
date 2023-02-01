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

  async login(username: String, password: String): Promise<void> {
    await this.usernameField.setValue(username);
    await this.passwordField.setValue(password);
    await this.loginBtn.click();
  }
}

export default new AndroidLoginScreen();
