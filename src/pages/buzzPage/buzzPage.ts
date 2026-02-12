import {expect, Locator, Page, test} from '@playwright/test'
import {vitest} from "globals";

export class BuzzPage{

    readonly page: Page
    readonly textInput: Locator
    readonly postButton: Locator
    readonly textPage: Locator
    readonly navigationBuzzName: Locator

    readonly opensymbolMenu: Locator
    readonly deletePost: Locator
    readonly h1TextMenu: Locator
    readonly h2Textmenu: Locator
    readonly buttonNo: Locator
    readonly buttonYes: Locator
    readonly buttonExit: Locator
    readonly editPostText: Locator
    readonly editPost: Locator
    readonly textDialog: Locator
    readonly dialogPostButton: Locator


    constructor(page: Page) {
        this.page = page
        this.textInput = this.page.getByRole('textbox', { name: "What's on your mind?"})
        this.postButton = this.page.getByRole('button', { name: 'Post', exact: true })
        this.textPage = this.page.getByText('Buzz Newsfeed')
        this.navigationBuzzName = this.page.getByRole('link', {name: 'Buzz'})

        this.opensymbolMenu = this.page.getByRole('button').filter({ hasText: /^$/ }).nth(2)
        this.deletePost = this.page.getByRole('listitem').filter({ hasText: /^Delete Post$/ })
        this.editPost = this.page.getByRole('listitem').filter({ hasText: /^Edit Post$/ })
        this.h1TextMenu = this.page.getByText('Are you Sure?')
        this.h2Textmenu = this.page.getByText('The selected item will be')
        this.buttonNo = this.page.getByRole('button', { name: 'No, Cancel' })
        this.buttonYes = this.page.getByRole('button', { name: ' Yes, Delete' })
        this.buttonExit = this.page.getByRole('button', { name: '×' })
        this.editPostText = this.page.getByText('Edit Post')
        this.textDialog = this.page.getByRole('dialog').getByRole('textbox')
        this.dialogPostButton = this.page.getByRole('dialog').getByRole('button', { name: 'Post' })
    }

    async visit(){
        await test.step('Переход на страницу и провверка нахождения на ней', async(done) => {
            await this.page.goto('/')
            await this.navigationBuzzName.click()
            await expect(this.textPage).toBeVisible()
        })
    }

    async postMessage(messageText: string){
        await test.step('Написание текста в поле', async () => {
            await this.textInput.click({timeout: 5000})
            await this.textInput.fill(messageText, {timeout: 5000})
            await expect(this.textInput).toHaveValue(messageText)
            await this.postButton.click()
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
            await this.opensymbolMenu.click()
            await expect(this.editPost).toBeVisible()
            await this.editPost.click()
            await this.textDialog.fill(messageText, {timeout: 5000})
            await expect(this.textDialog).toHaveValue(messageText)
            await expect(this.dialogPostButton).toBeVisible()
            await this.dialogPostButton.click()})
    }

    async exdeletePost(messageText: string){
        await test.step('Удаление комментария', async() => {
            await this.opensymbolMenu.click()
            await expect(this.deletePost).toBeVisible()
            await this.deletePost.click()
            await expect(this.h1TextMenu).toBeVisible()
            await expect(this.h2Textmenu).toBeVisible()
            await expect(this.buttonNo).toBeVisible()
            await expect(this.buttonYes).toBeVisible()
            //await expect(this.buttonExit).toBeVisible()
            await this.buttonYes.click()
            const latestPost = this.page.getByText(messageText).first()
            await expect(latestPost).not.toBeVisible({ timeout: 5000 })
        })
    }

}