export class InvoiceManage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    sales_Menu = "[class='feather feather-shopping-cart']"
    invoiceList_Menu = "Invoice List"
    sale_invoice_create = "//span[contains(text(),'New Sale Invoice')]"

    company_Name = "#autosuggest__input_ajax"
    delivary_Address = "#trading-delivery-address"



    select_category = "#sale-invoice-category"
    select_product = "#sale-invoice-product"
    select_size = "#sale-invoice-product-item-size"  
    item_quantity = "#quantity"

    add_new_invoice = "Add"
    add_note = "[placeholder='Notes']"
    save_invoice = "Submit"

    // Login Application
    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)
    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to sales Invoice page
    salesMenu() {
        cy.get(this.sales_Menu).click()

    }

    invoiceListMenu() {
        cy.contains(this.invoiceList_Menu).click()
    }

    newSaleInvoice() {
        cy.xpath(this.sale_invoice_create).click()

    }

    companyName(companyname){
        cy.get(this.company_Name).type(companyname)
    }
    selectCategory(itemCate){
        cy.get(this.select_category).type(itemCate)
    }
    selectProduct(saleproduct){
        cy.get(this.select_product).type(saleproduct)
    }
    selectSize(size){
        cy.get(this.select_size).type(size)
    }
    selectQuantity(quantity){
        cy.get(this.item_quantity).type(quantity)
    }
    addNewInvoice(){
        cy.contains(this.add_new_invoice).click()
    }

    addNote(note){
        cy.get(this.add_note).type(note)
    }
    saveInvoice(){
        cy.contains(this.save_invoice).click()
    }



}