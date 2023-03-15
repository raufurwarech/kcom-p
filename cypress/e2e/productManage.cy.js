describe('Create Products', () => {


    it('Product Management', () => {

        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        cy.url().should('include', 'kuiperz.io')

        // Login app
        cy.get("#login-email").should('be.visible').type('test@ecom.com')
        cy.get("#login-password").should('be.visible').type('password')
        cy.get("button[type=submit]").click()
        cy.wait(5000)
        cy.title().should('include', 'Home')
        cy.wait(3000)

        // create brands
        cy.contains("Products").click()
        cy.contains("Product List").click()
        cy.wait(5000)
        cy.contains("Add Product").click()


        // Input product details
        cy.get("#sku-number").should('be.visible').type('1233444343')
        cy.wait(2000)
        cy.get("#product-name").should('be.visible').type('Coffee')
        cy.wait(2000)
        cy.get("#product-barcode").should('be.visible').type('12345asdf')

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