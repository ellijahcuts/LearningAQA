import {BasePage} from "./base.page";

export class MainPage extends BasePage{
    constructor(page) {
        super(page);
        this.signUpButton = this.page.getByRole('link', { name: 'Sign up'})
        this.signInButton = this.page.getByRole('link', { name: 'Login'})
    }

    async clickSignUp(){
        await this.signUpButton.click()
    }
    async clickSignIn(){
        await this.signInButton.click()
    }
}