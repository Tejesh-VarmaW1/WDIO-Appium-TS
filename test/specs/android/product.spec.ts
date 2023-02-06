//@ts-ignore
import AndroidLoginScreen from "../../screenobjects/android/AndroidLogin.screen.ts";
//@ts-ignore
import AndroidProductsScreen from "../../screenobjects/android/AndroidProducts.screen.ts";

describe("TS test-6",()=>{
    before(async()=>{
        await AndroidLoginScreen.login()
    })
    it("Click on product",async()=>{
        //Please enter the exact product name
        await AndroidProductsScreen.clickOnProduct("Sauce Labs Backpack")
    })
})