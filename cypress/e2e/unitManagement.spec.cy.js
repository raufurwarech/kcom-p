import { UnitPage } from "./pages/unit_page";

describe('Create Units', () => {

    const unitpage = new UnitPage()

    it('Create Unit', () => {

       // Login run from commands
       cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        unitpage.enterEmail("test@ecom.com")
        unitpage.enterPassword("password")
        unitpage.clickLogin()
        cy.title().should('be.equal', 'Home')
        cy.wait(3000)

        // create Unit
        unitpage.clickProductMenu()
        cy.wait(5000)
        unitpage.clickUnitMenu()
        cy.wait(5000)
        unitpage.clickAddUnit()
        cy.wait(5000)

        // input unit data
        unitpage.inputUnitName("10p")
        unitpage.submitUnitname()
        
        
        // cy.on('window:alert', (t) => {
        //     expect(t).to.be.equal("Successfully Unit store.")
        // })
   
    });



});