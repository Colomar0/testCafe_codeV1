import { Selector, t } from 'testcafe';
class departmentEditView {
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.description = Selector('input').withAttribute('id','inputDescription')
        this.is_active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async fillName(name){
        await t.typeText(this.name,name)
    }

    async fillDescription(description){
        await t.typeText(this.description,description)
    }

    async toggleIsActive(){
        await t.click(this.is_active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }

    async changeName(newName){
        await t.click(this.name).pressKey('ctrl+a delete')
        await t.typeText(this.name,newName)
    }

    async changeDescription(newDescription){
        await t.click(this.description).pressKey('ctrl+a delete')
        await t.typeText(this.description,newDescription)
    }
}
export default new departmentEditView