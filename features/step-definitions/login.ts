import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^I'm on the main page$/, async () => {
    await MainPage.open("https://www.onliner.by/");
    await MainPage.loginDiv.click();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await MainPage.login(username, password);
});

Then(/^I should see bot-protection page$/, async () => {
    await expect(MainPage.safetyInfo).toBeExisting();
})