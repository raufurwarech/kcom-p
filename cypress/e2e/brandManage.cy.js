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
        cy.wait(3000)

        // input brand data
        brandpage.inputBrnadName("al-hera 07")
        brandpage.submitBrandname()
        cy.wait(3000)

        // cy.get("#dropdown-right__BV_toggle_").click().type("COFFEE") 
        // cy.get('#__BVID__360__row_47 > [aria-colindex="1"] > div')
        // const optionBrand = 'al-hera'
        // cy.get('#dropdown-right__BV_toggle_').each(($ele, index, $list) => {
        //     let elementFound = false
        //     if ($ele.text().trim() === optionBrand) {
        //         elementFound = true
        //         cy.wrap($ele).click()
        //     }
        //     if (elementFound) {
        //         cy.log(`Found element for option: ${optionBrand}`);
        //     } else {
        //         cy.log('Element not found')
        //     }

        // })

        
        //cy.get('#dropdown-right__BV_toggle_').select('Delete').should('have.value', 'Delete')

       // cy.get("//div[contains(text(),'AL-HERA')]").should('eq', 'al-hera')


    });



});