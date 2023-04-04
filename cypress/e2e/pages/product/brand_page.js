export class BrandPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "[class='feather feather-layers']"
    click_Brand_menu = "Brands"
    click_AddBrand_button = "//body[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/span[1]"
    input_Brand_Name = "#brand-name"
    submit_Brand_name = "[class='btn mr-2 btn-primary']"
 
    
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
    
    clickBrandMenu(){
        cy.contains(this.click_Brand_menu).click()
    }
    
    clickAddBrand(){
        cy.xpath(this.click_AddBrand_button).click()
        
    }

    // Add brand input fields
    inputBrnadName(brandname){
        cy.get(this.input_Brand_Name).should("be.visible").type(brandname)

    }

    submitBrandname(){
        cy.get(this.submit_Brand_name).click()

    }



}