import { InvoiceManage } from "./pages/sales/invoiceManage";


describe('invoice Manage', () =>{

    const invoicepage = new InvoiceManage()

    it('Create Invoice', () => {
        cy.fixture('product.json').then((data) => {

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

              cy.get("//div[@id='vs38__combobox']//div[@class='vs__selected-options']").click()
              cy.get("[class='vs__dropdown-menu']").click()



        })
        
    });

})