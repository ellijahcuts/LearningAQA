import {BasePage} from "./base.page";

export class RegPage extends BasePage{
    constructor(page) {
        super(page);
        this.emailField = this.page.getByRole('textbox', { name: 'Email'});
        this.passField = this.page.getByRole('textbox', { name: 'Password' });
        this.userNameField = this.page.getByRole('textbox', { name: 'Your Name' });
        this.signUpButton = page.getByRole('button', { name: 'Sign up'})
    }

    async register(UserName, UserEmail, UserPassword){
        await this.userNameField.click()
        await this.userNameField.fill(UserName);
        await this.emailField.click()
        await this.emailField.fill(UserEmail);
        await this.passField.click()
        await this.passField.fill(UserPassword)
        await this.signUpButton.click()
    }
}
