import Login from '../../pages/login'
import Home from '../../pages/home'
import PartClassCatalogView from '../../pages/catalogs/partclass/view'
import PartClassCatalogAddEdit from '../../pages/catalogs/partclass/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create part classification', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectPartClassCatalog()
        await PartClassCatalogView.clickCreate()
        await PartClassCatalogAddEdit.fillName(testname)
        await PartClassCatalogAddEdit.fillDescription(testdescription)
        await PartClassCatalogAddEdit.toggleActive()
        await PartClassCatalogAddEdit.pressSave()
        await t.expect(PartClassCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })