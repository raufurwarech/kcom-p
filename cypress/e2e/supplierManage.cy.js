describe('create brand', () => {


    it('Brand Management', () => {

        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        cy.url().should('include', 'kuiperz.io')

        // Login app
        cy.get("#login-email").should('be.visible').type('test@ecom.com')
        cy.get("#login-password").should('be.visible').type('password')
        cy.get("button[type=submit]").click()
        cy.title().should('eq', 'Home')
        cy.wait(3000)

        // create brands
        cy.contains("Contacts").click()
        cy.contains("Suppliers").click()
        cy.wait(3000)
        cy.contains("Add Supplier" ).click()
        
        
        cy.get('#name').type("Ibra Com")
        cy.contains('Next').click()
        cy.wait(5000)
        cy.get("#dob")

    });



});