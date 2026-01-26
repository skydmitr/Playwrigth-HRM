import { fakerRU as faker } from '@faker-js/faker'


export interface BuildersGenerate{
    email: string;
    password: string;
}

export class BuildersFactory{
    private email: string = '';
    private password: string = '';

    addCreds(email?: string, password?: string) {
        this.email = email || faker.internet.email();
        this.password = password || faker.internet.password({length: 8});
        return this;
    }

    generate(){
       return {
           email: this.email,
           password: this.password,
       }
    }

}