import {expect, Locator, Page, test} from "@playwright/test";

export class RegisterPage {

    readonly page: Page
    readonly nameInput: Locator
    readonly passwordInput: Locator
    readonly buttonEntrance: Locator
    readonly dashBoard: Locator
    readonly invalidCreds: Locator

    constructor(page: Page){
        this.page = page;
        this.nameInput = this.page.getByRole('textbox', {name: 'Username'})
        this.passwordInput = this.page.getByRole('textbox', {name: 'Password'})
        this.buttonEntrance = this.page.getByRole('button', {name: 'Login'})
        this.dashBoard = this.page.getByRole('heading', {name: 'DashBoard'})
        this.invalidCreds = this.page.locator('//*[*=\'Invalid credentials\']').nth(1)
    }

}