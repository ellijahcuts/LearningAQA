import {MainPage,SignInAndUpPage, SettingsPage,ProfilePage} from './index'

export class App {
    constructor (page){
        this.page = page;
        this.mainPage = new MainPage(page);
        this.signInAndUpPage = new SignInAndUpPage(page);
        this.settingsPage = new SettingsPage(page);
        this.profilePage = new ProfilePage(page);
    }}