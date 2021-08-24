import { Selector, t } from 'testcafe';
class Roles{
    constructor(){
        this.create_btn = Selector('a').withAttribute('href','#!/usermanagement/role/add')
        this.optionRow = Selector('div').withAttribute('class','ui-grid-row ng-scope')
    }

    async clickCreate(){
        await t.click(this.create_btn).wait(3000)
    }

    async clickManageforOption(optionName){
        await t.click(this.optionRow.find('div').withExactText(optionName)
        .sibling('div')
            .find('button').withAttribute('onclick','EditPath(id)')).wait(10000)
    }
}
export default new Roles