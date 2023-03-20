import { PurchageOrderPage } from "./pages/purchase/purchase_orderpage";

describe('Create Products', () => {

    const purchaseorder = new PurchageOrderPage()

    it('Product Management', () => {

        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        cy.url().should('include', 'kuiperz.io')

       // Login application
       cy.viewport('macbook-16')
       cy.visit("https://kcom.kuiperz.io/login")
       purchaseorder.enterEmail("test@ecom.com")
       purchaseorder.enterPassword("password")
       purchaseorder.clickLogin()
       cy.title().should('be.equal', 'Home')
       cy.wait(3000)

      // create Product
      purchaseorder.clickPurchaseMenu()
      cy.wait(5000)
      purchaseorder.clickPurchaselistMenu()
      cy.wait(5000)
      purchaseorder.clickAddPurchase()
      cy.wait(5000)


        // dropdown element 
        cy.get("#supplier").click().type("Bens")   
        const optionCategory = "BEN & JERRY'S."
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionCategory) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionCategory}`);
            } else {
                cy.log('Element not found')
            }

        })

        
        cy.xpath("//div[contains(text(),'Add')]").click()

    });



});