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
import departmentLisView from '../../pages/catalogs/departments/listView'
import departmentEditView from '../../pages/catalogs/departments/editView'

const section = 'Catalogs'
const subSection = 'Department'
const testName = testNameTag + subSection + '3' // where the number is the iteration no. of this particular test
const testNewName = testNameTag + subSection + '3.1'

fixture('Test Department')
    .page(operoute)

    test('Create department', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await departmentLisView.clickCreate()
        await departmentEditView.fillName(testName)
        await departmentEditView.fillDescription(postDescription)
        await departmentEditView.toggleIsActive()
        await departmentEditView.pressSave()
        await t.expect(departmentLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Edit department', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await departmentLisView.clickManage(testName)
        await departmentEditView.changeName(testNewName)
        await departmentEditView.changeDescription(putDescription)
        await departmentEditView.pressSave()
        await t.expect(departmentLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Deactivate department', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await departmentLisView.clickManage(testNewName)
        await departmentEditView.changeDescription(deleteDescription)
        await departmentEditView.toggleIsActive()
        await departmentEditView.pressSave()
        await t.expect(departmentLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })