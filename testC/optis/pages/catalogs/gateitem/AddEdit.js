import { Selector, t } from 'testcafe';
class GateItemCatalogAddEdit{ //give name to this class
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.description = Selector('input').withAttribute('id','inputDescription')
        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async fillName(name){
        await t.typeText(this.name,name)
    }

    async fillDescription(description){
        await t.typeText(this.description,description)
    }
    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new GateItemCatalogAddEdit