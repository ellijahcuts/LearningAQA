import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
//Функции
function generateSnils() {
    let snils = '';
    for (let i = 0; i < 11; i++) {
        snils += faker.number.int({ min: 0, max: 9 });
    }
    return snils;
}
//Переменные и постоянные
const URLMON = 'https://moneyman.ru/'
const fakeSnils = generateSnils();
let userName = faker.person.firstName('male') // Igor
let userEmail = faker.internet.email() //
let userPass = faker.internet.password()
let userWord = faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' })
let userText = faker.lorem.sentences({ min: 1, max: 3 })
let userPhone = '915' + faker.string.numeric(7);




test.skip('Написать сообщение в чат', async ({ page }) => {
    await page.goto(URLMON);
    await page.locator('[class="sc-hZDyAQ isthBq uw__round-button"]').click()
    await page.locator('[placeholder="Введите поисковый запрос..."]').fill('благода')
    await page.locator('[placeholder="Введите поисковый запрос..."]').press('Enter')
    await page.locator('[class="sc-dCFHLb fshzMM uw__docs-search__list-item"]').click()
    await page.locator('[id="uw-button-docs-write"]').click()
    await page.locator('[placeholder="Введите свой e-mail"]').fill(userEmail)
    await page.locator('[id="uw-send-email-button"]').click()
    await expect(page.getByText(userEmail)).toBeVisible();
    await page.locator('[placeholder="Введите текст"]').fill(userText)
    await page.locator('[id="uw-message-submit-button"]').click()
    await expect(page.getByText(userText)).toBeVisible();
})