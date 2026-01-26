import {BuildersFactory, BuildersGenerate} from "../buldersCreds/buildersCreds";
import { faker as faker } from '@faker-js/faker'

export interface AdminMenuData extends BuildersGenerate {
    userRole: string;
    status: string;
    employeeName: string;
    userName: string;
}

export class BuildersAdminMenu extends BuildersFactory{
    private userRole: string = '';
    private status: string = '';
    private employeeName: string = '';
    private userName: string = '';

    readonly roleList = ['Admin', 'ESS']
    readonly statusList = ['Enabled', 'Disabled'];
    readonly employeeListAlphabet =   ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N','O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']

    withUserRole(role?: string){
        const randomNumberRoleList = Math.floor(Math.random()* this.roleList.length);
        this.userRole = role || this.roleList[randomNumberRoleList]
        return this
    }

    withStatus(status?: string){
        const randomNumberStatusList = Math.floor(Math.random()* this.statusList.length);
        this.status = status || this.statusList[randomNumberStatusList];
        return this
    }

    withEmployeeName(employeeName?: string){
        const employeeNameL =  Math.floor(Math.random() * this.employeeListAlphabet.length)
        this.employeeName = employeeName || this.employeeListAlphabet[employeeNameL]
        return this
    }
    withUserName(userName?: string){
        this.userName = faker.internet.displayName()
        return this
    }

    generate(): AdminMenuData{
        const randomNumberRoleList = Math.floor(Math.random() * this.roleList.length);
        const randomNumberStatusList = Math.floor(Math.random() * this.statusList.length);

        const base = super.generate()
        return {
            ...base,
            userRole: this.roleList[randomNumberRoleList],
            userName: this.userName,
            status: this.statusList[randomNumberStatusList],
            employeeName: this.employeeName
        }
    }

}