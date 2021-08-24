import Login from '../../pages/login'
import Home from '../../pages/home'
import MachinesCatalogView from '../../pages/catalogs/machines/view'
import MachinesCatalogAddEdit from '../../pages/catalogs/machines/AddEdit'

const testname = 'Test'
const testdescription = 'T001A'
const machinenumber = ''

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create ', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectCatalogs()
        await Home.selectMachinesCatalog()
        await MachinesCatalogView.clickCreate()
        await MachinesCatalogAddEdit.fillName(testname)
        await MachinesCatalogAddEdit.fillDescription(testdescription)
        await MachinesCatalogAddEdit.fillMachineNumber(machinenumber)
        await MachinesCatalogAddEdit.toggleActive()
        // await MachinesCatalogAddEdit.toggleMaintenance()
        await MachinesCatalogAddEdit.pressSave()
        await t.expect(MachinesCatalogView.create_btn.exists).ok('No se regresó a la vista principal')
    })