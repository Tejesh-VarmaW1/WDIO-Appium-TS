//@ts-ignore
import { config } from "./wdio.shared.conf.js";

(config.specs = [
  // ToDo: define location for spec files here
  "C:/Cigna/wdio-appium-ts/test/specs/android/filter.spec.ts",
]),
  (config.capabilities = [
    {
      platformName: "Android",
      platformVersion: "12.0",
      deviceName: "Samsung Galaxy S22 Ultra",
      automationName: "UIAutomator2",
      app: "",
    },
  ]);
