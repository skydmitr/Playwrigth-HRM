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
}