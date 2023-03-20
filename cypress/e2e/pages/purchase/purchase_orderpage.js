export class PurchageOrderPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Purchase_Menu = "Purchase"
    click_PurchaseOrderList_menu = "Purchase Order List"
    click_AddPurchase_button = "New Purchase Order"

    suppliername_dropdown = "#supplier"
    supplier_dropdownList = "li.vs__dropdown-option"

    



    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to Purchase order page
    clickPurchaseMenu(){
        cy.contains(this.click_Purchase_Menu).click()

    }
    
    clickPurchaselistMenu(){
        cy.contains(this.click_PurchaseOrderList_menu).click()
    }
    
    clickAddPurchase(){
        cy.contains(this.click_AddPurchase_button).click()
        
    }

    // Add Purchase order input fields
    

   

    

   
}