import { Productpage } from "./pages/product/product_page";
import { createitems } from "../util";
import { PurchageOrder } from "./pages/purchase/purchase_order";

describe('Create Products', () => {

    const productpage = new Productpage()
    const purchaseorder = new PurchageOrder()

    it('Product Management', () => {

        cy.fixture('product.json').then((data) => {

            data.skuNumber = createitems(data.skuNumber)
            data.productName = createitems(data.productName)
            data.barCode = createitems(data.barCode)

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            productpage.enterEmail(data.enterEmail)
            productpage.enterPassword(data.enterPassword)
            productpage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)

            // create Product
            productpage.clickProductMenu()
            cy.wait(5000)
            productpage.clickProductlistMenu()
            cy.wait(5000)
            productpage.clickAddProduct()
            cy.wait(3000)


            // Input product details
            productpage.inputSkuNumber(data.skuNumber)
            cy.wait(2000)
            productpage.inputProductname(data.productName)
            cy.wait(2000)
            productpage.inputbarcode(data.barCode)

            // dropdown element 
            productpage.inputCategory(data.category)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.category) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputBrand(data.brand)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.brand) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputUnit(data.unit)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.unit) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputSupplier(data.supplier)
           
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.supplier) {
                    cy.wrap($ele).click()
                }
            })
            cy.get(3000)

            productpage.inputCountry(data.country)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.country) {
                    cy.wrap($ele).click()
                }
            })

            productpage.addProduct()
            cy.wait(3000)

            // Re-direct ot product list & Product details page 

            productpage.searchProduct(data.productName)
            cy.wait(3000)

            productpage.selectActions()
            productpage.selectDetails()
            cy.wait(3000)

            // Product Price setting
            productpage.preoductTax(data.producttax)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {

                if ($ele.text().trim() === data.producttax) {
                    cy.wrap($ele).click()
                }
            })

            productpage.productQuantity("100")
            productpage.productSalePriceNonGst("20")
            productpage.productNote("SELLING INFO")
            productpage.addSalesInfo()
            cy.wait(2000)

            productpage.costPerUnit('10')
            productpage.avgCost('9')
            productpage.submitPurchase()
            cy.wait(3000)
            productpage.nextProductPriceButton()
            cy.wait(3000)

            // Product Level page
            productpage.replenishLevel('20')
            productpage.expireDateCal()
            cy.wait(3000)
            productpage.selectDate()

            productpage.saveButton()
            productpage.nextProductLevelbutton()
            cy.wait(3000)

            // inventory Log page
            productpage.finisButton()
            cy.wait(3000)



            // Go to Purchase order page 
            purchaseorder.PurchaseMenu()
            cy.wait(5000)
            purchaseorder.PurchaseOrderMenu()
            cy.wait(5000)
            purchaseorder.addPurchaseButton()
            cy.wait(3000)

            // Creat purchase order 
            purchaseorder.selectSupplier(data.supplier)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
               
                if ($ele.text().trim() === data.supplier) {
                    cy.wrap($ele).click()
                }
            })


            purchaseorder.expectedDeliveryDate()
            cy.wait(2000)
            purchaseorder.selectDate()
            purchaseorder.supplierInvoiceNo("123454asdf")


            purchaseorder.selectCategory(data.category)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {   
                if ($ele.text().trim() === data.category) {
                    cy.wrap($ele).click()
                }
            })

            purchaseorder.selectProduct(data.productName)
            cy.wait(2000)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.productName) {
                    cy.wrap($ele).click()
                }
            })

            purchaseorder.selectCountry(data.country)
            
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => { 

                if ($ele.text().trim() === data.country) {    
                    cy.wrap($ele).click()

                }
            })

            purchaseorder.productQuantity(data.productQuantity)
            purchaseorder.productPurchaseRate("100")

            purchaseorder.productTax(data.producttax)
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => {

                if ($ele.text().trim() === data.producttax) {
                    cy.wrap($ele).click()

                }
            })

            purchaseorder.addPurchaseOrder()
            purchaseorder.purchaseOrderRecive()
            cy.wait(5000)
            
            purchaseorder.purchaseNote("demo data inserted")
            purchaseorder.purchaseRecive()

            // verify product stock
            cy.wait(5000)
            productpage.clickProductMenu()
            cy.wait(2000)
            productpage.clickProductlistMenu()
            cy.wait(2000)

            productpage.searchProduct(data.productName)
            cy.wait(3000)

            productpage.selectActions()
            productpage.selectDetails()
            cy.wait(3000)


            productpage.nextProductPriceButton()
            cy.wait(2000)
            productpage.nextProductLevelbutton()
            cy.wait(2000)

            cy.xpath(`//td[normalize-space()='${data.productQuantity}']`).should('be.visible')


        })

    });



});