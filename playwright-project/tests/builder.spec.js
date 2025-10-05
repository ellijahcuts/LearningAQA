import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {UserBuilder, TextsBuilder}  from "../src/helpers";
import {MainPage,SignInAndUpPage, SettingsPage,ProfilePage} from '../src/pages/index'


//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let newUserProfileMan;
let newUserMessage;

test.describe('qaGuruRealWorldWithRegistration', () =>{
    test.beforeEach('Registration', async ({ page }) => {
        newUserProfileMan = new UserBuilder().addAvatar().addEmail().addPassword().addFirstName().generate()
        newUserMessage = new TextsBuilder().addUserMessage().addMessageTags().addMessageWord().generate()
        const mainPage = new MainPage(page);
        const regPage = new SignInAndUpPage(page);

        await mainPage.open(URL);
        await mainPage.clickSignUp();
        await regPage.register(newUserProfileMan.userFirstName, newUserProfileMan.userEmail, newUserProfileMan.userPassword);

    })
    test('EditInformationProfile', async ({ page }) => {
        const settingsPage = new SettingsPage(page);
        await settingsPage.editSettingsBioProfile(newUserProfileMan.userAvatar, newUserMessage.userText)
    })
    test('writeNewArticle', async ({ page }) => {
        const profilePage = new ProfilePage(page);
        await profilePage.newArticle(newUserMessage.userWord, newUserMessage.userText, newUserMessage.userTags)
        await profilePage.verifyTextIsVisible(newUserMessage.userText)
    })
    test('deleteAndLogoutArticle', async ({ page }) => {
        const profilePage = new ProfilePage(page);
        await profilePage.deleteArticle()
        await profilePage.logoutProfile()
    })
})
