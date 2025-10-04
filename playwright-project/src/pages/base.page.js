export class BasePage {
    constructor(page) {
        this.page = page;
    }
    async open(URL){
        await this.page.goto(URL)
    }
}