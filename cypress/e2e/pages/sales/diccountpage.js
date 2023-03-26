export class DiscountPage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Sales_Menu = "[class='feather feather-shopping-cart']"
    click_discount_menu = "[href='/sale/discount-list']"
    click_AddDiscount_button = "[class='text-nowrap']"

    // discount options
    discount_type = "//button[contains(text(),'Product Discount')]"
    // amount_Discount = "//button[contains(text(),'Amount of Order')]"
    // bogo_discount = "//button[contains(text(),'Buy X get Y')]"

    // create discount 
    discount_name = "#title"
    // discount_value_type = ""
    discount_value = "#value"


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
clickSalesMenu(){
    cy.get(this.click_Sales_Menu).click()

}

clickDiscountMenu(){
    cy.get(this.click_discount_menu).click()
}

clickAddDiscount(){
    cy.get(this.click_AddDiscount_button).click()
    
}

// create new discount 
discountTitle(){
    cy.xpath(this.discount_type).click()    
}

discountName(){
    cy.get(this.discount_name).type("fdsfs")
}



}