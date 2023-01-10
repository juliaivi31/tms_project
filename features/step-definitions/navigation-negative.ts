import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^On the main page-n$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I use buttons-n$/, async () => {
    await MainPage.kibersportButton.click();
});

Then(/^I should see changing menu-n$/, async () => {
    await expect(MainPage.news).not.toBeExisting();
})