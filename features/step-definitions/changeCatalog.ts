import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^The main page1$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click on button in catalog block$/, async () => {
    await expect(MainPage.nespressoPicture).toBeDisplayed();
    await (await MainPage.socialButton).click();
});

Then(/^Pictures change$/, async () => {
    await expect(MainPage.nespressoPicture).not.toBeDisplayed();
    await expect(MainPage.newYearPicture).toBeDisplayed();
})