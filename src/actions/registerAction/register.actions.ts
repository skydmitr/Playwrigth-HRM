import {expect, Page, test} from "@playwright/test";
import {RegisterPage} from "../../pages/registerPage/registerPage";

export class RegisterActions {

    readonly page: Page
    readonly registerActions: RegisterPage

    constructor(page: Page) {
        this.page = page
        this.registerActions = new RegisterPage(page)
    }

    async visit(){
        await test.step('Переход на страницу регистрации', async () => {
            await this.page.goto('/')
        })
    }

    async gotoHome(site: string){
        await this.page.goto(site)
    }

    async expectRegisterAccount(nameInput: string, passwordInput: string){
        await expect(this.registerActions.nameInput).toBeVisible() //Проверка видимости поля имя
        await this.registerActions.nameInput.fill(nameInput)

        await expect(this.registerActions.passwordInput).toBeVisible() //password
        await this.registerActions.passwordInput.fill(passwordInput)

        await expect(this.registerActions.buttonEntrance).toBeVisible() // кнопка
        await this.registerActions.buttonEntrance.click()
    }

    async expectPage(){
        await test.step('Успешная проверка входа', async () => {
            await expect(this.registerActions.dashBoard).toBeVisible()
        })
    }

    async noExpectPage(){
        await test.step('Неуспешная проверка входа', async () => {
            await expect(this.registerActions.invalidCreds).toBeVisible()
        })
    }

}