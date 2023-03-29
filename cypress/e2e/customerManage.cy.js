import { CustomerManage } from "./pages/contacts/customerPage"

describe('Customer Manage', () => {

    const customerpage = new CustomerManage()

    it('Create Customer', () => {

        cy.fixture('customer.json').then((data) => {

            // Login application
            cy.viewport('macbook-16')
            cy.visit(data.baseurl)
            customerpage.enterEmail(data.enterEmail)
            customerpage.enterPassword(data.enterPassword)
            customerpage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)

            // create customer page 
            customerpage.contactMenu()
            cy.wait(5000)
            customerpage.CustomerListMenu()
            cy.wait(5000)
            customerpage.AddCustomer()
            cy.wait(5000)


            // custoemr create fields company info
            // customerpage.customerType()
            // const optionctype = 'Prepaid'
            // cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            //     let elementFound = false
            //     if ($ele.text().trim() === optionctype) {
            //         elementFound = true
            //         cy.wrap($ele).click()
            //     }
            // })

            cy.wait(2000)
            
            customerpage.customerGroup(data.customerGroup)
            const optioncgroup = 'TEST'
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                let elementFound = false
                if ($ele.text().trim() === optioncgroup) {
                    elementFound = true
                    cy.wrap($ele).click()
                }
            })
            cy.wait(2000)
            customerpage.abnNumber(data.abnNumber)
            cy.wait(5000)
            
            cy.get('input[type="checkbox"]').check({force:true});
            cy.wait(1000)

            customerpage.nextPage()
            cy.wait(5000)

            // Add products input fields (director Info)
            customerpage.directorName(data.directorName)
            customerpage.directorSurname(data.directorSurname)
            customerpage.directorEmail(data.emailId)
            customerpage.directorPassword(data.password)

            // customerpage.countryCodeCustomer()
            // customerpage.mobileNumberCustomer()
            
            //customerpage.nextPageDirector()


            // Contacts details for customer
            //customerpage.givenName(data.givenName)
            

            cy.get('#phone-4060_country_selector').click()
            cy.wait(1000)
            cy.contains('Bangladesh (বাংলাদেশ)').click()

            customerpage.customerRole(data.role)
            cy.wait(3000)

            //customerpage.mobileNumberCustomer("01841785864")

            //customerpage.nextPageContacts()

            // Trading details for create trading
            // customerpage.tradingName(data.tradingName)
            // customerpage.addressLineOne(data.addressLineOne)
            // customerpage.addressLineTwo(data.addressLineTwo)
            // customerpage.emailTrading(data.emailTrading)
            // customerpage.deliveryDate()

            // customerpage.submitTrading()



           cy.get(3000)

            // productpage.inputCountry(data.country)
            // const optionOrigin = 'Albania'
            // cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
            //     let elementFound = false
            //     if ($ele.text().trim() === optionOrigin) {
            //         elementFound = true
            //         cy.wrap($ele).click()
            //     }
            // })

            

        })

    });



});