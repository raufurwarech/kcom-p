export class UnitPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "Products"
    click_Unit_menu = "Units"
    click_AddUnit_button = "//body[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/span[1]"
    input_Unit_Name = "#autosuggest__input"
    submit_unit_name = "[class='btn mr-2 btn-primary']"

    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to brand page
    clickProductMenu(){
        cy.contains(this.click_Product_Menu).click()

    }
    
    clickUnitMenu(){
        cy.contains(this.click_Unit_menu).click()
    }
    
    clickAddUnit(){
        cy.xpath(this.click_AddUnit_button).click()
        
    }

    // Add brand input fields
    inputUnitName(brandname){
        cy.get(this.input_Unit_Name).should("be.visible").type(brandname)

    }

    submitUnitname(){
        cy.get(this.submit_unit_name).click()

    }



}