import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^The main page2$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I use search bar$/, async () => {
    await MainPage.searchBar.setValue("машинка");
});

Then(/^I go to the relevant request$/, async () => {
    await expect(MainPage.popup).toBeDisplayed();
})