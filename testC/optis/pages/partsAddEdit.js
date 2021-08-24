import { doc } from 'prettier';
import { Selector, t } from 'testcafe';
class PartsAddEdit {
    constructor(){
        this.number = Selector('input.form-control').withAttribute('name', 'Number')
        this.description = Selector('input.form-control').withAttribute('name', 'Description')
        this.issue = Selector('input.form-control').withAttribute('name', 'Issue')
        this.price = Selector('input.form-control').withAttribute('name', 'PricePerUnit')
        this.docnumber = Selector('input.form-control').withAttribute('name', 'DocNum')
        this.filedesc = Selector('input.form-control').withAttribute('name', 'FileDescription')
        this.version = Selector('input.form-control').withAttribute('name', 'Version')
        this.clientSelect = Selector('select').withAttribute('name', 'ClientId')
        this.clientOption = this.clientSelect.find('option')
        this.classificationSelect = Selector('select').withAttribute('name', 'Classification')
        this.classificationOption = this.clientSelect.find('option')
        this.save_btn = Selector('submit')
    }

    async fillNumber (number) {
        await t.typeText(this.number,number)
    }

    async fillDescription(description){
        await t.typeText(this.description,description)
    }

    async fillIssue(issue){
        await t.typeText(this.issue,issue)
    }

    async fillPrice(price){
        await t.typeText(this.price,price)
    }

    async fillDocNumber(docnumber){
        await t.typeText(this.docnumber,docnumber)
    }

    async fillFileDescription(filedesc) {
        await t.typeText(this.filedesc,filedesc)
    }

    async fillVersion(version){
        await t.typeText(this.version,version)
    }

    async selectClient(client){
        await t.click(this.clientSelect).click(this.clientOption.withText(client))
    }

    async selectClassification(classification){
        await t.click(this.classificationSelect).click(this.classificationOption.withText(classification))
    }

    async pressSave () {
        await t.click(this.save_btn)
    }
}
export default new PartsAddEdit