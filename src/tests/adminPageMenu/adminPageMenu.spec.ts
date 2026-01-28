import {test} from '@playwright/test'
import {AdminPageMenu} from "../../pages/adminPageMenu/adminPageMenu";
import {BuildersAdminMenu} from "../../fixtures/data/builders/buildersAdminMenu/buildersAdminMenu";
import {NavigationPage} from "../../pages/navigationPage/navigationPage";
import {ad} from "@faker-js/faker/dist/airline-CWrCIUHH";



test.describe('Создание админа', async () => {
    let adminPageMenu: AdminPageMenu;
    let navigationPage: NavigationPage;

    test.beforeEach(async ({page}) => {
        adminPageMenu = new AdminPageMenu(page);
        navigationPage = new NavigationPage(page);

    })

    test('Создание админа', async ({ }) => {
        let creds = new BuildersAdminMenu()
            .addCreds()
            .withUserRole()
            .withUserName()
            .withEmployeeName()
            .withStatus()
            .generate()

        await navigationPage.smokeAdminMenu()
        await adminPageMenu.gotoUrl()
        await adminPageMenu.visitPageCreateUser()
        await adminPageMenu.userRole(creds.userRole)
        await adminPageMenu.userStatus(creds.status)
        await adminPageMenu.userEmployeeName(creds.employeeName)
        await adminPageMenu.userNameConfirm(creds.userName)
        await adminPageMenu.userPassword(creds.password)
        await adminPageMenu.confirmPassword(creds.password)
        await adminPageMenu.saveButtonclick()
        await adminPageMenu.expectNotofication()
    });
})
