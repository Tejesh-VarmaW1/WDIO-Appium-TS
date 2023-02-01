//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts";
describe("TS test-1", () => {
  it("Sauce demo login", async () => {
    await AndroidLoginScreen.login("standard_user", "secret_sauce");
  });
});
