export class Productpage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "[class='feather feather-layers']"
    click_Productlist_menu = "[href='/product/list']"
    click_AddProduct_button = ".justify-content-end .text-nowrap"

    sku_textbox = "#sku-number"
    productName_textbox = "#product-name"
    barcode_textbox = "#product-barcode"
    
    category_dropdown = "#category-id"
    brand_dropdown = "#brand-id"
    unit_dropdown = "#unit-id"  
    supplier_dropdown = "#supplier-ids"
    origin_dropdown = "#country-ids"
    
    

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
        cy.get(this.click_Product_Menu).click()

    }
    
    clickProductlistMenu(){
        cy.get(this.click_Productlist_menu).click()
    }
    
    clickAddProduct(){
        cy.get(this.click_AddProduct_button).click()
        
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

    inputCategory(category){
        cy.get(this.category_dropdown).type(category)
    }

    inputBrand(brand){
        cy.get(this.brand_dropdown).type(brand)
    }

    inputUnit(unit){
        cy.get(this.unit_dropdown).type(unit)
    }

    inputSupplier(supplier){
        cy.get(this.supplier_dropdown).type(supplier)
    }

    inputCountry(country){
        cy.get(this.origin_dropdown).type(country)
    } 
    

   
}