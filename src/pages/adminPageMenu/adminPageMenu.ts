import {RegisterPage} from "../registerPage/registerPage";
import {expect, Locator, Page, test} from "@playwright/test";
import {NavigationPage} from "../navigationPage/navigationPage";
import {AdminMenuData, BuildersAdminMenu} from "../../fixtures/data/builders/buildersAdminMenu/buildersAdminMenu";


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
    readonly navigationAdmin:Locator
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

    async gotoUrl() {
        await test.step('Переход на страницу "Admin"', async () => {
            await this.page.goto('/')
            await expect(this.navigationAdmin).toBeVisible({timeout: 5000})
            //await this.page.pause()
            //await this.navigationAdmin.click()
            //await this.page.pause()
            //await expect(this.navigationAdminName).toBeVisible()
        })
    }

    async visitPageCreateUser(){
        await test.step('Переход на страницу создания нового пользователя', async ()=>{
            await expect(this.addAdmin).toBeVisible()
            await this.addAdmin.click()
        })
        //await this.page.pause()
    }

    async userRole(role: string) {
        await test.step('Ввод User Role', async ()=>{
            await this.selectUserRole.click()
            await this.page.getByRole('option', { name: `${role}` }).click();
        })
        //await this.page.pause()
    }

    async userStatus(status: string) {
        await test.step('Ввод Status', async ()=>{
            await this.selectUserRole.click()
            await this.page.getByRole('option', { name: `${status}` }).click();
        })
    }

    async userEmployeeName(employeeName: string) {
        await test.step('Ввод Employee Name', async ()=>{
            await this.employeeName.fill(employeeName);
            await this.page.waitForTimeout(5000)
            const selectedUserList = this.page.getByRole('option', { name: `${employeeName}`})
            await selectedUserList.nth(2).click({timeout: 5000})
        })
    }

    async userNameConfirm(userName: string) {
        await test.step('Username', async ()=>{
            await this.userName.fill(userName);
        })
    }

    async userPassword(userPassword: string) {
        await test.step('Password', async ()=>{
            await this.password.fill(userPassword);
        })
    }

    async confirmPassword(password: string) {
        await test.step('Confirm Password', async ()=>{
            await this.passwordConfirm.fill(password);
        })
    }

    async saveButtonclick() {
        await test.step('Save Button', async ()=>{
            await this.saveButton.click()
        })
    }

    async expectNotofication() {
        await test.step('Expect notification', async ()=>{
            expect(this.page.getByText('SuccessSuccessfully Saved×'))
        })
    }
}
