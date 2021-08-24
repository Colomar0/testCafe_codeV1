import Login from '../../../pages/login'
import Home from '../../../pages/home'
import WarehouseCatalogView from '../../../pages/catalogs/warehouse/view'
import WarehouseCatalogAddEdit from '../../../pages/catalogs/warehouse/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create warehouse', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectWarehouseCatalog()
        await WarehouseCatalogView.clickCreate()
        await WarehouseCatalogAddEdit.fillName(testname)
        await WarehouseCatalogAddEdit.fillDescription(testdescription)
        await WarehouseCatalogAddEdit.toggleActive()
        await WarehouseCatalogAddEdit.pressSave()
        await t.expect(WarehouseCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
   })