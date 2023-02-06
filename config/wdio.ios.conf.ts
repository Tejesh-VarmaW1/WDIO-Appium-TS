//@ts-ignore
import { config } from "../wdio.shared.conf.js";

(config.specs = [
  // ToDo: define location for spec files here
  "C:/Cigna/wdio-appium-ts/test/specs/ios/filter.spec.ts",
]),
  (config.capabilities = [
    {
      platformName: "ios",
      platformVersion: "15.0",
      deviceName: "iPhone 13 Mini",
      automationName: "XCUITest",
      app: "bs://f5eedb5a855870ca02bfa47dd89da9644d7f25e8",
    },
  ]);
