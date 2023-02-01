class IosProductScreen {
  get filterMenu() {
    const filters =
      '**/XCUIElementTypeOther[`name == "test-Modal Selector Button"`]/XCUIElementTypeOther/XCUIElementTypeOther';
    return $(`-ios class chain:${filters}`);
  }

  get nameA2Z() {
    return $(`-ios predicate string:${'label == "Name (A to Z)"'}`);
  }

  get nameZ2A() {
    return $(`-ios predicate string:${'label == "Name (Z to A)"'}`);
  }

  get priceL2H() {
    return $(`-ios predicate string:${'label == "Price (low to high)"'}`);
  }

  get priceH2L() {
    return $(
      `-ios predicate string:${'label == "Horizontal scroll bar, 1 page"'}`
    );
  }

  get cancelBTN() {
    return $(
      `-ios class chain:${'**/XCUIElementTypeOther[`label == "Cancel"`][2]'}`
    );
  }

  get hamburgerBTN() {
    return $(
      `-ios predicate string:${'label == "Vertical scroll bar, 3 pages"'}`
    );
  }

  async filterByNameAtoZ(): Promise<void> {
    await this.filterMenu.click();
    await this.nameA2Z.click();
  }

  async filterByNameZtoA(): Promise<void> {
    await this.filterMenu.click();
    await this.nameZ2A.click();
  }

  async filterByPriceLowtoHigh(): Promise<void> {
    await this.filterMenu.click();
    await this.priceL2H.click();
  }

  async filterByPriceHightoLow(): Promise<void> {
    await this.filterMenu.click();
    await this.priceH2L.click();
  }

  async filterCancel(): Promise<void> {
    await this.filterMenu.click();
    await this.cancelBTN.click();
  }

  async goToCart(): Promise<void> {
    await (
      await $(
        `-ios class chain:${'**/XCUIElementTypeOther[`name == "test-Cart"`]/XCUIElementTypeOther'}`
      )
    ).click();
  }

  async changeGridView(): Promise<void> {
    await $(`-ios predicate string:${'name == "test-Toggle"'}`).click();
  }

  async viewMenu(): Promise<void> {
    await this.hamburgerBTN.click();
  }
}

export default new IosProductScreen();
