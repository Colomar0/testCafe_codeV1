import { Selector, t } from 'testcafe';

class Login {
    constructor() {
        this.username = Selector('input.form-control').withAttribute('name', 'username')
        this.password = Selector('input.form-control').withAttribute('name', 'password')
        this.companycode = Selector('input.form-control').withAttribute('name', 'companycode')
        this.submit_btn = Selector('button').withExactText('Log in')
    }

    async logInPage(username,companyCode,password){
        await t.typeText(this.username, username)
        await t.typeText(this.password, password)
        await t.typeText(this.companycode, companyCode)
        await t.click(this.submit_btn)
    }
}

export default new Login