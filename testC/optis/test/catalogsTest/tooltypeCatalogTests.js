import Login from '../../pages/login'
import Home from '../../pages/home'
import ToolTypeCatalogView from '../../pages/catalogs/tooltypes/view'
import ToolTypeCatalogAddEdit from '../../pages/catalogs/tooltypes/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create tool type', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectToolTypeCatalog()
        await ToolTypeCatalogView.clickCreate()
        await ToolTypeCatalogAddEdit.fillName(testname)
        await ToolTypeCatalogAddEdit.fillDescription(testdescription)
        await ToolTypeCatalogAddEdit.toggleActive()
        await ToolTypeCatalogAddEdit.pressSave()
        await t.expect(ToolTypeCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })