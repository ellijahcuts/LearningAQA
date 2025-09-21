import { test, expect } from '@playwright/test';
import { fakerRU as faker } from '@faker-js/faker';


//Переменные и постоянные
const URLAIR = 'https://air-shop.by/'
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


