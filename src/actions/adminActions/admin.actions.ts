import {test, Page, expect} from '@playwright/test'
import {AdminPageMenu} from "../../pages/adminPage/adminPageMenu";
import {NavigationPage} from "../../pages/navigationPage/navigationPage";

export class AdminActions extends NavigationPage{
    readonly adminPageMenu: AdminPageMenu

    constructor(page: Page) {
        super(page);
        this.adminPageMenu = new AdminPageMenu(page)
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
            await expect(this.adminPageMenu.addAdmin).toBeVisible()
            await this.adminPageMenu.addAdmin.click()
        })
        //await this.page.pause()
    }

    async userRole(role: string) {
        await test.step('Ввод User Role', async ()=>{
            await this.adminPageMenu.selectUserRole.click()
            await this.page.getByRole('option', { name: `${role}` }).click();
        })
        //await this.page.pause()
    }

    async userStatus(status: string) {
        await test.step('Ввод Status', async ()=>{
            await this.adminPageMenu.selectUserRole.click()
            await this.page.getByRole('option', { name: `${status}` }).click();
        })
    }

    async userEmployeeName(employeeName: string) {
        await test.step('Ввод Employee Name', async ()=>{
            await this.adminPageMenu.employeeName.fill(employeeName);
            await this.page.waitForTimeout(5000)
            const selectedUserList = this.page.getByRole('option', { name: `${employeeName}`})
            await selectedUserList.nth(2).click({timeout: 5000})
        })
    }

    async userNameConfirm(userName: string) {
        await test.step('Username', async ()=>{
            await this.adminPageMenu.userName.fill(userName);
        })
    }

    async userPassword(userPassword: string) {
        await test.step('Password', async ()=>{
            await this.adminPageMenu.password.fill(userPassword);
        })
    }

    async confirmPassword(password: string) {
        await test.step('Confirm Password', async ()=>{
            await this.adminPageMenu.passwordConfirm.fill(password);
        })
    }

    async saveButtonclick() {
        await test.step('Save Button', async ()=>{
            await this.adminPageMenu.saveButton.click()
        })
    }

    async expectNotofication() {
        await test.step('Expect notification', async ()=>{
            expect(this.page.getByText('SuccessSuccessfully Saved×'))
        })
    }

}