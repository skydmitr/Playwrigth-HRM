import {test} from '@playwright/test'
import {RegisterPage} from "../../pages/registerPage/registerPage";
import {BuildersFactory} from "../../fixtures/data/builders/buldersCreds/buildersCreds";
import {RegisterActions} from "../../actions/registerAction/register.actions";


test.describe('Проверка авторизации', {tag: '@ui'}, async () => {

        test('Неуспешная авторизация юзера', async ({ browser }) => {
            const context = await browser.newContext({
                storageState: undefined,
                ignoreHTTPSErrors: true
            });
            const page = await context.newPage();

            const registerPage = new RegisterActions(page);
            await registerPage.visit();

            const creds = new BuildersFactory()
                .addCreds()
                .generate();

            await registerPage.expectRegisterAccount(creds.email, creds.password);
            await registerPage.noExpectPage();

            await context.close();
        });

    })