export class PurchageOrder {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "[class='btn btn-primary btn-block']"

    purchase_Menu = "[class='feather feather-book-open']"
    purchaseOrder_Menu = "//span[contains(text(),'Purchase Order List')]"
    addPurchase_button = "//a[contains(text(),'New Purchase Order')]"

    // Creat purchase order element
    select_supplier = "#supplier"
    expected_delivery_date = "#expected-delivery-date"
    select_date = "[class='flatpickr-day today']"
    supplier_invoice = "#supplier-invoice-no"

    select_category = "#category"
    select_product = "#product"
    select_country = "#country"
    product_quantity = "#quantity"
    purchase_rate = "#purchase-rate"
    select_tax = "#tax"

    add_purchase_button = "//button[contains(text(),'Add')]"
    submit_recive_button = "//div[normalize-space()='Submit and Receive']"
    purchase_note = "#textarea"
    purchase_recive_button = "//button[normalize-space()='Receive']"


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
    
   selectSupplier(supplier){
    cy.get(this.select_supplier).type(supplier)
   }
   expectedDeliveryDate(){
    cy.get(this.expected_delivery_date).click()
   }
   selectDate(){
    cy.get(this.select_date).click()
   }
   supplierInvoiceNo(invoice){
    cy.get(this.supplier_invoice).type(invoice)
   }
   selectCategory(category){
    cy.get(this.select_category).type(category)
   }
   selectProduct(product){
    cy.get(this.select_product).type(product)
   }
   selectCountry(country){
    cy.get(this.select_country).type(country)
   }
   selectCategory(category){
    cy.get(this.select_category).type(category)
   }
   productQuantity(prouantity){
    cy.get(this.product_quantity).type(prouantity)
   }

   productPurchaseRate(purchaserate){
    cy.get(this.purchase_rate).type(purchaserate)
   }
   productTax(protax){
    cy.get(this.select_tax).type(protax)
   }
   addPurchaseOrder(){
    cy.xpath(this.add_purchase_button).click()
   }

   purchaseOrderRecive(){
    cy.xpath(this.submit_recive_button).click()
   }

   purchaseNote(note){
    cy.get(this.purchase_note).type(note)
   }

   purchaseRecive(){
    cy.xpath(this.purchase_recive_button).click()
   }



   


    

   
}