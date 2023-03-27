export class InvoiceManage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    sales_Menu = "[class='feather feather-shopping-cart']"
    InvoiceList_Menu = "[href='/sale/invoice-list']"
    sale_invoice_create = "[href='/sale/invoice-handle']"

    company_Name = "#autosuggest__input_ajax"
    delivary_Address = "#trading-delivery-address"



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
        cy.get(this.InvoiceList_Menu).click()
    }

    sale() {
        cy.get(this.sale_invoice_create).click()

    }

    companyName(companyname){
        cy.get(this.company_Name).type(companyname)
    }

}