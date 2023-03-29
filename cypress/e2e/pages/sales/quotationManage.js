export class  QuotationManage{

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    sales_Menu = "[class='feather feather-shopping-cart']"
    quotationList_Menu = "//a[@href='/sale/quotation-list']//*[name()='svg']"
    new_Quotation = "[href='/sale/quotation-handle']"

    select_Till_Date = "[placeholder='DD-MM-YYYY']"
    select_Date = "[aria-label='March 28, 2023']"
    abn_Number = "#new-customer-abn"
    mobile_Country_Code = "[class='country-selector__label']"
    mobile_Number = "#mobile-240_phone_number"
    email_Id = "#new-customer-email"

    item_Category = "#vs4__combobox"
    select_Product = "[placeholder='Select Product']"
    select_Size = "[placeholder='Select Size']"
    input_Quantity = "#quantity"

    submit_Quatation = "[class='btn mr-1 mt-2 btn-primary']"

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
    salesMenu(){
        cy.get(this.sales_Menu).click()

    }
    
    quotationListMenu(){
        cy.xpath(this.quotationList_Menu).click()
    }
    
    newQuotation(){
        cy.get(this.new_Quotation).click()
        
    }

    // Create new quatations 
    selectTillDate(){
        cy.get(this.select_Till_Date).click()
    }

    selectDate(){
        cy.get(this.select_Date).click()
    }

    abnNumber(abn){
        cy.get(this.abn_Number).type(abn)
    }
    
    mobileCountryCode(){
        cy.get(this.mobile_Country_Code).click()
    }
    mobileNumber(phoneno){
        cy.get(this.mobile_Number).type(phoneno)
    }
    emailId(email){
        cy.get(this.email_id).type(email)
    }
    ItemCategory(item){
        cy.get(this.item_Category).type(item)
    }

    selectProduct(product){
        cy.get(this.select_Product).type(product)
    }

    selectSize(size){
        cy.get(this.select_Size).type(size)
    }

    inputQuantity(item){
        cy.get(this.input_Quantity).type(item)
    }

    submitQuatation(){
        cy.get(this.submit_Quatation).click()
    }



}