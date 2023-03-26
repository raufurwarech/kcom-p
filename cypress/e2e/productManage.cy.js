import { Productpage } from "./pages/product/product_page";

describe('Create Products', () => {

    const productpage = new Productpage()

    it('Product Management', () => {

        cy.fixture('product.json').then((data) => {

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            productpage.enterEmail(data.enterEmail)
            productpage.enterPassword(data.enterPassword)
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
            productpage.inputSkuNumber(data.skuNumber)
            cy.wait(2000)
            productpage.inputProductname(data.productName)
            cy.wait(2000)
            productpage.inputbarcode(data.barCode)

            // dropdown element 
            productpage.inputCategory(data.category)
            const optionCategory = 'FROZEN'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionCategory) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputBrand(data.brand)
            const optionBrand = 'COFFEE'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionBrand) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputUnit(data.unit)
            const optionUnit = '1 KG'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionUnit) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            productpage.inputSupplier(data.supplier)
            const optionSuppliers = 'BD COM'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionSuppliers) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.get(3000)

            productpage.inputCountry(data.country)
            const optionOrigin = 'Albania'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optionOrigin) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })

            cy.xpath("//div[contains(text(),'Add')]").click()

        })

    });



});