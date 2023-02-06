//@ts-ignore
import { config } from "../wdio.shared.conf.ts";
(config.specs = [
  // ToDo: define location for spec files here
  "C:/Cigna/wdio-appium-ts/test/specs/android/login.spec.ts",
]),
  (config.capabilities = [
    {
      platformName: "Android",
      platformVersion: "12.0",
      deviceName: "Samsung Galaxy S22 Ultra",
      automationName: "UIAutomator2",
      app: "bs://9d285332cc5538647db53773150699d5b2f1a47b",
    },
  ]);

  // const _config = config;
  // export { _config as config}

  exports.config = config
