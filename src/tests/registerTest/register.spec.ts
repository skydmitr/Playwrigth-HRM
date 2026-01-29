import {test} from '@playwright/test'
import {RegisterPage} from "../../pages/registerPage/registerPage";
import {BuildersFactory} from "../../fixtures/data/builders/buldersCreds/buildersCreds";


test.describe('Проверка авторизации', async () => {
    let registerPage: RegisterPage;


    test.beforeEach(async ({page}) => {

        registerPage = new RegisterPage(page);
        await registerPage.visit()
    })

        test('Неуспешная авторизация юзера', async ({ browser }) => {
            const context = await browser.newContext({ storageState: undefined });
            const page = await context.newPage();

            const registerPage = new RegisterPage(page);
            await registerPage.visit();

            const creds = new BuildersFactory()
                .addCreds()
                .generate();

            await registerPage.expectRegisterAccount(creds.email, creds.password);
            await registerPage.noExpectPage();

            await context.close();
        });


    })