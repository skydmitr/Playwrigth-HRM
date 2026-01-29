import {expect, Locator, Page, test} from "@playwright/test";

export class NavigationPage {

    readonly page: Page
    readonly navigationAdmin: Locator
    readonly navigationPIM: Locator
    readonly navigationLeave: Locator
    readonly navigationTime: Locator
    readonly navigationRecruitment: Locator
    readonly navigationMyInfo: Locator
    readonly navigationPerformance: Locator
    readonly navigationDashboard: Locator
    readonly navigationDirectory: Locator
    readonly navigationMaintenance: Locator
    readonly navigationClaim: Locator
    readonly navigationBuzz: Locator

    readonly navigationAdminName: Locator
    readonly navigationPIMName: Locator
    readonly navigationLeaveName: Locator
    readonly navigationTimeName: Locator
    readonly navigationRecruitmentName: Locator
    readonly navigationMyInfoName: Locator
    readonly navigationPerformanceName: Locator
    readonly navigationDashboardName: Locator
    readonly navigationDirectoryName: Locator
    //readonly navigationMaintenanceName: Locator
    readonly navigationClaimName: Locator
    readonly navigationBuzzName: Locator


    constructor(page: Page) {
        this.page = page
        this.navigationAdmin = this.page.getByRole('link', {name: 'Admin'})
        this.navigationPIM = this.page.getByRole('link', {name: 'PIM'})
        this.navigationLeave = this.page.getByRole('link', {name: 'Leave'})
        this.navigationTime = this.page.getByRole('link', {name: 'Time'})
        this.navigationRecruitment = this.page.getByRole('link', {name: 'Recruitment'})
        this.navigationMyInfo = this.page.getByRole('link', {name: 'My Info'})
        this.navigationPerformance = this.page.getByRole('link', {name: 'Performance'})
        this.navigationDashboard = this.page.getByRole('link', {name: 'Dashboard'})
        this.navigationDirectory = this.page.getByRole('link', {name: 'Directory'})
        this.navigationMaintenance = this.page.getByRole('link', {name: 'Maintenance'})
        this.navigationClaim = this.page.getByRole('link', {name: 'Claim'})
        this.navigationBuzz = this.page.getByRole('link', {name: 'Buzz'})

        this.navigationAdminName = this.page.getByRole('heading', {name: 'Admin'})
        this.navigationPIMName = this.page.getByRole('heading', { name: 'PIM' })
        this.navigationLeaveName = this.page.getByRole('heading', {name: /^Leave$/})
        this.navigationTimeName = this.page.getByRole('heading', {name: /^Time$/})
        this.navigationRecruitmentName = this.page.getByRole('heading', {name: 'Recruitment'})
        this.navigationMyInfoName = this.page.getByRole('heading', {name: 'PIM'})
        this.navigationPerformanceName = this.page.getByRole('heading', {name: 'Performance'})
        this.navigationDashboardName = this.page.getByRole('heading', {name: 'Dashboard'})
        this.navigationDirectoryName = this.page.getByRole('heading', {name: /^Directory$/}).first()
        //this.navigationMaintenanceName = this.page.getByRole('heading', {name: 'Maintenance'})
        this.navigationClaimName = this.page.getByRole('heading', {name: /^Claim$/}).first()
        this.navigationBuzzName = this.page.getByRole('heading', {name: 'Buzz'})
    }

    async smokeAvailabilityMenu() {

        await this.page.goto('/')

        await test.step('Проврка наличия меню', async () => {

            await expect(this.navigationLeave).toBeVisible()
            await this.navigationLeave.click()
            await expect(this.navigationLeaveName).toBeVisible()

            await expect(this.navigationTime).toBeVisible()
            await this.navigationTime.click()
            await expect(this.navigationTimeName).toBeVisible()

            await expect(this.navigationRecruitment).toBeVisible()
            await this.navigationRecruitment.click()
            await expect(this.navigationRecruitmentName).toBeVisible()

            await expect(this.navigationMyInfo).toBeVisible()
            await this.navigationMyInfo.click()
            await expect(this.navigationMyInfoName).toBeVisible()

            await expect(this.navigationPerformance).toBeVisible()
            await this.navigationPerformance.click()
            await expect(this.navigationPerformanceName).toBeVisible()

            await expect(this.navigationDashboard).toBeVisible()
            await this.navigationDashboard.click()
            await expect(this.navigationDashboardName).toBeVisible()

            await expect(this.navigationDirectory).toBeVisible()
            await this.navigationDirectory.click()
            await expect(this.navigationDirectoryName).toBeVisible()

            await expect(this.navigationMaintenance).toBeVisible()

            await expect(this.navigationClaim).toBeVisible()
            await this.navigationClaim.click()
            await expect(this.navigationClaimName).toBeVisible()
        })
    }

    async smokeAdminMenu() {

        test.step('Проверка админ меню', async () => {
            await expect(this.navigationAdmin).toBeVisible({timeout: 60000})
            await this.navigationAdmin.click()
            // expect(this.navigationAdminName).toBeVisible()
        })
    }
}
