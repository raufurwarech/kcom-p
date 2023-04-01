import { Productpage } from "./pages/product/product_page";
import { createproduct } from "../util";
import { PurchageOrder } from "./pages/purchase/purchase_order";

describe('Create Products', () => {

    const productpage = new Productpage()
    const purchaseorder = new PurchageOrder()

    it('Product Management', () => {

        cy.fixture('product.json').then((data) => {

            data.skuNumber = createproduct(data.skuNumber)
            data.productName = createproduct(data.productName)
            data.barCode = createproduct(data.barCode)

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
            cy.wait(5000)


            // Input product details
            productpage.inputSkuNumber(data.skuNumber)
            cy.wait(2000)
            productpage.inputProductname(data.productName)
            cy.wait(2000)
            productpage.inputbarcode(data.barCode)

            // dropdown element 
            productpage.inputCategory(data.category)
            const optionCategory = 'FROZEN'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionCategory) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputBrand(data.brand)
            const optionBrand = 'COFFEE'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionBrand) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputUnit(data.unit)
            const optionUnit = '1 KG'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionUnit) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputSupplier(data.supplier)
            const optionSuppliers = 'BD COM'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionSuppliers) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.get(3000)

            productpage.inputCountry(data.country)
            const optionOrigin = 'Albania'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionOrigin) {
                    elementFound = true
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
            productpage.preoductTax()
            const optionTax = '7% (7)'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionTax) {
                    elementFound = true
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
            purchaseorder.selectSupplier("denim")
            const optionsup = 'DENIM'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionsup) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })


            purchaseorder.expectedDeliveryDate()
            cy.wait(2000)
            purchaseorder.selectDate()
            purchaseorder.supplierInvoiceNo("123454asdf")


            purchaseorder.selectCategory("clothing")
            const optionScategoty = 'CLOTHING'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionScategoty) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            purchaseorder.selectProduct("DENIM JEANS")
            const optionproduct = 'DENIM JEANS'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionproduct) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            purchaseorder.selectCountry("United States")
            const optioncountry = "United States"
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optioncountry) {
                    elementFound = true
                    cy.wrap($ele).click()

                }
            })

            purchaseorder.productQuantity("10")
            purchaseorder.productPurchaseRate("100")

            purchaseorder.productTax("8% (EIGHT)")
            const optiontax = "8% (EIGHT)"
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optiontax) {
                    elementFound = true
                    cy.wrap($ele).click()

                }
            })

            purchaseorder.addPurchaseOrder()
            purchaseorder.purchaseOrderRecive()
            cy.wait(5000)
            
            purchaseorder.purchaseNote("demo data inserted")
            purchaseorder.purchaseRecive()




        })

    });



});