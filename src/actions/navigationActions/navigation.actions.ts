import {Page, expect, test} from "@playwright/test";
import {NavigationPage} from "../../pages/navigationPage/navigationPage";

export class NavigationActions {

    readonly page: Page
    readonly navigationAction: NavigationPage;

    constructor(page: Page) {
        this.page = page;
        this.navigationAction = new NavigationPage(page);
    }


    async smokeAvailabilityMenu() {

        await this.page.goto('/')

        await test.step('Проврка наличия меню', async () => {

            // await expect(this.navigationPIM).toBeVisible()
            // await this.navigationPIM.click()
            // await expect(this.navigationPIMName).toBeVisible()

            await expect(this.navigationAction.navigationLeave).toBeVisible()
            await this.navigationAction.navigationLeave.click()
            await expect(this.navigationAction.navigationLeaveName).toBeVisible()

            await expect(this.navigationAction.navigationTime).toBeVisible()
            await this.navigationAction.navigationTime.click()
            await expect(this.navigationAction.navigationTimeName).toBeVisible()

            await expect(this.navigationAction.navigationRecruitment).toBeVisible()
            await this.navigationAction.navigationRecruitment.click()
            await expect(this.navigationAction.navigationRecruitmentName).toBeVisible()

            await expect(this.navigationAction.navigationMyInfo).toBeVisible()
            await this.navigationAction.navigationMyInfo.click()
            await expect(this.navigationAction.navigationMyInfoName).toBeVisible()

            await expect(this.navigationAction.navigationPerformance).toBeVisible()
            await this.navigationAction.navigationPerformance.click()
            await expect(this.navigationAction.navigationPerformanceName).toBeVisible()

            await expect(this.navigationAction.navigationDashboard).toBeVisible()
            await this.navigationAction.navigationDashboard.click()
            await expect(this.navigationAction.navigationDashboardName).toBeVisible()

            await expect(this.navigationAction.navigationDirectory).toBeVisible()
            await this.navigationAction.navigationDirectory.click()
            await expect(this.navigationAction.navigationDirectoryName).toBeVisible()

            await expect(this.navigationAction.navigationMaintenance).toBeVisible()

            await expect(this.navigationAction.navigationClaim).toBeVisible()
            await this.navigationAction.navigationClaim.click()
            await expect(this.navigationAction.navigationClaimName).toBeVisible()
        })
    }

    async smokeAdminMenu() {

        test.step('Проверка админ меню', async () => {
            await expect(this.navigationAction.navigationAdmin).toBeVisible({timeout: 60000})
            await this.navigationAction.navigationAdmin.click()
            // expect(this.navigationAdminName).toBeVisible()
        })
    }
}