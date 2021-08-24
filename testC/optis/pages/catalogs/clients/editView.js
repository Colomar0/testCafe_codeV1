import { Selector, t } from 'testcafe';
class clientEditView { //give name to this class
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.description = Selector('input').withAttribute('id','inputDescription')
        this.is_active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }

    async editName(name){
        await t.typeText(this.name, name, { replace: true })
    }

    async editDescription(description){
        await t.typeText(this.description, description, { replace: true })
    }

    async toggleIsActive(){
        await t.click(this.is_active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new clientEditView