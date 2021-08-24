import Login from '../../pages/login'
import Home from '../../pages/home'
import NCRActionCatalogView from '../../pages/catalogs/nctype/view'
import NCRActionCatalogAddEdit from '../../pages/catalogs/nctype/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create nc action', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectNCTypeCatalog()
        await NCRActionCatalogView.clickCreate()
        await NCRActionCatalogAddEdit.fillName(testname)
        await NCRActionCatalogAddEdit.fillDescription(testdescription)
        await NCRActionCatalogAddEdit.toggleActive()
        await NCRActionCatalogAddEdit.pressSave()
        await t.expect(NCRActionCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
   })