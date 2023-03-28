import { InvoiceManage } from "./pages/sales/invoicePage";


describe('invoice Manage', () =>{

    const invoicepage = new InvoiceManage()

    it('Create Invoice', () => {
        cy.fixture('product.json').then((data) => {

            // Login Application
            cy.viewport('macbook-16')
            cy.visit(data.baseurl)
            invoicepage.enterEmail(data.enterEmail)
            invoicepage.enterPassword(data.enterPassword)
            invoicepage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)


              // create invoice
              invoicepage.salesMenu()
              cy.wait(5000)
              invoicepage.invoiceHandleMenu()
              cy.wait(5000)


              //input for create invoice 
              invoicepage.companyName("dadafa")
          
  



        })
        
    });

})