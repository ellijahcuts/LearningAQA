const { test, expect } = require('@playwright/test');

test ('demoqacom', async ({ page })=>{
    await page.goto('https://demoqa.com/login');
    await page.getByRole('textbox', {name:'story'}).click();
    await page.getByRole('textbox', {name:'story'}).fill('')
})