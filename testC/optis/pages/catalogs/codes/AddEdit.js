import { Selector, t } from 'testcafe';
class CodesCatalogAddEdit{ //give name to this class
    constructor(){
        this.status = Selector('input').withAttribute('name','Status')
        this.description = Selector('textarea').withAttribute('name','Description')
        this.container = Selector('col-sm-10')
        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async fillStatus(status){
        await t.typeText(this.status,status)
    }
    async fillDescription(description){
        await t.typeText(this.description,description)
    }
    async SelectColorStatus(ColorStatus){
        await t.click(this.container.find('button').withAttribute('name',ColorStatus))
    }

    async SelectIcon(icon){
        await t.click(this.container.find('button').withAttribute('name',icon))
    }

    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new CodesCatalogAddEdit