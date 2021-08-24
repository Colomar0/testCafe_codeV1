import { Selector, t } from 'testcafe';
class { //give name to this class
    constructor(){

        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }

    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new classname