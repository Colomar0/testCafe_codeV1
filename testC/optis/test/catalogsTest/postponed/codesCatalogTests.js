import Login from '../../../pages/login'
import Home from '../../../pages/home'
import CodesCatalogView from '../../../pages/catalogs/codes/view'
import CodesCatalogAddEdit from '../../../pages/catalogs/codes/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'
const colorstatus = ''
const icon = ''

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create ', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectCodesCatalog()
        await CodesCatalogView.clickCreate()
        await CodesCatalogAddEdit.fillStatus(testname)
        await CodesCatalogAddEdit.fillDescription(testdescription)
        await CodesCatalogAddEdit.SelectColorStatus(colorstatus)
        await CodesCatalogAddEdit.SelectIcon(icon)
        await CodesCatalogAddEdit.toggleActive()
        await CodesCatalogAddEdit.pressSave()
        await t.expect(CodesCatalogView.create_btn.exists).ok('No se regresó a la vista principal')
    })