import {RegisterPage} from "../registerPage/registerPage";
import {expect, Locator, Page, test} from "@playwright/test";
import {NavigationPage} from "../navigationPage/navigationPage";


export class AdminPageMenu extends NavigationPage{

    readonly addRole: Locator
    readonly cancelButton: Locator
    readonly saveButton: Locator
    readonly employeeName: Locator
    readonly userName: Locator
    readonly selectUserRole: Locator
    readonly selectStatus: Locator
    readonly password: Locator
    readonly passwordConfirm: Locator
    readonly addUserButton: Locator
    //readonly selectUserRoleList: Locator
    readonly navigationAdmin: Locator
    readonly addAdmin: Locator
    readonly noRecordsFound: Locator
    readonly searchPanelAdminPage: Locator

    constructor(page: Page) {
        super(page);

        this.navigationAdmin = this.page.getByRole('link', {name: 'Admin'})
        this.addRole = this.page.getByRole('heading', {name: 'Add Role'})
        this.cancelButton = this.page.getByRole('button', {name: 'Cancel'})
        this.saveButton = this.page.getByRole('button', {name: 'Save'})
        this.employeeName = this.page.getByRole('textbox', {name: 'Type for hints...'})
        this.passwordConfirm = this.page.getByRole('textbox').nth(3)
        this.userName = this.page.getByRole('textbox').nth(2)
        this.password = this.page.getByRole('textbox').nth(4)
        this.selectUserRole = this.page.getByText('-- Select --').first()
        this.selectStatus = this.page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)
        this.addUserButton = this.page.getByRole('button', {name: 'Save'})
        this.addAdmin = this.page.getByRole('button', {name: 'Add'})
        this.noRecordsFound = this.page.getByRole('option', { name: 'No Records Found' })
        this.searchPanelAdminPage = this.page.getByRole('textbox')
    }

}
