import { Selector, t } from 'testcafe';
class ShipToCatalogAddEdit{ //give name to this class
    constructor(){
        this.name = Selector('input').withAttribute('name','inputAttName')
        this.street = Selector('input').withAttribute('name','inputAttSt')
        this.apt = Selector('input').withAttribute('name','inputAttApt')
        this.city = Selector('input').withAttribute('name','inputAttCity')
        this.state = Selector('input').withAttribute('name','inputAttState')
        this.zip = Selector('input').withAttribute('name','AttZIP')
        this.phone = Selector('input').withAttribute('name','AttPhone')
        this.email = Selector('input').withAttribute('name','AttEmail')
        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }
    async fillName(name){
        await t.typeText(this.name,name)
    }
    async fillStreet(street){
        await t.typeText(this.street,street)
    }
    async fillApt(apt){
        await t.typeText(this.apt,apt)
    }
    async fillCity(city){
        await t.typeText(this.city,city)
    }
    async fillState(state){
        await t.typeText(this.state,state)
    }
    async fillZIP(zip){
        await t.typeText(this.zip,zip)
    }
    async fillPhone(phone){
        await t.typeText(this.phone,phone)
    }
    async fillEmail(email){
        await t.typeText(this.email,email)
    }
    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new ShipToCatalogAddEdit