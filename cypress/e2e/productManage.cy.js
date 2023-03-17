import { Productpage } from "./pages/product_page";

describe('Create Products', () => {

    const productpage = new Productpage(``)

    it('Product Management', () => {

        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        cy.url().should('include', 'kuiperz.io')

       // Login application
       cy.viewport('macbook-16')
       cy.visit("https://kcom.kuiperz.io/login")
       productpage.enterEmail("test@ecom.com")
       productpage.enterPassword("password")
       productpage.clickLogin()
       cy.title().should('be.equal', 'Home')
       cy.wait(3000)

      // create Product
      productpage.clickProductMenu()
      cy.wait(5000)
      productpage.clickProductlistMenu()
      cy.wait(5000)
      productpage.clickAddProduct()
      cy.wait(5000)


        // Input product details
        productpage.inputSkuNumber("3214")
        cy.wait(2000)
        productpage.inputProductname('alu potol')
        cy.wait(2000)
        productpage.inputbarcode('12345asdf')

        // dropdown element 
        cy.get("#category-id").click().type("FRO")   
        const optionCategory = 'FROZEN'
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionCategory) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionCategory}`);
            } else {
                cy.log('Element not found')
            }

        })

        cy.get("#brand-id").click().type("COFFEE") 

        const optionBrand = 'COFFEE'
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionBrand) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionBrand}`);
            } else {
                cy.log('Element not found')
            }

        })

        cy.get("#unit-id").click().type("1 KG") 
        const optionUnit = '1 KG'
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionUnit) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionUnit}`);
            } else {
                cy.log('Element not found')
            }

        })

        cy.get("#supplier-ids").click().type("BD COM") 
        const optionSuppliers = 'BD COM'
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionSuppliers) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionBrand}`);
            } else {
                cy.log('Element not found')
            }

        })
        cy.get(3000)

        cy.get("#country-ids").click().type("Albania") 
        const optionOrigin = 'Albania'
        cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            let elementFound = false
            if ($ele.text().trim() === optionOrigin) {
                elementFound = true
                cy.wrap($ele).click()
            }
            if (elementFound) {
                cy.log(`Found element for option: ${optionBrand}`);
            } else {
                cy.log('Element not found')
            }

        })

        cy.xpath("//div[contains(text(),'Add')]").click()

    });



});