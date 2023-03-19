export class CategoryPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "Products"
    click_category_menu = "Categories"
    click_AddCategory_button = "//body[1]/div[2]/div[1]/div[3]/div[3]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/button[1]"
    input_Category_Name = "#category-name"
    submit_Category_name = "//div[contains(text(),'Add')]"

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