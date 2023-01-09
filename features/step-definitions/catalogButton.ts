import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^The main page$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click on catalog button$/, async () => {
    await MainPage.catalogButton.click();
});

Then(/^It becomes active$/, async () => {

    await expect(MainPage.activeCatalogButton).toBeExisting();
})