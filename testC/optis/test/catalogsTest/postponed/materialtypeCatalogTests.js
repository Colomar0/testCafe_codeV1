import Login from '../../../pages/login'
import Home from '../../../pages/home'
import MaterialTypeCatalogView from '../../../pages/catalogs/materialtype/view'
import MaterialTypeCatalogAddEdit from '../../../pages/catalogs/materialtype/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create material type', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectMaterialTypeCatalog()
        await MaterialTypeCatalogView.clickCreate()
        await MaterialTypeCatalogAddEdit.fillName(testname)
        await MaterialTypeCatalogAddEdit.fillDescription(testdescription)
        await MaterialTypeCatalogAddEdit.toggleActive()
        await MaterialTypeCatalogAddEdit.pressSave()
        await t.expect(MaterialTypeCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
   })