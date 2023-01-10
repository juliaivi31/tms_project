import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';

Given(/^I am on the main page-n$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click the button-n$/, async () => {
    await MainPage.loginDiv.click();
    await MainPage.loginButton.click();
});

Then(/^I should see a flash message-n$/, async () => {
    await expect(MainPage.emailMissingWarning).not.toBeExisting();
})