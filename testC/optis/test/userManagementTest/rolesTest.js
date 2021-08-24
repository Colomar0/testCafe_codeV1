import Login from '../../pages/login'
import Home from '../../pages/home'
import Roles from '../pages/admin/roles'
import RolesAddEdit from '../pages/admin/rolesAddEdit'

const testname = ''

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create role', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectRoles()
        await Roles.clickCreate()
        await RolesAddEdit.fillName(testname)
        await RolesAddEdit.fillDescription('Automated test 001')
        await RolesAddEdit.canApproveMaterials()
        await RolesAddEdit.canApproveParts()
        await RolesAddEdit.pressSave()
        await t.expect(Roles.create_btn.exists).ok('No se regresó a la vista principal, revisar errores')
    })

    test('Edit role', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectRoles()
        await Roles.clickManageforOption(testname)
        await RolesAddEdit.ChangeDescription('Automated Test 1')
        await RolesAddEdit.canApproveMaterials()
        await RolesAddEdit.canStampOperations()
        await RolesAddEdit.pressSave()
        await t.expect(Roles.create_btn.exists).ok('No se regresó a la vista principal, revisar errores')        
        
    })