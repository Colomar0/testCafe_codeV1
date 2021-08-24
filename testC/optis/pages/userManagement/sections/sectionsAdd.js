import { Selector, t } from 'testcafe';
class SectionsAdd{
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.roleSelect = Selector('div').withAttribute('id','inputRoles_chosen')
        this.roleOption = Selector('li')
        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }

    async fillName(name){
        await t.typeText(this.name,name)
    }

    async Rename(newName){
        await t.click(this.name).pressKey('ctrl+a delete')
        await t.typeText(this.name,newName)
    }

    async selectRole(role){
        await t.click(this.roleSelect).click(this.roleOption.withAttribute('data-option-array-index',role))
    }

    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new SectionsAdd