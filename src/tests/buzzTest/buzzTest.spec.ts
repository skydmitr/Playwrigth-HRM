import { test } from '@playwright/test'
import {BuzzPage} from "../../pages/buzzPage/buzzPage";
import {BuildersMessage} from "../../fixtures/data/builders/buildersMessage/buildersMessage";

test.describe('Оставление комментария', {tag: '@ui'}, async() => {
    let buzzPage: BuzzPage

    let mes = new BuildersMessage()
        .addMessage()
        .generate()

    test.beforeEach(async ({page}) => {
        buzzPage = new BuzzPage(page)
        await buzzPage.visit()
    })

    test('Оставляем комментарий, проверяем его наличие, редактируем', async() =>{

        await test.step('Оставляем комментарий', async() => {
            await buzzPage.postMessage(mes.message)
        })

        await test.step('Проверяем его наличие', async() => {
            await buzzPage.expectPostMessage(mes.message)
        })

        await test.step('Редактирование комментария', async() => {

            await buzzPage.editPostMes(mes.message + mes.message)

        })

        // await test.step('Проверка отредактированного комментария', async() => {
        //
        // })

    })

    test.afterEach('Удаление комментария', async () => {
        await test.step('Удаление комментария и проверка его отсутсвия', async() => {
            await buzzPage.exdeletePost(mes.message)
        })
    })
})