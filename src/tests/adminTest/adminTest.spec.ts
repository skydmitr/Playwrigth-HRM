import {test} from '@playwright/test'
import {AdminPageMenu} from "../../pages/adminPage/adminPageMenu";
import {BuildersAdminMenu} from "../../fixtures/data/builders/buildersAdminMenu/buildersAdminMenu";
import {NavigationPage} from "../../pages/navigationPage/navigationPage";
import {ad} from "@faker-js/faker/dist/airline-CWrCIUHH";
import {AdminActions} from "../../actions/adminActions/admin.actions";
import {NavigationActions} from "../../actions/navigationActions/navigation.actions";



test.describe('Создание админа', {tag: '@ui'}, async () => {
    let adminPageMenu: AdminActions;
    let navigationPage: NavigationActions;

    test.beforeEach(async ({page}) => {
        adminPageMenu = new AdminActions(page);
        navigationPage = new NavigationActions(page);

    })

    test('Создание админа', async () => {
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
