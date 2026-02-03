import { test } from '@playwright/test'
import {BuzzPage} from "../../pages/buzzPage/buzzPage";
import {BuildersMessage} from "../../fixtures/data/builders/buildersMessage/buildersMessage";

test.describe('Оставление комментария', async() => {
    let buzzPage: BuzzPage

    test.beforeEach(async ({page}) => {
        buzzPage = new BuzzPage(page)

    })

    test('Оставляем комментарий и проверяем его наличие', async() =>{
        let mes = new BuildersMessage()
            .addMessage()
            .generate()

        await buzzPage.visit()
        await buzzPage.postMessage(mes.message)
        await buzzPage.expectPostMessage(mes.message)

    })

})