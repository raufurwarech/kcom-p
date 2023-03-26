export class DiscountPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Sales_Menu = "[class='feather feather-shopping-cart']"
    click_Discount_Menu = "[href='/sale/discount-list']"
    click_AddDiscount_Button = "[class='text-nowrap']"

    // discount options
    discount_type = "//button[contains(text(),'Product Discount')]"
    // amount_Discount = "//button[contains(text(),'Amount of Order')]"
    // bogo_discount = "//button[contains(text(),'Buy X get Y')]"

    // create discount 
    discount_name = "#title"
    // discount_value_type = ""
    discount_Value = "//input[@id='value']"
    applies_Category = "//label[contains(text(),'Specific Category')]"
    specific_Category= "#category-id"
    
    minimum_Purchases_Requirements = "//label[normalize-space()='No minimum requirements']"
    combinations_Discount = "//label[normalize-space()='Shipping discounts']"
    customer_Eligibility = "//label[contains(text(),'All customer')]"
    maximum_Discount_Usages = "//label[contains(text(),'Limit to one use per customer')]"
    // active_Dates = ""
    submit_Discount = "//button[normalize-space()='Save']"


    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }


    // go to discount page
    clickSalesMenu() {
        cy.get(this.click_Sales_Menu).click()

    }

    clickDiscountMenu() {
        cy.get(this.click_Discount_Menu).click()
    }

    clickAddDiscount() {
        cy.get(this.click_AddDiscount_Button).click()

    }

    // create new discount 
    discountTitle() {
        cy.xpath(this.discount_type).click()
    }

    discountName(disname) {
        cy.get(this.discount_name).type(disname)
    }

    discountValue(disvalue) {
        cy.xpath(this.discount_Value).type(disvalue)
    }
    
    appliesCategory(){
        cy.xpath(this.applies_Category).click()
    }
    
    specificCategory(specategoty){
        cy.get(this.specific_Category).type(specategoty)
    }

    minimumPurchasesRequirements (){
        cy.xpath(this.minimum_Purchases_Requirements).click()

    }
    combinationsDiscount(){
        cy.xpath(this.combinations_Discount).click()

    }

    customerEligibility(){
        cy.xpath(this.customer_Eligibility).click()

    }
    maximumDiscountUsages(){
        cy.xpath(this.maximum_Discount_Usages).click()

    }
    submitDiscount(){
        cy.xpath(this.submit_Discount).click()

    }





}