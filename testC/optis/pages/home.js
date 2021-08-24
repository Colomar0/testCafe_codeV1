import { Selector, t } from 'testcafe';

class Home {
    /*constructor(){

        this.parts = Selector ('a').withAttribute('class','fa fa-cogs')
        this.partsViewAll = Selector('a').withAttribute('href','#!/parts/')

        //Admin
        this.admin = Selector('a').withExactText('Admin')
        this.users = Selector('a').withAttribute('href','#!/usermanagement/user')
        this.roles = Selector('a').withAttribute('href','#!/usermanagement/role')
        this.modules = Selector('a').withAttribute('href','#!/usermanagement/module')
        this.usersupervisor = Selector('a').withAttribute('href','#!/usermanagement/usersupervisor')
        this.operators = Selector('a').withAttribute('href','#!/operators')
        this.workflowsetup = Selector('a').withAttribute('href','#!/workflow')
        this.manualPOClose = Selector('a').withAttribute('href','#!/purchaseorders/close')
        this.manualWOClose = Selector('a').withAttribute('href','#!/workorder/close')
        this.sections = Selector('a').withAttribute('href','#!/sections')

        //Catalogs
        //#region catalogs
        this.operationtypeCatalog = Selector('a').withAttribute('href','#!/catalogs/operationtype/')
        this.partclassCatalog = Selector('a').withAttribute('href','#!/catalogs/partclass/')
        this.statusCatalog = Selector('a').withAttribute('href','#!/catalogs/status')
        this.supplierCatalog = Selector('a').withAttribute('href','#!/catalogs/supplier')
        this.tooltypeCatalog = Selector('a').withAttribute('href','#!/catalogs/tooltype')
        this.uomCatalog = Selector('a').withAttribute('href','#!/catalogs/uofm')
        this.eventtypeCatalog = Selector('a').withAttribute('href','#!/catalogs/eventtype')
        this.ncractionCatalog = Selector('a').withAttribute('href','#!/catalogs/ncraction')
        this.nctypeCatalog = Selector('a').withAttribute('href','#!/catalogs/nctype')
        this.materialtypeCatalog = Selector('a').withAttribute('href','#!/catalogs/materialtype')
        this.materialsCatalog = Selector('a').withAttribute('href','#!/catalogs/materials/')
        this.machinesCatalog = Selector('a').withAttribute('href','#!/catalogs/machine')
        this.shiptoCatalog = Selector('a').withAttribute('href','#!/catalogs/shipto')
        this.codesCatalog = Selector('a').withAttribute('href','#!/catalogs/code')
        this.gateconfCatalog = Selector('a').withAttribute('href','#!/catalogs/gate')
        this.gateitemCatalog = Selector('a').withAttribute('href','#!/catalogs/gate/item')
        this.warehouseCatalog = Selector('a').withAttribute('href','#!/catalogs/warehouse')
        this.locationsCatalog = Selector('a').withAttribute('href','#!/catalogs/locations')
        this.racksCatalog = Selector('a').withAttribute('href','#!/catalogs/racks')
        this.ncsubtypesCatalog = Selector('a').withAttribute('href','#!/catalogs/ncsubtype/')
        this.partattributesCatalog = Selector('a').withAttribute('href','#!/catalogs/partattributes/')
        this.partsecattributesCatalog = Selector('a').withAttribute('href','#!/catalogs/partsecattributes/')
        this.parttertiaryattributesCatalog = Selector('a').withAttribute('href','#!/catalogs/parttercattributes/')
        this.costcentersCatalog = Selector('a').withAttribute('href','#!/catalogs/costcenters')
        //#endregion
    }*/
    //general navigation
    async selectMenu(section,subSection){
        await t.click(Selector('a').withExactText(section)).wait(500)
        await t.click(Selector('a').withAttribute('href','#!/'+section.toLowerCase() +'/'+subSection.toLowerCase()+'/')).wait(3000)
    }
}
export default new Home