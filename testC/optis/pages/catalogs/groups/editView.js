import { Selector, t } from 'testcafe';
class groupEditView{ 
    constructor(){
        this.name = Selector('input').withAttribute('id','inputName')
        this.is_active = Selector('input').withAttribute('type','checkbox')
        this.dropdown = Selector('a').withAttribute('data-target','#step3')
        this.user_row = Selector('tr').withAttribute('class','ng-scope')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async editName(name){
        await t.typeText(this.name, name, { replace: true })
    }

    async toggleIsActive(){
        await t.click(this.is_active)
    }

    async clickDropdown(){
        await t.click(this.dropdown.find('i').withAttribute('class','fa fa-chevron-down')).wait(500)
    }

    async selectUserwithEmail(email){
        await t.click(this.user_row.find('td').withExactText(email)
        .sibling('td')
            .find('input').withAttribute('type','checkbox'))
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new groupEditView