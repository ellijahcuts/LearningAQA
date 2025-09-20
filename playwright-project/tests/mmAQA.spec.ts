import { test, expect } from '@playwright/test';
import { fakerRU as faker } from '@faker-js/faker';


//Функции
function generateSnils() {
    let snils = '';
    for (let i = 0; i < 11; i++) {
        snils += faker.number.int({ min: 0, max: 9 });
    }
    return snils;
}
//Переменные и постоянные
const URLMON = 'https://platiza.ru/'
const fakeSnils = generateSnils();
let userLastName = faker.person.lastName('male') // Afganov
let userFirstName = faker.person.firstName('male', ) // Igor
let userMiddleName = faker.person.middleName('male') // Olegovich
let userEmail = 'aqa' + faker.internet.email() //
let userPass = faker.internet.password()
let userWord = faker.lorem.word({ length: { min: 4, max: 12 }, strategy: 'closest' })
let userText = faker.lorem.sentences({ min: 1, max: 3 })
let userPhone = '915' + faker.string.numeric(7);
let userPassport4 = '89' + faker.string.numeric(2);
let userPassport6 = '164' + faker.string.numeric(3);




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

test('Регистрация', async ({ page }) => {
    await page.goto(URLMON);
    await page.locator('[data-test="calculator_submit"]').click()
    //await page.getByRole("combobox",{name: "Фамилия"}).click()
    await page.getByRole("combobox",{name: "Фамилия"}).fill(userLastName)
    await page.getByRole("combobox",{name: "Имя"}).fill(userFirstName)
    await page.getByRole("combobox",{name: "Отчество"}).fill(userMiddleName)
    await page.getByRole("textbox",{name: "Электронная почта"}).fill(userEmail)
    await page.getByRole("textbox",{name: "Мобильный телефон"}).fill(userPhone)
    await page.getByText('Я ознакомлен и согласен со').click()
    await page.getByRole("button",{name: "Продолжить"}).click()
    await page.getByRole("button",{name: "Заполнить анкету самостоятельно"}).click()
    await page.getByRole("textbox",{name: "Серия паспорта"}).fill(userPassport4)
    await page.getByRole("textbox",{name: "Номер паспорта"}).fill(userPassport6)
    await page.locator('[id="passportData.divisionCode"]').fill('12')
    await page.locator('[id="passportData.dateOfIssueMonth"]').fill('02')
    await page.locator('[id="passportData.dateOfIssueYear"]').fill('2023')
    await page.getByRole("textbox",{name: "Код подразделения"}).fill("780085")
    await page.getByRole("textbox",{name: "Место рождения"}).fill("Москве")
    //await page.getByText('Выберите значение...').click()
    await page.locator('[id="passportData.dateOfBirthDay"]').fill('12')
    await page.locator('[id="passportData.dateOfBirthMonth"]').fill('02')
    await page.locator('[id="passportData.dateOfBirthYear"]').fill('2004')
    await page.getByText('Мужской').click()
    await page.getByRole("combobox",{name: "Отчество"}).fill('Московская обл, г Реутов, шоссе Автомагистраль Москва-Нижний Новгород, д 1, кв 2')
})