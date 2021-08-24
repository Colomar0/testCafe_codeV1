import Login from '../../pages/login'
import Home from '../../pages/home'
import UofMCatalogView from '../../pages/catalogs/uom/view'
import UofMCatalogAddEdit from '../../pages/catalogs/uom/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create unit of measure', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectUoMCatalog()
        await UofMCatalogView.clickCreate()
        await UofMCatalogAddEdit.fillName(testname)
        await UofMCatalogAddEdit.fillDescription(testdescription)
        await UofMCatalogAddEdit.toggleActive()
        await UofMCatalogAddEdit.pressSave()
        await t.expect(UofMCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })