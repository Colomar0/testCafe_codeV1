import Login from '../../pages/login'
import Home from '../../pages/home'
import Modules from "../pages/modules"
import ModulesAddEdit from "../pages/modulesAddEdit"

fixture('Operoute')
    .page('https://localhost:3030/login')

    test('Create module', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectModules()
        await Modules.clickCreate()
        await ModulesAddEdit.fillName('Automated module name')
        await ModulesAddEdit.fillDescription('Automated description')
        await ModulesAddEdit.toggleActive()
        await ModulesAddEdit.pressSave()
    })

    test.skip('Edit module', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectModules()
    })

    test.skip('Disable module', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectModules()
        //Call to click manage on selected module will go here
        await ModulesAddEdit.toggleActive()
        await ModulesAddEdit.pressSave()
    })

    test.skip('Full Modules test', async t => {
        await Login.fillUsername('abonillas@optimumturbines.com')
        await Login.fillPassword('p@ssw0rd123!')
        await Login.fillCompanyCode('3BBGCD')
        await Login.pressSubmit()
        await Home.selectAdmin()
        await Home.selectModules()
        await Modules.clickCreate()
        await ModulesAddEdit.fillName('Automated module name')
        await ModulesAddEdit.fillDescription('Automated description')
        await ModulesAddEdit.toggleActive()
        await ModulesAddEdit.pressSave()
    })