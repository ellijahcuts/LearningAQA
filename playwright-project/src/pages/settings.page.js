import {BasePage} from "./base.page";
import {expect} from "@playwright/test";

export class SettingsPage extends BasePage{
    constructor(page) {
        super(page);
        this.dropDownMenu = this.page.locator('[class="nav-link dropdown-toggle cursor-pointer"]');
        this.menuSettingsButton = this.page.locator('[href="#/settings"]');
        this.avatarField = this.page.locator('[placeholder="URL of profile picture"]');
        this.bioField = this.page.locator('[placeholder="Short bio about you"]');
        this.saveBioButton = this.page.locator('[class="btn btn-lg btn-primary pull-xs-right"]');
    }

    async editSettingsBioProfile(userAvatar, userText){
        await this.dropDownMenu.click();
        await this.menuSettingsButton.click();
        await this.avatarField.fill(userAvatar);
        await this.bioField.fill(userText);
        await this.saveBioButton.click();
        await expect(this.bioField).toContainText(userText)
        await expect(this.saveBioButton).toBeHidden()
    }
}