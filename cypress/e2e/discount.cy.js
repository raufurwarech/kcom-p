import { DiscountPage } from "./pages/sales/discountpage";
import { createitems } from "../util";

describe('Create Products', () => {

    const discountpage = new DiscountPage()

        
    it('Product Management', () => {

        cy.fixture('discount.json').then((data) => {
            data.discount_Name_PD = createitems(data.discount_Name_PD)
            data.discount_Name_AO = createitems(data.discount_Name_AO)
            data.discount_Name_BOGO = createitems(data.discount_Name_BOGO)

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
            discountpage.discountType()
            cy.wait(3000)
            discountpage.discountTitle(data.discount_Name_PD)
            discountpage.discountValue(data.discount_Value)

            discountpage.specificCategory()
            
            discountpage.selectCategory(data.select_categoty)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.select_categoty) {
                    cy.wrap($ele).click()
                }
            })
            cy.wait(3000)

            discountpage.minimumPurchasesRequirements()
            discountpage.combinationsDiscount()
            discountpage.customerEligibility()
            discountpage.maximumDiscountUsages()
            discountpage.submitDiscount()
            cy.wait(3000)

            
            // create new discount (Amount of order discount)
            discountpage.clickAddDiscount()
            cy.wait(5000)
            cy.xpath("//button[normalize-space()='Amount of Order']").click()
            cy.wait(3000)
            discountpage.discountTitle(data.discount_Name_AO)
            discountpage.discountValue(data.discount_Value)

            cy.contains("Fixed Amount").click()
            cy.contains("Minimum purchase amount ($)").click()
            cy.get("#minimum-purchase-value").type("50")
            cy.contains("Shipping discounts").click()
            cy.contains("Specific Customer Group").click()

            cy.get("#customer-group-ids").type("TEST")
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === "TEST") {
                    cy.wrap($ele).click()
                }
            })

            cy.contains("Limit to one use per customer").click()
            // cy.contains("Set end date and time").click()
            // cy.wait(2000)
            // cy.get("#test").click()
            // cy.wait(1000)
            // cy.get("[class='flatpickr-day today']").click()
            cy.contains("Save").click()

            

            // create new discount (BOGO offer discount)
            // discountpage.clickAddDiscount()
            // cy.wait(5000)
            // cy.contains("Buy X get Y").click()
            // cy.wait(3000)
            // discountpage.discountTitle(data.discount_Name_BOGO)
            

            // cy.contains("Shipping discounts").click()
            // cy.contains("Specific Customer").click()

            // cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            //     if ($ele.text().trim() === "URBIN PTY LIMITED") {
            //         cy.wrap($ele).click()
            //     }
            // })
            // cy.contains("Limit to one use per customer").click()
            // cy.get("[placeholder='1']").type("20")
            



        })
       

    });
    
    
});