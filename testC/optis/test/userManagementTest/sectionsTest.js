import Login from '../../pages/login'
import Home from '../../pages/home'
import Sections from '../pages/sections'
import sectionsAdd from "../pages/sectionsAdd"

fixture('Operoute')
    .page('https://localhost:3030/login')

test.skip('Create section', async t => {
    await Login.fillUsername('abonillas@optimumturbines.com')
    await Login.fillPassword('p@ssw0rd123!')
    await Login.fillCompanyCode('3BBGCD')
    await Login.pressSubmit()
    await Home.selectAdmin()
    await Home.selectSections()
    await Sections.clickCreate()
    await sectionsAdd.fillName('Automated test')
    await sectionsAdd.selectRole('0')
    await sectionsAdd.pressSave()
    await t.expect(Sections.createSection_btn.exists).ok('Prueba fallida: No se regresó a la lista de secciones, comprobar errores')
})

test('Edit section', async t => {
    await Login.fillUsername('abonillas@optimumturbines.com')
    await Login.fillPassword('p@ssw0rd123!')
    await Login.fillCompanyCode('3BBGCD')
    await Login.pressSubmit()
    await Home.selectAdmin()
    await Home.selectSections()
    await Sections.clickManageforSectiom('Manual Test Edit')
    // await sections.clickManage('38')
    await sectionsAdd.Rename('Automated edit')
    await sectionsAdd.pressSave()
    await t.expect(Sections.createSection_btn.exists).ok('Prueba fallida: No se regresó a la lista de secciones, comprobar errores')
})

test.skip('Disable section', async t => {
    await Login.fillUsername('abonillas@optimumturbines.com')
    await Login.fillPassword('p@ssw0rd123!')
    await Login.fillCompanyCode('3BBGCD')
    await Login.pressSubmit()
    await Home.selectAdmin()
    await Home.selectSections()
    await Sections.clickManage('38')
    await sectionsAdd.toggleActive()
    await sectionsAdd.pressSave()
    await t.expect(Sections.createSection_btn.exists).ok('Prueba fallida: No se regresó a la lista de secciones, comprobar errores')
    //await t.expect(Selector('button').withAttribute('id','false').exists).ok('La sección no se muestra como inactiva en la lista')
})