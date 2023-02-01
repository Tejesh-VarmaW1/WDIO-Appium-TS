class ProductScreen {
  get filterMenu() {
    return $(
      '//android.view.ViewGroup[@content-desc="test-Modal Selector Button"]/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView'
    );
  }

  get nameA2Z() {
    return $(
      '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView'
    );
  }

  get nameZ2A() {
    return $(
      '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView'
    );
  }

  get priceH2L() {
    return $(
      '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView'
    );
  }

  get priceL2H() {
    return $(
      '//android.widget.ScrollView[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView'
    );
  }

  async filterByNameA2Z(): Promise<void> {
    await this.filterMenu.click();
    await this.nameA2Z.click();
  }

  async filterByNameZ2A(): Promise<void> {
    await this.filterMenu.click();
    await this.nameZ2A.click();
  }

  async filterByPriceL2H(): Promise<void> {
    await this.filterMenu.click();
    await this.priceH2L.click();
  }

  async filterByPriceH2L(): Promise<void> {
    await this.filterMenu.click();
    await this.priceL2H.click();
  }
}

export default new ProductScreen();
