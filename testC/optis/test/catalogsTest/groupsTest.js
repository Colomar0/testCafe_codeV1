import { companyId, adminEmail, adminPassword, engineerEmail, testNameTag, operoute } from '../../helpers'
import Login from '../../pages/login'
import Home from '../../pages/home'
import groupLisView from '../../pages/catalogs/groups/listView'
import groupEditView from '../../pages/catalogs/groups/editView'

const section = 'Catalogs'
const subSection = 'Group'
const testName = testNameTag + subSection + '2' // where the number is the iteration no. of this particular test
const testNewName = testNameTag + subSection + '2.1'
const testDeletedName = testNameTag + subSection + '2.1.1'

fixture('Test Group')
    .page(operoute)

    test('Create group', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await groupLisView.clickCreate()
        await groupEditView.editName(testName)
        await groupEditView.toggleIsActive()
        await groupEditView.clickDropdown()
        await groupEditView.selectUserwithEmail(adminEmail)
        await groupEditView.pressSave()
        await t.expect(groupLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Edit group', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await groupLisView.clickManage(testName)
        await groupEditView.editName(testNewName)
        await groupEditView.clickDropdown()
        await groupEditView.selectUserwithEmail(engineerEmail)
        await groupEditView.pressSave()
        await t.expect(groupLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })

    test('Deactivate group', async t => {
        await Login.logInPage(adminEmail,companyId,adminPassword)
        await Home.selectMenu(section, subSection)
        await groupLisView.clickManage(testNewName)
        await groupEditView.editName(testDeletedName)
        await groupEditView.toggleIsActive()
        await groupEditView.pressSave()
        await t.expect(groupLisView.create_btn.exists).ok('No se regresó a la pantalla principal')
    })