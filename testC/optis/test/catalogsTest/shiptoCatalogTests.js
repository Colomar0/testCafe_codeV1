import Login from '../../pages/login'
import Home from '../../pages/home'
import ShipToCatalogView from '../../pages/catalogs/shipto/view'
import ShipToCatalogAddEdit from '../../pages/catalogs/shipto/AddEdit'

const name = 'Test'
const phone = ''
const email = ''
const street = ''
const apt = ''
const city = ''
const state = ''
const zip = ''

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create ', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectShipToCatalog()
        await ShipToCatalogView.clickCreate()
        await ShipToCatalogAddEdit.fillName(name)
        await ShipToCatalogAddEdit.fillPhone(phone)
        await ShipToCatalogAddEdit.fillEmail(email)
        await ShipToCatalogAddEdit.fillStreet(street)
        await ShipToCatalogAddEdit.fillApt(apt)
        await ShipToCatalogAddEdit.fillCity(city)
        await ShipToCatalogAddEdit.fillState(state)
        await ShipToCatalogAddEdit.fillZIP(zip)
        await ShipToCatalogAddEdit.toggleActive()
        await ShipToCatalogAddEdit.pressSave()
        await t.expect(ShipToCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })