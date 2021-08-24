import { Selector, t } from 'testcafe';
class Operators{
    constructor(){
        this.name = Selector('input.form-control').withAttribute('name', 'Name')
        this.employeenumber = Selector('input.form-control').withAttribute('name', 'EmployeeNumber')
        this.supervisorSelect = Selector('select').withAttribute('name', 'SupervisorKey')
        this.supervisorOption = this.supervisorSelect.find('option')
    }

    async fillName(name){
        await t.typeText(this.name,name)
    }

    async fillEmployeeNumber(employeenumber){
        await t.typeText(this.employeenumber,employeenumber)
    }

    async selectSupervisor(supervisor){
        await t.click(this.supervisorSelect).click(this.supervisorOption.withText(supervisor))
    }
}
export default new Operators