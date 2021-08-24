import { Selector, t } from 'testcafe';
class PurchaseOrders {
    constructor () {
        this.number = Selector('input.form-control').withAttribute('name', 'Number')
        this.address = Selector('input.form-control').withAttribute('name', 'DeliveryAddressStreet1')
        this.zip = Selector('input.form-control').withAttribute('name', 'DeliveryZIP')
        this.city = Selector('input.form-control').withAttribute('name', 'DeliveryCity')
        this.state = Selector('input.form-control').withAttribute('name', 'State')
        this.country = Selector('input.form-control').withAttribute('name', 'Country')
        this.uomSelect = Selector('select').withAttribute('name', 'UoMId')
        this.uomOption = this.uomSelect.find('option')
        this.clientSelect = Selector('select').withAttribute('name', 'ClientId')
        this.clientOption = this.clientSelect.find('option')
        this.save_btn = Selector('submit')
    }

    async fillNumber (number) {
        await t.typeText(this.number,number)
    }

    async fillAddress (address) {
        await t.typeText(this.address,address)
    }
    
    async fillZIP (zip) {
        await t.typeText(this.zip,zip)
    }

    async fillCity (city) {
        await t.typeText(this.city,city)
    }

    async fillState (state) {
        await t.typeText(this.state,state)
    }

    async fillCountry (country) {
        await t.typeText(this.country,country)
    }

    async selectUoM(uom){
        await t.click(this.uom).click(this.uomOption.withText(uom))
    }

    async selectClient(client){
        await t.click(this.clientSelect).click(this.clientOption.withText(client))
    }

    async pressSave () {
        await t.click(this.save_btn)
    }
}
export default new PurchaseOrders