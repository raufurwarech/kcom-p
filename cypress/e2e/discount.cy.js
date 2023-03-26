import { beforeEach } from "mocha";
import { DiscountPage } from "./pages/sales/discountpage";

describe('Create Products', () => {

    const discountpage = new DiscountPage()

        
    it('Product Management', () => {

        cy.fixture('discount.json').then((data) => {

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            discountpage.enterEmail(data.enterEmail)
            discountpage.enterPassword(data.enterPassword)
            discountpage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)


            // menu discount 
            discountpage.clickSalesMenu()
            cy.wait(5000)
            discountpage.clickDiscountMenu()
            cy.wait(5000)
            discountpage.clickAddDiscount()
            cy.wait(5000)

            // create new discount
            discountpage.discountTitle()
            cy.wait(3000)
            discountpage.discountName(data.disname)
            discountpage.discountValue(data.disvalue)

            discountpage.appliesCategory()
            
            discountpage.specificCategory(data.disspecategoty)
            const optionsup = 'TIN'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionsup) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.wait(3000)

            discountpage.minimumPurchasesRequirements()
            discountpage.combinationsDiscount()
            discountpage.customerEligibility()
            discountpage.maximumDiscountUsages()
            discountpage.submitDiscount()



        })
       

    });
    
    
});