import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import {MainPage,SignInAndUpPage, SettingsPage,ProfilePage} from '../src/pages/index'


//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let newUserProfileMan;
let regularUser;


test.describe('qaGuruRealWorldWithRegistration', () =>{
    test.beforeEach('Registration', async ({ page }) => {
        newUserProfileMan ={
            UserEmail: faker.internet.email(),
            UserName: faker.person.firstName('male'),
            UserPassword: faker.internet.password(),
            userWord: faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' }),
            userTags: faker.lorem.word({ length: { min: 3, max: 6 }, strategy: 'closest' }),
            userText: faker.lorem.sentences({ min: 1, max: 3 }),
            userAvatar: 'https://img.freepik.com/free-photo/portrait-ghanaian-man_53876-32448.jpg?semt=ais_incoming&w=740&q=80',
        }
        const mainPage = new MainPage(page);
        const regPage = new SignInAndUpPage(page);

        await mainPage.open(URL);
        await mainPage.clickSignUp();
        await regPage.register(newUserProfileMan.UserName, newUserProfileMan.UserEmail, newUserProfileMan.UserPassword);

    })
    test('EditInformationProfile', async ({ page }) => {
        const settingsPage = new SettingsPage(page);
        await settingsPage.editSettingsBioProfile(newUserProfileMan.userAvatar, newUserProfileMan.userText)
    })
    test('writeNewArticle', async ({ page }) => {
        const profilePage = new ProfilePage(page);
        await profilePage.newArticle(newUserProfileMan.userWord, newUserProfileMan.userText, newUserProfileMan.userTags)
        await profilePage.verifyTextIsVisible(newUserProfileMan.userText)
    })
    test('deleteAndLogoutArticle', async ({ page }) => {
        const profilePage = new ProfilePage(page);
        await profilePage.deleteArticle()
        await profilePage.logoutProfile()
    })
})

test.describe('qaGuruRealWorldWithLogin', () =>{
    test('Login', async ({ page }) => {
        regularUser={
            UserEmail: 'TeodoroRuzvelt@gmail.com',
            UserName: 'Teodor Ruzvelt',
            UserPassword: '148899900',
            userWord: faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' }),
            userTags: faker.lorem.word({ length: { min: 3, max: 6 }, strategy: 'closest' }),
            userText: faker.lorem.sentences({ min: 1, max: 3 }),
            userAvatar: 'https://img.freepik.com/free-photo/portrait-ghanaian-man_53876-32448.jpg?semt=ais_incoming&w=740&q=80',
        }
        const mainPage = new MainPage(page);
        const regPage = new SignInAndUpPage(page);

        await mainPage.open(URL);
        await mainPage.clickSignIn();
        await regPage.login(regularUser.UserName, regularUser.UserEmail, regularUser.UserPassword);
    })
})

