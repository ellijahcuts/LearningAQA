import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let newUserProfileMan;


test.describe.only('Demo', () =>{
    test.beforeEach('Rega', async ({ page }) => {
        newUserProfileMan ={
            UserEmail: faker.internet.email(),
            UserName: faker.person.firstName('male'),
            UserPassword: faker.internet.password(),
            userWord: faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' }),
            userText: faker.lorem.sentences({ min: 1, max: 3 }),
            userAvatar: 'https://img.freepik.com/free-photo/portrait-ghanaian-man_53876-32448.jpg?semt=ais_incoming&w=740&q=80',
            'qa all ok': ()=> {console.log('Ты станеш АКУА')},
            getText: ()=> {
                const message = console.log('И я стану АКУА');
                return message
            }
        }

        newUserProfileMan.getText()

        await page.goto(URL);
        await page.getByRole('link', { name: 'Sign up' }).click();
        await page.getByRole('textbox', { name: 'Your Name' }).click();
        await page.getByRole('textbox', { name: 'Your Name' }).fill(newUserProfileMan.UserName);
        await page.getByRole('textbox', { name: 'Email' }).click();
        await page.getByRole('textbox', { name: 'Email' }).fill(newUserProfileMan.UserEmail);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(newUserProfileMan.UserPassword);
        await page.getByRole('button', { name: 'Sign up' }).click();
    })
    test('Redacrura', async ({ page }) => {
        await page.locator('[class="nav-link dropdown-toggle cursor-pointer"]').click()
        await page.locator('[href="#/settings"]').click()
        await page.locator('[placeholder="URL of profile picture"]').fill(newUserProfileMan.userAvatar)
        await page.locator('[placeholder="Short bio about you"]').fill(newUserProfileMan.userText)
        await expect(page.locator('[placeholder="Short bio about you"]')).toContainText(newUserProfileMan.userText)
        await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        await expect(page.locator('[class="btn btn-lg btn-primary pull-xs-right"]')).toBeHidden()
    })
})