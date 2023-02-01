//@ts-ignore
import IosLoginScreen from "../../screenobjects/ios/IosLogin.screen.ts";
describe("TS test-3", () => {
  it("IOS Login test", async () => {
    await IosLoginScreen.iosLogin("standard_user", "secret_sauce");
    await driver.pause(5000);
  });
});
