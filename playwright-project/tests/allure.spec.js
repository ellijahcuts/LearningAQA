import { test, expect } from '@playwright/test';
import {UserBuilder, TextsBuilder}  from "../src/helpers";
import {App} from '../src/pages/index'


//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let newUserProfileMan;
let newUserMessage;
let app;

test.describe('qaGuruRealWorldWithRegistration', () =>{
    test.beforeEach('Registration', async ({ page }) => {
        newUserProfileMan = new UserBuilder().addAvatar().addEmail().addPassword().addFirstName().generate()
        newUserMessage = new TextsBuilder().addUserMessage().addMessageTags().addMessageWord().generate()
        app = new App(page)
        await app.mainPage.open(URL);
        await app.mainPage.clickSignUp();
        await app.signInAndUpPage.register(newUserProfileMan.userFirstName, newUserProfileMan.userEmail, newUserProfileMan.userPassword);

    })
    test('EditInformationProfile', async ({ page }) => {
        await app.settingsPage.editSettingsBioProfile(newUserProfileMan.userAvatar, newUserMessage.userText)
    })
    test('writeNewArticle', async ({ page }) => {
        await app.profilePage.newArticle(newUserMessage.userWord, newUserMessage.userText, newUserMessage.userTags)
        await app.profilePage.verifyTextIsVisible(newUserMessage.userText)
    })
    test('deleteAndLogoutArticle', async ({ page }) => {
        await app.profilePage.deleteArticle()
        await app.profilePage.logoutProfile()
    })
})
