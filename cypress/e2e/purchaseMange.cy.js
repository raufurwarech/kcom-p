// const { it } = require("mocha");

// describe('Create suppliers', () => {   

//     it('Brand Management', () => {     

//         cy.viewport('macbook-16')
//         cy.visit("https://kcom.kuiperz.io/login")
//         cy.url().should('include', 'kuiperz.io')

//         // Login app
//         cy.get("#login-email").should('be.visible').type('test@ecom.com')
//         cy.get("#login-password").should('be.visible').type('password')
//         cy.get("button[type=submit]").click()
//         cy.title().should('eq', 'Home')
//         cy.wait(3000)

//         // create brands
//         cy.contains("Contacts").click()
//         cy.contains("Suppliers").click()
//         cy.wait(3000)
//         cy.contains("Add Supplier" ).click()
        
        
//         cy.get('#name').type("Ibra Com")
//         cy.get("#bin").should("be.visible").type("1234467")
        
//         // Address One elements
//         cy.get("#address_line_company_1").should("be.visible").type('RD-101')
//         cy.get("#suburb").should("be.visible").type('Parth')
//         cy.get("#postcode").should("be.visible").type('Parth')
//         cy.get("#country").should("be.visible").type('AUS')
//         cy.get("#state").should("be.visible").type('Parth')
        
//         cy.contains('Next').click()
//         cy.wait(5000)

//         // Director Details
//         cy.get("#director-name").should("be.visible").type("christian")
//         cy.get("#surname").should("be.visible").type("eriksen")
//         cy.get("#email").should("be.visible").type("erikson@gmail.com")

//         // Country code for phone number
//         // cy.contains("Country code").click()
//         // cy.get('div.vue-recycle-scroller__item-view').each(($ele, index, $list) => {
//         //     let elementFound = false
//         //     if ($ele.text() === Bahamas) {
//         //         elementFound = true
//         //         cy.wrap($ele).click()
//         //     }
//         //     if (elementFound) {
//         //         cy.log(`Found element for option: ${optionBrand}`);
//         //     } else {
//         //         cy.log('Element not found')
//         //     }

//         // })
        
        
//         // Dob Calendar
//         cy.get("#dob").should("be.visible").click()




//         // cy.get("#director-name").should("be.visible").type("Erikson")

//         // cy.get("#director-name").should("be.visible").type("Erikson")

//         // cy.get("#director-name").should("be.visible").type("Erikson")


//         cy.get("#dob")

//     });



// });