import { faker } from '@faker-js/faker'


export interface BuildersGenerate {
    message: string;
}

export class BuildersMessage{
    private message: string = '';

    addMessage(message?: string){
        this.message = message || faker.lorem.text().slice(0, 140)
        return this
    }

    generate(){
        return{
            message: this.message
        }
    }

}