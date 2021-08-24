import { Selector, t } from 'testcafe';

class Modules {
    constructor(){
        this.createModule_btn = Selector('a').withAttribute('href','#!/usermanagement/module/add')
    }

    async clickCreate(){
        await t.click(this.createModule_btn).wait(1000)
    }
}

export default new Modules