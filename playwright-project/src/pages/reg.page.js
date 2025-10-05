import {BasePage} from "./base.page";
import {expect} from "@playwright/test";

export class SignInAndUpPage extends BasePage{
    constructor(page) {
        super(page);
        this.emailField = this.page.getByRole('textbox', { name: 'Email'});
        this.passField = this.page.getByRole('textbox', { name: 'Password' });
        this.userNameField = this.page.getByRole('textbox', { name: 'Your Name' });
        this.signUpButton = this.page.getByRole('button', { name: 'Sign up'})
        this.signInButton = this.page.getByRole('button', { name: 'Login'})
        this.accNameHeader = this.page.locator('[alt="T1261234Ruzvelt"]')
    }

    async register(userName, userEmail, userPassword){
        await this.userNameField.click();
        await this.userNameField.fill(userName);
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        await this.passField.click();
        await this.passField.fill(userPassword);
        await this.signUpButton.click();
    }
    async login(userName, userEmail, userPassword){
        await this.emailField.click();
        await this.emailField.fill(userEmail);
        await this.passField.click();
        await this.passField.fill(userPassword);
        await this.signInButton.click();
        await expect(this.accNameHeader).toBeVisible();
    }
}