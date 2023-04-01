import { PurchageOrder } from "./pages/purchase/purchase_order";

describe('Create pruchase', () => {

    const purchaseorder = new PurchageOrder()

    it('Purchase Management', () => {

        cy.fixture('product').then((data) => {


            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            cy.url().should('include', 'kuiperz.io')

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            purchaseorder.enterEmail(data.enterEmail)
            purchaseorder.enterPassword(data.enterPassword)
            purchaseorder.clickLogin()
            cy.title().should('be.equal', 'Home')
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