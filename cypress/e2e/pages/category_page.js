export class CategoryPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "Products"
    click_category_menu = "Categories"
    click_AddCategory_button = "//body[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]"
    input_Category_Name = "#category-name"
    submit_Category_name = "div.h-100:nth-child(3) div.vertical-layout.h-100.vertical-menu-modern.menu-expanded.navbar-floating.footer-static div.app-content.content div.content-wrapper div.content-body div.b-sidebar-outer:nth-child(1) div.b-sidebar.shadow.b-sidebar-right.bg-white.text-dark.sidebar-lg:nth-child(2) div.b-sidebar-body span:nth-child(2) form.p-2 div.d-flex.mt-2:nth-child(3) button.btn.mr-2.btn-primary:nth-child(1) > div:nth-child(1)"

    // Login application
    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // Go to category page 

    clickProductMenu(){
        cy.contains(this.click_Product_Menu).click()

    }
    
    clickCategoryMenu(){
        cy.contains(this.click_category_menu).click()
    }
    
    clickAddCategory(){
        cy.xpath(this.click_AddCategory_button).click()
        
    }

    // Add category in put fields 
    inputCategoryName(categoryname){
        cy.get(this.input_Category_Name).should("be.visible").type(categoryname)

    }

    submitCategoryname(){
        cy.xpath(this.submit_Category_name).click()

    }



}