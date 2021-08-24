import { Selector, t } from 'testcafe';
class RolesAddEdit{
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.description = Selector('input').withAttribute('id','inputDescription')
        this.canapproveparts = Selector('input').withAttribute('name','inputCanApproveParts')
        this.canstampoperations = Selector('input').withAttribute('name','inputCanStampOperations')
        this.canapprovematerials = Selector('input').withAttribute('name','inputCanApproveMaterials')
        this.canmodifypoqty = Selector('input').withAttribute('name','inputCanModifyPOQTY')
        this.candeletencr = Selector('input').withAttribute('name','inputCanDeleteNCR')
    }

    async fillName(name){
        await t.typeText(this.name,name)
    }

    async fillDescription(description){
        await t.typeText(this.description,description)
    }

    async canApproveParts(){
        await t.click(this.canapproveparts)
    }

    async canStampOperations(){
        await t.click(this.canstampoperations)
    }

    async canApproveMaterials(){
        await t.click(this.canapprovematerials)
    }

    async canModifyPOQTY(){
        await t.click(this.canmodifypoqty)
    }

    async canDeleteNCR(){
        await t.click(this.candeletencr)
    }

    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }

    async Rename(newName){
        await t.click(this.name).pressKey('ctrl+a delete')
        await t.typeText(this.name,newName)
    }

    async ChangeDescription(NewDescription){
        await t.click(this.description).pressKey('ctrl+a delete')
        await t.typeText(this.description,NewDescription)
    }
}
export default new RolesAddEdit