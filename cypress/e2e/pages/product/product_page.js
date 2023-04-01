export class Productpage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Product_Menu = "[class='feather feather-layers']"
    click_Productlist_menu = "[href='/product/list']"
    click_AddProduct_button = ".justify-content-end .text-nowrap"

    // Create prodcut form 
    sku_textbox = "#sku-number"
    productName_textbox = "#product-name"
    barcode_textbox = "#product-barcode"
    category_dropdown = "#category-id"
    brand_dropdown = "#brand-id"
    unit_dropdown = "#unit-id"  
    supplier_dropdown = "#supplier-ids"
    origin_dropdown = "#country-ids"
    add_product = "//div[contains(text(),'Add')]"

    // Product details 
    search_product = "[placeholder='Search...']"
    select_action = "#dropdown-right__BV_toggle_"
    selecet_details = "Product Details"

    // Product Price
    product_tax = "#tax_id"
    product_quantity = "#quantity"
    product_sale_price_nongst = "#sale_price_non_gst"
    product_note = "#note"
    add_sales_info = "//button[normalize-space()='Add']"
    cost_perUnit = "#cost_per_unit"
    avg_cost = "#avg_cost"
    submit_purchase_info = "//button[@type='submit']"
    next_button_Product_price = "//button[normalize-space()='Next']"

    // Product Level page
    replenish_level = "#replenish-level"
    expired_date = "#expired-date-modified"
    select_date = "[class='flatpickr-day today']"
    save_changes_button = "//button[@type='button']//div[contains(text(),'Save Changes')]"
    next_button_product_level = "//button[normalize-space()='Next']"

    // inventory Log page
    finish_button = "//button[normalize-space()='Finish']"

        

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

    addProduct (){
        cy.xpath(this.add_product).click()
    }

    // Re-direct ot product list & Product details page 
    searchProduct(srcproduct){
        cy.get(this.search_product).type(srcproduct)
    }

    selectActions(){
        cy.get(this.select_action).click()
    }
    
    selectDetails(){
        cy.contains(this.selecet_details).click()
    }

    // Product price 

    preoductTax(){
        cy.get(this.product_tax).click()
    }

    productQuantity(proquan){
        cy.get(this.product_quantity).type(proquan)
    }
    productSalePriceNonGst(saleprice){
        cy.get(this.product_sale_price_nongst).type(saleprice)
    }
    productNote(note){
        cy.get(this.product_note).type(note)
    }
    addSalesInfo(){
        cy.xpath(this.add_sales_info).click()
    }

    costPerUnit(costPunit){
        cy.get(this.cost_perUnit).type(costPunit)
    }
    avgCost(avgCost){
        cy.get(this.avg_cost).type(avgCost)
    }
    submitPurchase (){
        cy.xpath(this.submit_purchase_info).click()
    }
    nextProductPriceButton (){
        cy.xpath(this.next_button_Product_price).click()
    }
    
    // Product Level page
    replenishLevel(replenish){
        cy.get(this.replenish_level).type(replenish)
    }
    expireDateCal(){
        cy.get(this.expired_date).click()
    }
    selectDate(){
        cy.get(this.select_date).click()
    }
    saveButton(){
        cy.xpath(this.save_changes_button).click()
    }
    nextProductLevelbutton(){
        cy.xpath(this.next_button_product_level).click()
    }

    // inventory Log page
    finisButton(){
        cy.xpath(this.finish_button).click()
    }


   
}