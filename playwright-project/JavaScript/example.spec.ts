import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

//Переменные и константы
const URL = 'https://realworld.qa.guru/'
let userName = faker.person.firstName('male') // Igor
let userEmail = faker.internet.email() //
let userPass = faker.internet.password()
let userWord = faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' })
let userText = faker.lorem.sentences({ min: 1, max: 3 })

test ('Регистрация пользователя', async ({ page }) => {
  await page.goto(URL);
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).click();
    await page.getByRole('textbox', { name: 'Your Name' }).fill(userName);
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(userPass);
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByText(userName)).toBeVisible();
})

test ('Авторизация и написания поста', async ({ page }) => {
  await page.goto('URL');
  await page.locator('[href="#/login"]').click()
  await page.locator('[placeholder="Email"]').fill(userEmail);
  await page.locator('[placeholder="Password"]').fill(userPass);
  await page.locator('[class="btn btn-lg btn-primary pull-xs-right"]').click()
  await expect(page.getByText(userName)).toBeVisible();
  await page.locator('[href="#/editor"]').click()
  await page.locator('[placeholder="Article Title"]').fill(userWord)
  await page.locator('[placeholder="What\'s this article about?"]').fill(userWord)
  await page.locator('[placeholder="Write your article (in markdown)"]').fill(userText)
  await page.locator('[placeholder="Write your article (in markdown)"]').fill(userText)
  await page.locator('[placeholder="Enter tags"]').fill('cats,animal,dogs,love,реклама')
  await page.locator('[class="btn btn-lg pull-xs-right btn-primary"]').click()
  await expect(page.getByText('KarmaCat111')).toBeVisible();
})
