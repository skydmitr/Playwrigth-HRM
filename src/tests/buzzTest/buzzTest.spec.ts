import { test } from '@playwright/test'
import {BuzzPage} from "../../pages/buzzPage/buzzPage";
import {BuildersMessage} from "../../fixtures/data/builders/buildersMessage/buildersMessage";
import {BuzzActions} from "../../actions/buzzActions/buzz.actions";

test.describe('Оставление комментария', {tag: '@ui'}, async() => {
    let buzzPage: BuzzActions

    let mes = new BuildersMessage()
        .addMessage()
        .generate()

    test.beforeEach(async ({page}) => {
        buzzPage = new BuzzActions(page)
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

    })

    test.afterEach('Удаление комментария', async () => {
        await test.step('Удаление комментария и проверка его отсутсвия', async() => {
            await buzzPage.exdeletePost(mes.message)
        })
    })
})