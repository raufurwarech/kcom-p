export class BrandPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "Products"
    click_Brand_menu = "Brands"
    click_AddBrand_button = "//body[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]/div[4]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]/span[1]"
    input_Brand_Name = "#brand-name"
    submit_Brand_name = "div.h-100:nth-child(3) div.vertical-layout.h-100.vertical-menu-modern.menu-expanded.navbar-floating.footer-static div.app-content.content div.content-wrapper div.content-body div.b-sidebar-outer:nth-child(1) div.b-sidebar.shadow.b-sidebar-right.bg-white.text-dark.sidebar-lg:nth-child(2) div.b-sidebar-body span:nth-child(2) form.p-2 div.d-flex.mt-2:nth-child(3) button.btn.mr-2.btn-primary:nth-child(1) > div:nth-child(1)"
 
    
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