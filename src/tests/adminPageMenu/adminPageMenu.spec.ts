import {test} from '@playwright/test'
import {AdminPageMenu} from "../../pages/adminPageMenu/adminPageMenu";
import {BuildersAdminMenu} from "../../fixtures/data/builders/buildersAdminMenu/buildersAdminMenu";
import {NavigationPage} from "../../pages/navigationPage/navigationPage";



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
        await adminPageMenu.addUser(creds)
    });
})
