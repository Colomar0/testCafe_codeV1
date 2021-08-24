import Login from '../../pages/login'
import Home from '../../pages/home'
import EventTypeCatalogView from '../../pages/catalogs/eventtype/view'
import EventTypeCatalogAddEdit from '../../pages/catalogs/eventtype/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create event type', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectEventTypeCatalog()
        await EventTypeCatalogView.clickCreate()
        await EventTypeCatalogAddEdit.fillName(testname)
        await EventTypeCatalogAddEdit.fillDescription(testdescription)
        await EventTypeCatalogAddEdit.toggleActive()
        await EventTypeCatalogAddEdit.pressSave()
        await t.expect(EventTypeCatalogView.create_btn.exists).ok('No se regresó a la pantalla principal')
   })