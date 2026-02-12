import {expect, Page, test} from "@playwright/test";
import {BuzzPage} from "../../pages/buzzPage/buzzPage";

export class BuzzActions {
    readonly page: Page
    readonly buzzActions: BuzzPage

    constructor(page: Page) {
        this.page = page
        this.buzzActions = new BuzzPage(page)
    }

    async visit(){
        await test.step('Переход на страницу и провверка нахождения на ней', async(done) => {
            await this.page.goto('/')
            await this.buzzActions.navigationBuzzName.click()
            await expect(this.buzzActions.textPage).toBeVisible()
        })
    }

    async postMessage(messageText: string){
        await test.step('Написание текста в поле', async () => {
            await this.buzzActions.textInput.click({timeout: 5000})
            await this.buzzActions.textInput.fill(messageText, {timeout: 5000})
            await expect(this.buzzActions.textInput).toHaveValue(messageText)
            await this.buzzActions.postButton.click()
        })
    }

    async expectPostMessage(messageText: string){
        await test.step('Проверка оставленного комментария', async() => {
            const latestPost = this.page.getByText(messageText).first()
            await expect(latestPost).toBeVisible({timeout: 5000})
        })
    }

    async editPostMes(messageText: string){
        await test.step('Редактирование комментария', async() => {
            await this.buzzActions.opensymbolMenu.click()
            await expect(this.buzzActions.editPost).toBeVisible()
            await this.buzzActions.editPost.click()
            await this.buzzActions.textDialog.fill(messageText, {timeout: 5000})
            await expect(this.buzzActions.textDialog).toHaveValue(messageText)
            await expect(this.buzzActions.dialogPostButton).toBeVisible()
            await this.buzzActions.dialogPostButton.click()})
    }

    async exdeletePost(messageText: string){
        await test.step('Удаление комментария', async() => {
            await this.buzzActions.opensymbolMenu.click()
            await expect(this.buzzActions.deletePost).toBeVisible()
            await this.buzzActions.deletePost.click()
            await expect(this.buzzActions.h1TextMenu).toBeVisible()
            await expect(this.buzzActions.h2Textmenu).toBeVisible()
            await expect(this.buzzActions.buttonNo).toBeVisible()
            await expect(this.buzzActions.buttonYes).toBeVisible()
            //await expect(this.buttonExit).toBeVisible()
            await this.buzzActions.buttonYes.click()
            const latestPost = this.page.getByText(messageText).first()
            await expect(latestPost).not.toBeVisible({ timeout: 5000 })
        })
    }



}