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
            
            cy.contains('Company Email').click();
            cy.contains('Company Mobile').click();
            cy.wait(1000)

            customerpage.nextPage()
            cy.wait(5000)

            // Add customer input fields (director Info)
            customerpage.directorName(data.directorName)
            customerpage.directorSurname(data.directorSurname)
            customerpage.directorEmail(data.emailId)
            customerpage.directorPassword(data.password)

            customerpage.phoneCountryCodeDirector()
            cy.wait(1000)
            customerpage.phoneSelectCountryCodeDirector()
            cy.wait(2000)

            customerpage.phoneNumberCustomer("01841785864")
            cy.wait(2000)

            customerpage.nextPageDirector()
            cy.wait(5000)

            // Contacts details for customer
            customerpage.givenName(data.givenName)
            customerpage.customerRole(data.role)

            customerpage.mobileCountryCodeDirector()
            cy.wait(1000)
            customerpage.mobileSelectCountryCodeDirector()
            cy.wait(2000)

            customerpage.mobileNumberContacts("01841785864")
            cy.wait(2000)

            customerpage.nextPageContacts()


            // Trading details for create trading
            customerpage.tradingName(data.tradingName)
            customerpage.addressLineOne(data.addressLineOne)
            customerpage.addressLineTwo(data.addressLineTwo)
            customerpage.suburbTrading(data.suburb)
            customerpage.countryTrading(data.countryTrading)
            customerpage.stateTrading(data.stateTrading)
            customerpage.postcodeTrading(data.postcodeTrading)
            customerpage.emailTrading(data.emailTrading)
            customerpage.deliveryDate()

            customerpage.submitTrading()
            cy.get(2000)

            // verification customer adding 
            customerpage.customerList()
            cy.wait(2000)
            customerpage.searchCustoemr(data.abnNumber)
            cy.wait(2000)
            customerpage.actionButton()
            customerpage.activeCustomer()
            cy.wait(2000)
            customerpage.confirmActivation()
            

        })

    });



});