import { test } from '@playwright/test'
import {BuzzPage} from "../../pages/buzzPage/buzzPage";
import {BuildersMessage} from "../../fixtures/data/builders/buildersMessage/buildersMessage";

test.describe('Оставление комментария', async() => {
    let buzzPage: BuzzPage

    let mes = new BuildersMessage()
        .addMessage()
        .generate()

    test.beforeEach(async ({page}) => {
        buzzPage = new BuzzPage(page)
        await buzzPage.visit()
    })

    test('Оставляем комментарий и проверяем его наличие', async() =>{

        await test.step('Оставляем комментарий', async() => {
            await buzzPage.postMessage(mes.message)
        })

        await test.step('Gроверяем его наличие', async() => {
            await buzzPage.expectPostMessage(mes.message)
        })

        await test.step('Удаление комментария и проверка его отсутсвия', async() => {
            await buzzPage.exdeletePost(mes.message)
        })

    })
})