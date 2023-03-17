export class Productpage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "Products"
    click_Productlist_menu = "Product List"
    click_AddProduct_button = "Add Product"

    sku_textbox = "#sku-number"
    productName_textbox = "#product-name"
    barcode_textbox = "#product-barcode"
    
    category_dropdown = "#category-id"
    category_dropdown_list = "li.vs__dropdown-option"

    brand_dropdown = "#brand-id"
    brand_dropdown_list = "li.vs__dropdown-option"

    unit_dropdown = "#unit-id"
    unit_dropdown_list = "li.vs__dropdown-option"

    supplier_dropdown = "#supplier-ids"
    supplier_dropdown_list = "li.vs__dropdown-option"

    origin_dropdown = "#country-ids"
    origin_dropdown_list = "li.vs__dropdown-option"



    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to Product page
    clickProductMenu(){
        cy.contains(this.click_Product_Menu).click()

    }
    
    clickProductlistMenu(){
        cy.contains(this.click_Productlist_menu).click()
    }
    
    clickAddProduct(){
        cy.contains(this.click_AddProduct_button).click()
        
    }

    // Add products input fields
    inputSkuNumber(skunumber){
        cy.get(this.sku_textbox).should("be.visible").type(skunumber)

    }

    inputProductname(productname){
        cy.get(this.productName_textbox).type(productname)

    }

    inputbarcode(barcode){
        cy.get(this.barcode_textbox).type(barcode)

    }


   
}