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

    async visit(){
        await test.step('Переход на страницу регистрации', async () => {
            await this.page.goto('/')
        })
    }

    async gotoHome(site: string){
            await this.page.goto(site)
    }

    async expectRegisterAccount(nameInput: string, passwordInput: string){
          await expect(this.nameInput).toBeVisible() //Проверка видимости поля имя
            await this.nameInput.fill(nameInput)

          await expect(this.passwordInput).toBeVisible() //password
            await this.passwordInput.fill(passwordInput)

          await expect(this.buttonEntrance).toBeVisible() // кнопка
            await this.buttonEntrance.click()
        }

    async expectPage(){
        await test.step('Успешная проверка входа', async () => {
            await expect(this.dashBoard).toBeVisible()
        })
    }

    async noExpectPage(){
        await test.step('Неуспешная проверка входа', async () => {
            await expect(this.invalidCreds).toBeVisible()
        })
    }

}