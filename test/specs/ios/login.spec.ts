//@ts-ignore
import IosLoginScreen from "../../screenobjects/ios/IosLogin.screen.ts";
describe("TS test-3", () => {
  it("IOS Login test", async () => {
    await IosLoginScreen.iosLogin();
    await driver.pause(5000);
  });
});
