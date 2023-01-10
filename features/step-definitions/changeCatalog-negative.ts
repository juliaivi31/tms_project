import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^The main page1-n$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click on button in catalog block-n$/, async () => {
    await expect(MainPage.nespressoPicture).toBeDisplayed();
    await (await MainPage.socialButton).click();
});

Then(/^Pictures change-n$/, async () => {
    await expect(MainPage.nespressoPicture).toBeDisplayed();
    await expect(MainPage.newYearPicture).not.toBeDisplayed();
})