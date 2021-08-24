import Login from '../../pages/login'
import Home from '../../pages/home'
import StatusCatalogView from '../../pages/catalogs/status/view'
import StatusCatalogAddEdit from '../../pages/catalogs/status/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create status', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectStatusCatalog()
        await StatusCatalogView.clickCreate()
        await StatusCatalogAddEdit.fillName(testname)
        await StatusCatalogAddEdit.fillDescription(testdescription)
        await StatusCatalogAddEdit.toggleActive()
        await StatusCatalogAddEdit.pressSave()
        await t.expect(StatusCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })