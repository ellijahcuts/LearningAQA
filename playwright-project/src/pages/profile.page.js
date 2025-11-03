import {BasePage} from "./base.page";
import {expect, test} from "@playwright/test";

export class ProfilePage extends BasePage{
    constructor(page) {
        super(page);
        this.dropDownMenu = this.page.locator('[class="nav-link dropdown-toggle cursor-pointer"]');
        this.menuProfileButton = this.page.locator('a[href*="/profile/"]')
        this.menuLogoutButton = this.page.getByText('Logout')
        this.pickMyArticles = this.page.locator('a[href*="#/article/"]')
        this.deleteButton = this.page.getByRole("button", {name:'Delete article'})
        this.newArticleButton = this.page.locator('[href="#/editor"]')
        this.articleTitleField =  this.page.locator('[placeholder="Article Title"]')
        this.articleAboutField =  this.page.locator('[placeholder="What\'s this article about?"]')
        this.articleField =  this.page.locator('[placeholder="Write your article (in markdown)"]')
        this.tagsField =  this.page.locator('[placeholder="Enter tags"]')
        this.publishArticleButton = this.page.locator('[class="btn btn-lg pull-xs-right btn-primary"]')
    }

    async newArticle(userWord, userText, userTags){
        await this.newArticleButton.click();
        await this.articleTitleField.fill(userWord)
        await this.articleAboutField.fill(userText);
        await this.articleField.fill(userText);
        await this.tagsField.fill(userTags);
        await this.publishArticleButton.click();
    }
    async verifyTextIsVisible(userText) {
        await expect(this.page.getByText(userText)).toBeVisible();
    }
    async deleteArticle(){
        await this.dropDownMenu.click();
        await this.menuProfileButton.click();
        await this.pickMyArticles.first().click();
        await this.deleteButton.first().click();
    }
    async logoutProfile(){
        await this.dropDownMenu.click();
        await this.menuLogoutButton.click();
    }
}
