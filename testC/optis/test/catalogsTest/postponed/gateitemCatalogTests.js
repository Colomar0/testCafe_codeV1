import Login from '../../../pages/login'
import Home from '../../../pages/home'
import GateItemCatalogView from '../../../pages/catalogs/gateitem/view'
import GateItemCatalogAddEdit from '../../../pages/catalogs/gateitem/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create gate item', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectGateItemCatalog()
        await GateItemCatalogView.clickCreate()
        await GateItemCatalogAddEdit.fillName(testname)
        await GateItemCatalogAddEdit.fillDescription(testdescription)
        await GateItemCatalogAddEdit.toggleActive()
        await GateItemCatalogAddEdit.pressSave()
        await t.expect(GateItemCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
   })