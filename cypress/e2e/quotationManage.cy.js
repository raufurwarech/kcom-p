import { QuotationManage } from "./pages/sales/QuotationManage"

describe('Quatation Manage', () => {
    const quotationmanage = new QuotationManage()
    
    it('create Quatation', () => {

        cy.fixture('product.json').then((data) => {

            // login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            quotationmanage.enterEmail(data.enterEmail)
            quotationmanage.enterPassword(data.enterPassword)
            quotationmanage.clickLogin()
            cy.title().should('be.equal', 'Home')


            // Quatation page 
            quotationmanage.salesMenu()
            quotationmanage.quotationListMenu()
            quotationmanage.newQuotation()

            // Create new quatations 
            quotationmanage.selectTillDate()
            quotationmanage.selectDate()
            cy.wait(2000)
            quotationmanage.abnNumber()
            
            cy.wait(2000)
    

            quotationmanage.mobileCountryCode()
            const optionMcountry = 'Bangladesh'
            cy.get('div.vue-recycle-scroller__item-view').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionMcountry) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.wait(2000)

            quotationmanage.mobileNumber("01841785864")
            quotationmanage.emailId("asdf@gmail.com")

            quotationmanage.ItemCategory("TIN")
            const optionItem = 'TIN'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionItem) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            quotationmanage.selectProduct("KARA-Coconut")
            const optionProduct = 'KARA-COCONUT CREAM-400ML-TKCC400'
            cy.get('li.vs__dropdown-option vs__dropdown-option--highlight').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionProduct) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            quotationmanage.selectSize('400ML')
            const optionsize = '400ML x 24'
            cy.get('li.vs__dropdown-option vs__dropdown-option--highlight').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionsize) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            quotationmanage.inputQuantity("1")
            quotationmanage.submitQuatation()
            

        })

        
    });

});