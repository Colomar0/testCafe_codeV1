import Login from '../../pages/login'
import Home from '../../pages/home'
import OperationTypeCatalogView from '../../pages/catalogs/operationtypes/view'
import OperationTypeCatalogAddEdit from '../../pages/catalogs/operationtypes/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'
const comments = ''

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create ', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectOperationTypeCatalog()
        await OperationTypeCatalogView.clickCreate()
        await OperationTypeCatalogAddEdit.fillName(testname)
        await OperationTypeCatalogAddEdit.fillDescription(testdescription)
        await OperationTypeCatalogAddEdit.fillComments(comments)
        await OperationTypeCatalogAddEdit.toggleActive()
        await OperationTypeCatalogAddEdit.pressSave()
        await t.expect(OperationTypeCatalogView.create_btn.exists).ok('No se regresó a la vista principal')
    })