import {test} from '@playwright/test'
import {NavigationPage} from "../../pages/navigationPage/navigationPage";
import {RegisterPage} from "../../pages/registerPage/registerPage";



test.describe('Проверка авторизации', async () => {
    let navigationPage: NavigationPage;


    test.beforeEach(async ({page}) => {
        navigationPage = new NavigationPage(page);
    })

        test('Проверка доступности меню', async ({ }) => {
            await navigationPage.smokeAvailabilityMenu()
        });
})
