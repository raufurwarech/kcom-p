import { BrandPage } from "./pages/product/band_page";

describe('Create Brand', () => {

    const brandpage = new BrandPage()

    it('Create Brand ', () => {

        // Login application
        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        brandpage.enterEmail("test@ecom.com")
        brandpage.enterPassword("password")
        brandpage.clickLogin()
        cy.title().should('be.equal', 'Home')
        cy.wait(3000)

        // create brands
        brandpage.clickProductMenu()
        cy.wait(5000)
        brandpage.clickBrandMenu()
        cy.wait(5000)
        brandpage.clickAddBrand()
        cy.wait(5000)

        // input brand data
        brandpage.inputBrnadName("al-hera")
        brandpage.submitBrandname()

    });



});