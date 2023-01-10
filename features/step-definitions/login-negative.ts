import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^I'm on the main page-n$/, async () => {
    await MainPage.open("https://www.onliner.by/");
    await MainPage.loginDiv.click();
});

When(/^I login with (.*) and (.*)-n$/, async (username, password) => {
    await MainPage.login(username, password);
});

Then(/^I should see bot-protection page-n$/, async () => {
    await expect(MainPage.safetyInfo).not.toBeExisting();
})