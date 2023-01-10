import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^The main page-n$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click on catalog button-n$/, async () => {
    await MainPage.catalogButton.click();
});

Then(/^It becomes active-n$/, async () => {

    await expect(MainPage.activeCatalogButton).not.toBeExisting();
})