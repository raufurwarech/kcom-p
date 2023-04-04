export class DiscountPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Sales_Menu = "[class='feather feather-shopping-cart']"
    click_Discount_Menu = "[href='/sale/discount-list']"
    click_AddDiscount_Button = "[class='text-nowrap']"

    // discount options
    discount_type_PD = "//button[contains(text(),'Product Discount')]"

    
    // create discount 
    discount_name = "[placeholder='Title']"
    discount_Value = "#value"
    specific_Category = "Specific Category"
    select_category = "#category-id"
    
    minimum_Purchases_Requirements = "No minimum requirements"
    combinations_Discount = "Shipping discounts"
    customer_Eligibility = "All customer"
    maximum_Discount_Usages = "Limit to one use per customer"
    submit_Discount = "Save"

    
    // create new discount (Amount of order discount)
    discount_type_AO = "//button[normalize-space()='Amount of Order']"

    // create new discount (BOGO offer discount)
    discount_type_BOGO = "//button[normalize-space()='Buy X get Y']"


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

    // create new discount (product discount)
    discountType() {
        cy.xpath(this.discount_type_PD).click()
    }
    
    discountTitle(disname) {
        cy.get(this.discount_name).type(disname)
    }

    discountValue(disvalue) {
        cy.get(this.discount_Value).type(disvalue)
    }
    
    specificCategory(){
        cy.contains(this.specific_Category).click()
    }

    selectCategory(selectcate){
        cy.get(this.select_category).type(selectcate)
    }



    minimumPurchasesRequirements (){
        cy.contains(this.minimum_Purchases_Requirements).click()

    }
    combinationsDiscount(){
        cy.contains(this.combinations_Discount).click()

    }

    customerEligibility(){
        cy.contains(this.customer_Eligibility).click()

    }
    maximumDiscountUsages(){
        cy.contains(this.maximum_Discount_Usages).click()

    }
    submitDiscount(){
        cy.contains(this.submit_Discount).click()

    }


    // create new discount (Amount of order discount)



    // create new discount (BOGO offer discount)


}