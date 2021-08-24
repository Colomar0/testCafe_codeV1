import { Selector, t } from 'testcafe';
class Parts{
    constructor(){
        this.newPart_btn = Selector('a').withAttribute('href','#!/parts/add')
    }

    async addNewPart(){
        await t.click(this.newPart_btn).wait(3000)
    }
}
export default new Parts