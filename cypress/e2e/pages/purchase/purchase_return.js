export class PurchaseReturn {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "[class='btn btn-primary btn-block']"

    purchase_Menu = "[class='feather feather-book-open']"
    purchaseReturn_Menu = "//span[contains(text(),'Purchase Return Handle')]"
    search_Supplier = "[placeholder='Search by Company name']"
    search_Purchase_Order = "[placeholder='Search by Purchase Order No']"

    return_quantity = "#input-formatter0"
    check_return = "input[type='checkbox']"
    return_reason = "[placeholder='SELECT Reason']"
    return_note = "[placeholder='Notes']"

    create_return = "//button[contains(text(),'Create Return')]"


    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to Purchase return page
    PurchaseMenu(){
        cy.get(this.purchase_Menu).click()

    }
    
    PurchaseReturnMenu(){
        cy.xpath(this.purchaseReturn_Menu).click()
    }

    searchSupplier(inputsuppliername){
        cy.get(this.search_Supplier).type(inputsuppliername)
    }
    searchPruchaseOrder(inputpurchaseorder){
        cy.get(this.search_Purchase_Order).type(inputpurchaseorder)
    }

    returnQuantity(returnquan){
        cy.get(this.return_quantity).type(returnquan)
    }

    // checkReturn(){
    //     cy.get(this.check_return).check()
    // }

    returnReason(reason){
        cy.get(this.return_reason).type(reason)
    }
    
    returnNote(note){
        cy.get(this.return_note).type(note)
    }
    
    createReturn(){
        cy.xpath(this.create_return).click()
    }


}