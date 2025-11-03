import {expect } from '@playwright/test';
import {UserBuilder, TextsBuilder}  from "../src/helpers";
import {App} from '../src/pages/index'
import {test}  from '../src/helpers/fixtures/fixture'

let app;

test.describe('qaGuruRealWorldWithRegistration', () =>{
    /*test.beforeEach('Registration', async ({ page }) => {
        newUserProfileMan = new UserBuilder().addAvatar().addEmail().addPassword().addFirstName().generate()
        newUserMessage = new TextsBuilder().addUserMessage().addMessageTags().addMessageWord().generate()
        app = new App(page)
        await app.mainPage.open(URL);
        await app.mainPage.clickSignUp();
        await app.signInAndUpPage.register(newUserProfileMan.userFirstName, newUserProfileMan.userEmail, newUserProfileMan.userPassword);

    })*/
    test('EditInformationProfile', async ({ registrationFixture }) => {
        await registrationFixture.settingsPage.editSettingsBioProfile('newUserProfileMan.userAvatar', 'newUserMessage.userText')
    })
    test('Ed1tInformationProfile', async ({ registrationFixture, webApp }) => {
        await registrationFixture
        await webApp.settingsPage.editSettingsBioProfile('newUserProfileMan.userAvatar', 'newUserMessage.userText')
    })

})
