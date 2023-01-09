import { Given, When, Then } from '@wdio/cucumber-framework';

import MainPage from '../pageobjects/main.page';

Given(/^I am on the main page$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click the button$/, async () => {
    await MainPage.loginDiv.click();
    await MainPage.loginButton.click();
});

Then(/^I should see a flash message$/, async () => {
    await expect(MainPage.emailMissingWarning).toBeExisting();
})