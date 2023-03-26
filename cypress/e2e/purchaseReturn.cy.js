import { PurchaseReturn } from "./pages/purchase/purchase_return";

describe('Purchase Return Management', () => {

    const purchasereturn = new PurchaseReturn()

    it('Create Purchase Return', () => {

        cy.fixture('product.json').then((data) => {

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            purchasereturn.enterEmail(data.enterEmail)
            purchasereturn.enterPassword(data.enterPassword)
            purchasereturn.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)

            // create Purchase return
            purchasereturn.PurchaseMenu()
            cy.wait(5000)
            purchasereturn.PurchaseReturnMenu()
            cy.wait(5000)
           

            // Input purchase details
            
            purchasereturn.searchSupplier('Denim')
            const optionsup = 'DENIM'
            cy.get('li.autosuggest__results-item').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionsup) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.wait(3000)

            //cy.xpath("//div[contains(text(),'Add')]").click()

            purchasereturn.searchPruchaseOrder('PO-2303260003')
            const optionPorder = 'PO-2303260003'
            cy.get('li.autosuggest__results-item').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionPorder) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.wait(3000)

            purchasereturn.returnQuantity('10')
            // purchasereturn.checkReturn()
            
            purchasereturn.returnReason("Product Damage")
            const optionReason = 'PRODUCT DAMAGE'
            cy.get('li.vs__dropdown-option--highlight').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionReason) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            

            purchasereturn.returnNote("demo data inserted")
            purchasereturn.createReturn()


        })

    });



});