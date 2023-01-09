import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../pageobjects/main.page';

Given(/^Main page$/, async () => {
    await MainPage.open("https://www.onliner.by/");
});

When(/^I click on logo$/, async () => {
    await MainPage.logo.click();
});

Then(/^I see main blocks$/, async () => {
    await expect($('//*[@id="container"]/div/div/div/div/div[2]')).toBeExisting();
    await expect($('//*[@id="onliner-catalog-purchases"]')).toBeExisting();
    await expect($('//*[@id="container"]/div/div/div/div/div[5]/div[1]')).toBeExisting();
    await expect($('//*[@id="container"]/div/div/div/div/div[6]')).toBeExisting();
    await expect($('//*[@id="onliner-belarus-layer"]')).toBeExisting();
    await expect($('//*[@id="container"]/div/div/div/div/div[9]')).toBeExisting();
    await expect($('//*[@id="container"]/div/div/div/div/div[11]')).toBeExisting();
})