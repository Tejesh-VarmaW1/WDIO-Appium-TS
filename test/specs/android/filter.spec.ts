//@ts-ignore
import AndroidProductsScreen from "../../screenobjects/android/AndroidProducts.screen.ts";
//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts";
describe("TS test-2", () => {
  before(async () => {
    await AndroidLoginScreen.login("standard_user", "secret_sauce");
  });
  it("Filter by Name A to z", async () => {
    await AndroidProductsScreen.filterByNameA2Z();
    await driver.pause(5000);
  });

  it("Filter by Name Z to A", async () => {
    await AndroidProductsScreen.filterByNameZ2A();
    await driver.pause(5000);
  });

  it("Filter by Price High to Low", async () => {
    await AndroidProductsScreen.filterByPriceH2L();
    await driver.pause(5000);
  });

  it("Filter by Price Low to High", async () => {
    await AndroidProductsScreen.filterByPriceL2H();
    await driver.pause(5000);
  });
});
