import {BasePage} from "./base.page";

export class MainPage extends BasePage{
    constructor(page) {
        super(page);
        this.signUpButton = page.getByRole('link', { name: 'Sign up'})
    }

    async clickSignUp(){
        await this.signUpButton.click()
    }
}