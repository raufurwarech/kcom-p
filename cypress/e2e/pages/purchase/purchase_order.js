export class PurchageOrder {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "[class='btn btn-primary btn-block']"

    purchase_Menu = "[class='feather feather-book-open']"
    purchaseOrder_Menu = "//span[contains(text(),'Purchase Order List')]"
    addPurchase_button = "//a[contains(text(),'New Purchase Order')]"


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
    PurchaseMenu(){
        cy.get(this.purchase_Menu).click()

    }
    
    PurchaseOrderMenu(){
        cy.xpath(this.purchaseOrder_Menu).click()
    }

    addPurchaseButton(){
        cy.xpath(this.addPurchase_button).click()
    }
    

    // Add Purchase order input fields
    
   
   

    

   
}