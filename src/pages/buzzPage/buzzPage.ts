import {expect, Locator, Page, test} from '@playwright/test'

export class BuzzPage{

    readonly page: Page
    readonly textInput: Locator
    readonly postButton: Locator
    readonly textPage: Locator
    readonly navigationBuzzName: Locator

    constructor(page: Page) {
        this.page = page
        this.textInput = this.page.getByRole('textbox', { name: "What's on your mind?"})
        this.postButton = this.page.getByRole('button', { name: 'Post', exact: true })
        this.textPage = this.page.getByText('Buzz Newsfeed')
        this.navigationBuzzName = this.page.getByRole('link', {name: 'Buzz'})
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
            await this.textInput.click()
            await this.textInput.fill(messageText)
            await expect(this.textInput).toHaveValue(messageText)
            await this.postButton.click()
        })
    }
    async expectPostMessage(messageText: string){
        await test.step('Проверка оставленного комментария', async(done) => {
            await expect(this.page.getByText(messageText)).toBeVisible()
        })
    }
}