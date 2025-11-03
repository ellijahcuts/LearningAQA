import { test as base } from '@playwright/test';
import {UserBuilder,TextsBuilder} from '../../helpers/index';
import {App} from "../../pages";

const URL = 'https://realworld.qa.guru/'


export const test = base.extend ({

    registrationFixture: async ({page}, use) => {
        const newUserProfileMan = new UserBuilder().addAvatar().addEmail().addPassword().addFirstName().generate()
        const app = new App(page)
        await app.mainPage.open(URL);
        await app.mainPage.clickSignUp();
        await app.signInAndUpPage.register(newUserProfileMan.userFirstName, newUserProfileMan.userEmail, newUserProfileMan.userPassword);
        await use(app)
    },
    webApp: async ({page}, use) => {
        const app = new App(page)
        await use(app)
    }
})

