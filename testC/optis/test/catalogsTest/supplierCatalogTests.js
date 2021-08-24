import Login from '../../pages/login'
import Home from '../../pages/home'
import SupplierCatalogView from '../../pages/catalogs/supplier/view'
import SupplierCatalogAddEdit from '../../pages/catalogs/supplier/AddEdit'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create supplier', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectSupplierCatalog()
        await SupplierCatalogView.clickCreate()
        await SupplierCatalogAddEdit.fillBusinessName('')
        await SupplierCatalogAddEdit.fillTradeName('')
        await SupplierCatalogAddEdit.fillAddress('')
        await SupplierCatalogAddEdit.fillCity('')
        await SupplierCatalogAddEdit.fillState('')
        await SupplierCatalogAddEdit.clickCountrySelect()
        await SupplierCatalogAddEdit.clickCountryOption('')
        await SupplierCatalogAddEdit.fillContactName('')
        await SupplierCatalogAddEdit.fillcontactPhone('')
        await SupplierCatalogAddEdit.fillcontactEmail('')
        await SupplierCatalogAddEdit.fillTaxId('')
        await SupplierCatalogAddEdit.fillApt('')
        await SupplierCatalogAddEdit.fillZIP('')

        await SupplierCatalogAddEdit.clickDropdown()
        await SupplierCatalogAddEdit.fillBeneficiaryName('')
        await SupplierCatalogAddEdit.fillBank('')
        await SupplierCatalogAddEdit.fillBankAddress('')
        await SupplierCatalogAddEdit.fillAccountNumber('')
        await SupplierCatalogAddEdit.fillCLABE('')
        await SupplierCatalogAddEdit.fillSWIFT('')
        await SupplierCatalogAddEdit.fillABA('')
        await SupplierCatalogAddEdit.fillPaymentTerms('')

        await SupplierCatalogAddEdit.toggleActive()
        await SupplierCatalogAddEdit.pressSave()

        await t.expect(SupplierCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')

    })