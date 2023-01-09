class MainPage {

    public open(path: string) {
        return browser.url(`https://www.onliner.by/`);
    }

    public get loginDiv() {
        return $('//*[@id="userbar"]/div[1]/div/div/div[1]');
    }

    public get emailInput() {
        return $('//*[@id="auth-container"]/div/div[2]/div/form/div[1]/div/div[2]/div/div/div/div/input');
    }

    public get passwordInput() {
        return $('//*[@id="auth-container"]/div/div[2]/div/form/div[2]/div/div/div/div/input');
    }

    public get loginButton() {
        return $('//*[@id="auth-container"]/div/div[2]/div/form/div[3]/button');
    }

    public async login(username: string, password: string) {
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    public get emailMissingWarning() {
        return $('//*[@id="auth-container"]/div/div[2]/div/form/div[1]/div/div[2]/div/div/div[2]/div');
    }

    public get safetyInfo() {
        return $('//*[@id="auth-container"]/div/div[2]/div/div/div[1]/div[2]');
    }

    public get categoryButton() {
        return $('//*[@id="container"]/div/div/div/div/div[1]/div/div[1]/ul/li[1]/a');
    }

    public get kibersportButton() {
        return $('//*[@id="parimatch-widget"]/header/div/div/a[2]');
    }

    public get news() {
        return $('//*[@id="widget-1-13"]/div/a');
    }

    public get catalogButton() {
        return $('#onliner-belarus-layer > header > div > div > a:nth-child(2)');
    }

    public get activeCatalogButton() {
        return $('#onliner-belarus-layer > header > div > div > a.b-main-page-tabs__item.b-main-page-tabs__item_active');
    }

    public get nespressoPicture() {
        return $('//*[@id="widget-2-501"]/div/a');
    }

    public get socialButton() {
        return $('//*[@id="onliner-catalog-purchases"]/header/div/div/a[2]');
    }

    public get newYearPicture() {
        return $('#widget-1-505 > div > a');
    }

    public get logo() {
        return $('#container > div > div > header > div.b-top-actions > div > div.b-top-logo > a');
    }

    public get searchBar() {
        return $('//*[@id="fast-search"]/form/input[1]');
    }

    public get popup() {
        return $('//*[@id="fast-search-modal"]');
    }
}

export default new MainPage();
