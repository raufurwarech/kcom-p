import { InvoiceManage } from "./pages/sales/invoiceManage";


describe('invoice Manage', () => {

    const invoicepage = new InvoiceManage()

    it('Create Invoice', () => {
        cy.fixture('sales.json').then((data) => {

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            invoicepage.enterEmail(data.enterEmail)
            invoicepage.enterPassword(data.enterPassword)
            invoicepage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)

            // create invoice
            invoicepage.salesMenu()
            cy.wait(5000)
            invoicepage.invoiceListMenu()
            cy.wait(5000)
            invoicepage.newSaleInvoice()
            cy.wait(3000)


            //input for create invoice 
            invoicepage.companyName("URBIN PTY LIMITED")
            cy.get('#autosuggest__results-item--0').click()

            //   cy.get('#vs8__combobox > .vs__selected-options').click()
            //   cy.get('#vs8__option-0').click()

            cy.contains('Pickup').click()

            invoicepage.selectCategory(data.select_category)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.select_category) {
                    cy.wrap($ele).click()
                }
            })

            invoicepage.selectProduct(data.select_product)
            cy.wait(2000)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.select_product) {
                    cy.wrap($ele).click()
                }
            })

            invoicepage.selectSize(data.select_size)
            cy.wait(2000)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.select_size) {
                    cy.wrap($ele).click()
                }
            })

            invoicepage.selectQuantity(data.item_quantity)
            invoicepage.addNewInvoice()
            invoicepage.addNote(data.note)
            cy.wait(2000)
            invoicepage.saveInvoice()



        })

    });

})