import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let userWord = faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' })
let userText = faker.lorem.sentences({ min: 1, max: 3 })

test.describe('Профиль пользователя', () =>{
    test.beforeEach('Регистрация пользователя', async ({ page }) => {
    await page.goto(URL);
      let userName = faker.person.firstName('male') // Igor
      let userEmail = faker.internet.email() //
      let userPass = faker.internet.password()



    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill(userName);
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(userPass);
    await page.getByRole('button', { name: 'Sign up' }).click();
})
    test('Изменение настроек профайла', async ({ page }) => {
        await page.locator('[class="nav-link dropdown-toggle cursor-pointer"]').click()
        await page.locator('[href="#/settings"]').click()
        await page.locator('[placeholder="URL of profile picture"]').fill('https://img.freepik.com/free-photo/portrait-ghanaian-man_53876-32448.jpg?semt=ais_incoming&w=740&q=80')
        await page.locator('[placeholder="Short bio about you"]').fill(userText)
        await expect(page.locator('[placeholder="Short bio about you"]')).toContainText(userText)
        await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]').click()
        await expect(page.locator('[class="btn btn-lg btn-primary pull-xs-right"]')).toBeHidden()
    })
})

test ('Авторизация и написания поста', async ({ page }) => {
    let accEmail ='TeodoroRuzvelt@gmail.com'
    let accPass = '148899900'
    let accUserName = 'Teodor Ruzvelt'
    await page.goto(URL);
    await page.locator('[href="#/login"]').click()
    await page.locator('[placeholder="Email"]').fill(accEmail);
    await page.locator('[placeholder="Password"]').fill(accPass);
    await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]').click()
    await expect(page.getByText(accUserName)).toBeVisible();
    await page.locator('[href="#/editor"]').click()
    await page.locator('[placeholder="Article Title"]').fill(userWord)
    await page.locator('[placeholder="What\'s this article about?"]').fill(userText)
    await page.locator('[placeholder="Write your article (in markdown)"]').fill(userText)
    await page.locator('[placeholder="Write your article (in markdown)"]').fill(userText)
    await page.locator('[placeholder="Enter tags"]').fill('cats,animal,dogs,love,реклама')
    await page.locator('[class="btn btn-lg pull-xs-right btn-primary"]').click()
    await expect(page.getByText(userText)).toBeVisible();
})