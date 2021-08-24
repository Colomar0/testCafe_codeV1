import { Selector, t } from 'testcafe';
class Sections {
    constructor(){
        this.createSection_btn = Selector('a').withAttribute('href','#!/sections/add')
        this.sectionRow = Selector('div').withAttribute('class','ui-grid-row ng-scope')
    }

    async clickCreate(){
        await t.click(this.createSection_btn).wait(1000)
    }

    async clickManageforSectiom(sectionName){
        await t.click(this.sectionRow.find('div').withExactText(sectionName)
            .sibling('div')
                .find('button').withAttribute('onclick','EditPath(id)')).wait(10000)
    }
}
export default new Sections