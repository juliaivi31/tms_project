import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^On the main page$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I use buttons$/, async () => {
    await MainPage.kibersportButton.click();
});

Then(/^I should see changing menu$/, async () => {
    await expect(MainPage.news).toBeExisting();
})