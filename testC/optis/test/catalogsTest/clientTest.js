import { 
    companyId, 
    adminEmail, 
    adminPassword, 
    testNameTag, 
    operoute, 
    postDescription, 
    putDescription, 
    deleteDescription
} from '../../helpers'
import Login from '../../pages/login'
import Home from '../../pages/home'
import clientListView from '../../pages/catalogs/clients/listView'
import clientEditView from '../../pages/catalogs/clients/editView'

const section = 'Catalogs'
const subSection = 'Client'
const testName = testNameTag + subSection + '8' // where the number is the iteration no. of this particular test
const testNewName = testNameTag + subSection + '8.1'

fixture`Test Clients`
    .page(operoute)

    test('Create client', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await clientListView.clickCreate()
        await clientEditView.editName(testName)
        await clientEditView.editDescription(postDescription)
        await clientEditView.toggleIsActive()
        await clientEditView.pressSave()
        await t.expect(clientListView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Edit client', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await clientListView.clickManage(testName)
        await clientEditView.editName(testNewName)
        await clientEditView.editDescription(putDescription)
        await clientEditView.pressSave()
        await t.expect(clientListView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Deactivate client', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await clientListView.clickManage(testNewName)
        await clientEditView.editDescription(deleteDescription)
        await clientEditView.toggleIsActive()
        await clientEditView.pressSave()
        await t.expect(clientListView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })