import { Selector, t } from 'testcafe';
class SupplierCatalogAddEdit{ //give name to this class
    constructor(){
        //#region general info selectors
        this.businessname = Selector('input').withAttribute('id','inputName')
        this.tradename = Selector('input').withAttribute('id','inputDescription')
        this.address = Selector('input').withAttribute('id','inputAddress')
        this.city = Selector('input').withAttribute('id','inputCity')
        this.state = Selector('input').withAttribute('id','inputState')
        this.country_select = Selector('span').withAttribute('aria-labelledby','select2-inputCountry-container')
        this.country_option = Selector('ul').withAttribute('id','select2-inputCountry-results')
        this.contactname = Selector('input').withAttribute('name','inputContactName')
        this.contactphone = Selector('input').withAttribute('name','inputContactPhone')
        this.contactemail = Selector('input').withAttribute('name','inputContactEmail')
        this.taxid = Selector('input').withAttribute('name','inputTaxId')
        this.apt = Selector('input').withAttribute('name','inputApt')
        this.zip = Selector('input').withAttribute('name','inputZIP')
        //#endregion
        //#region bank info selectors
        this.dropdown = Selector('i').withAttribute('class','fa fa-chevron-down')
        this.beneficiaryname = Selector('input').withAttribute('name','inputBeneficiaryName')
        this.bank = Selector('input').withAttribute('name','inputBank')
        this.bankaddress = Selector('input').withAttribute('name','inputBankAddress')
        this.accountnumber = Selector('input').withAttribute('name','inputAccountNo')
        this.clabe = Selector('input').withAttribute('name','inputCLABE')
        this.swift = Selector('input').withAttribute('name','inputSWIFT')
        this.aba = Selector('input').withAttribute('name','inputABA')
        this.paymentterms = Selector('textarea').withAttribute('ng-model','vm.item.PaymentTerms')
        //#endregion
        this.active = Selector('input').withAttribute('type','checkbox')
        this.save_btn = Selector('button').withAttribute('type','submit')
    }

    //#region general info functions
    async fillBusinessName(name){
        await t.typeText(this.businessname,name)
    }

    async fillTradeName(tradename){
        await t.typeText(this.tradename,tradename)
    }
    async fillAddress(address){
        await t.typeText(this.address,address)
    }
    async fillCity(city){
        await t.typeText(this.city,city)
    }
    async fillState(state){
        await t.typeText(this.state,state)
    }
    async clickCountrySelect(){
        await t.click(this.country_select).wait(1000)
    }
    async clickCountryOption(country){
        await t.click(this.country_option.find('li').withExactText(country))
    }
    async fillContactName(contactname){
        await t.typeText(this.contactname,contactname)
    }

    async fillcontactPhone(contactphone){
        await t.typeText(this.contactphone,contactphone)
    }

    async fillcontactEmail(contactemail){
        await t.typeText(this.contactemail,contactemail)
    }
    async fillTaxId(taxid){
        await t.typeText(this.taxid,taxid)
    }
    async fillApt(apt){
        await t.typeText(this.apt,apt)
    }
    async fillZIP(zip){
        await t.typeText(this.zip,zip)
    }

    //#endregion
    //#region bank info functions
    async clickDropdown(){
        await t.click(this.dropdown).wait(500)
    }
    async fillBeneficiaryName(beneficiaryname){
        await t.typeText(this.beneficiaryname,beneficiaryname)
    }
    async fillBank(bank){
        await t.typeText(this.bank,bank)
    }
    async fillBankAddress(bankaddress){
        await t.typeText(this.bankaddress,bankaddress)
    }
    async fillAccountNumber(accountnumber){
        await t.typeText(this.accountnumber,accountnumber)
    }
    async fillCLABE(clabe){
        await t.typeText(this.clabe,clabe)
    }
    async fillSWIFT(swift){
        await t.typeText(this.swift,swift)
    }
    async fillABA(aba){
        await t.typeText(this.aba,aba)
    }
    async fillPaymentTerms(paymentterms){
        await t.typeText(this.paymentterms,paymentterms)
    }
    //#endregion
    async toggleActive(){
        await t.click(this.active)
    }

    async pressSave(){
        await t.click(this.save_btn).wait(3000)
    }
}
export default new SupplierCatalogAddEdit