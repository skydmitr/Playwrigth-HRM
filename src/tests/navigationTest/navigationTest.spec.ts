import {test} from '@playwright/test'
import {NavigationPage} from "../../pages/navigationPage/navigationPage";
import {RegisterPage} from "../../pages/registerPage/registerPage";
import {NavigationActions} from "../../actions/navigationActions/navigation.actions";



test.describe('Проверка авторизации', {tag: '@ui'}, async () => {
    let navigationPage: NavigationActions;


    test.beforeEach(async ({page}) => {
        navigationPage = new NavigationActions(page);
    })

        test('Проверка доступности меню', async ({ }) => {
            await navigationPage.smokeAvailabilityMenu()
        });
})
