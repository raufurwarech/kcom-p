export class InvoiceManage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    sales_Menu = "[class='feather feather-shopping-cart']"
    invoiceList_Menu = "Invoice List"
    sale_invoice_create = "//span[contains(text(),'New Sale Invoice')]"

    company_Name = "#autosuggest__input_ajax"
    // delivary_Address = "#trading-delivery-address"
    



    item_category = "#sale-invoice-category"
    item_list_dropdown = "li.vs__dropdown-option"

    sale_product = "#sale-invoice-product"
    product_dropdown = "li.vs__dropdown-option"

    iteam_size = "#sale-invoice-product-item-size"
    size_dropdown = "li.vs__dropdown-option--highlight"

    item_quantity = "#quantity"



    create_invoice_checkbox = "#override-status-confirmation"
    submit_invoice = "//button[@class='btn mr-1 btn-primary']"

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

    // go to sales quatation page
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

    delivaryAddress(){
        cy.get(this.delivary_Address).click()
    }

}