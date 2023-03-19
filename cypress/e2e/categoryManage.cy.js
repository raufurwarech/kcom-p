import { CategoryPage } from "./pages/product/category_page";

describe('Create Category', () => {

    const categorypage = new CategoryPage()

    it('Category management', () => {

        // Login application
        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        categorypage.enterEmail("test@ecom.com")
        categorypage.enterPassword("password")
        categorypage.clickLogin()
        cy.title().should('be.equal', 'Home')
        cy.wait(3000)

        // create category
        categorypage.clickProductMenu()
        cy.wait(5000)
        categorypage.clickCategoryMenu()
        cy.wait(5000)
        categorypage.clickAddCategory()
        cy.wait(3000)
        
        // Input category data
        categorypage.inputCategoryName('honey cream')
        categorypage.submitCategoryname()

        // cy.on('window:alert', function(str){
        //     expect(str)('be.equal', 'Successfully Category store.')
        // })

    });



});