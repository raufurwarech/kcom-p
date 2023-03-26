import { PurchageOrder } from "./pages/purchase/purchase_order";

describe('Create Products', () => {

    const purchaseorder = new PurchageOrder()

    it('Product Management', () => {

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

            // create Purchase
            purchaseorder.PurchaseMenu()
            cy.wait(5000)
            purchaseorder.PurchaseOrderMenu()
            cy.wait(5000)
            purchaseorder.addPurchaseButton()
            cy.wait(3000)


            //   cy.get('#supplier').click().type("BD COM")
            //   cy.get('#expected-delivery-date').click()



            cy.get('#supplier').type("denim")
            const optionsup = 'DENIM'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionsup) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })


            cy.get("#category").type("clothing")
            const optionScategoty = 'CLOTHING'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionScategoty) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            cy.get("#product").type("DENIM JEANS")
            const optionproduct = 'DENIM JEANS'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionproduct) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            // cy.get("#brand").should('not.enable')
            // cy.get("#unit").should('not.enable')

            cy.get("#country").type("United States")
            const optioncountry = "United States"
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optioncountry) {
                    elementFound = true
                    cy.wrap($ele).click()

                }
            })

            // cy.get("#stock-on-hand").should('not.enable')
            cy.get("#quantity").type("10")
            // cy.get("#last-po-cost-of-unit").should('not.enable')
            cy.get("#purchase-rate").type("100")

            cy.get("#tax").type("8% (EIGHT)")
            const optiontax = "8% (EIGHT)"
            cy.get("li.vs__dropdown-option").each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optiontax) {
                    elementFound = true
                    cy.wrap($ele).click()

                }
            })

            // cy.get("#total-gst").should('not.enable')
            // cy.get("#gross-rate-include-gst").should('not.enable')
            // cy.get("#total-price-include-gst").should('not.enable')




            cy.xpath("//button[contains(text(),'Add')]").click()
            cy.contains('Submit').click()
            // cy.contains('Submit and Receive').clcik()



            cy.wait(5000)
            cy.get("[href='/purchase-order/list']").click()

        })

    });

});