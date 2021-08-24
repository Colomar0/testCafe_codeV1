import { Selector, t } from 'testcafe';
class MachinesCatalogAddEdit{ //give name to this class
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.description = Selector('input').withAttribute('id','inputDescription')
        this.machinenumber = Selector('input').withAttribute('id','inputMachineNumber')
        this.active = Selector('input').withAttribute('name','inputActive')
        this.maintenance = Selector('input').withAttribute('name','inputMaintenanceRequired')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async fillName(name){
        await t.typeText(this.name,name)
    }

    async fillDescription(description){
        await t.typeText(this.description,description)
    }
    async fillMachineNumber(machinenumber){
        await t.typeText(this.machinenumber,machinenumber)
    }
    async toggleActive(){
        await t.click(this.active)
    }
    async toggleMaintenance(){
        await t.click(this.maintenance)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }

    async ChangeDescription(newDescription){
        await t.click(this.description).pressKey('ctrl+a delete')
        await t.typeText(this.description,newDescription)
    }
}
export default new MachinesCatalogAddEdit