export class CustomerManage {

    enterEmail_textbox = "#login-email"
    enterPassword_textbox = "#login-password"
    clickLogin_button = "button[type=submit]"

    click_Contacts_Menu = "//span[normalize-space()='Contacts']"
    click_CustomerList_menu = "[href='/contacts/customer/list']"
    click_AddCustomer_button = "Add Customer"

    // Company Info
    company_type = "//div[@id='vs30__combobox']//input[@type='search']"
    customer_group = "#cus-group"
    abn_number = "#abn"
    // company_name= "name"

    next_page_company = "//button[normalize-space()='Next']"

    //director details 
    director_name = "#director_name"
    sur_name = "#sur_name"
    email_id = "#email"
    password = "#password"
    mobile_Country_Code_director = "[class='country-selector input-country-selector is-focused has-list-open']"
    mobile_Number_director = "div#phone [placeholder='Phone number']"
    next_page_director = "//button[contains(text(),'Next')]"

    // contacts details
    given_name = "[placeholder='Given Name']"
    role = "#role"
    mobile_Country_code_contact = "[#class='country-selector__label']"
    mobile_Number_Contract = "div#phone [placeholder='Phone number']"
    next_page_contacts = "[//button[normalize-space()='Next']"


    // Trading details 
    trading_name = "#trading_name"
    addressLine_one = "#trading-address-line-1"
    addressLine_two = "#address_line2"
    suburb = "#suburb"
    country = "#country"
    state = "#state"
    postcode = "#postcode"
    email = "#email"
    delivery_date_one = "#__BVID__2367"
  
    submit = "//button[normalize-space()='Submit']"

    

    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to custoemr page
    contactMenu(){
        cy.xpath(this.click_Contacts_Menu).click()

    }
    
    CustomerListMenu(){
        cy.get(this.click_CustomerList_menu).click()
    }

    AddCustomer(){
        cy.contains(this.click_AddCustomer_button).click()
        
    }

    // Add customer input fields (Company Info)
    // customerType(custype){
    //     cy.get(this.company_type).type(custype)

    // }

    customerGroup(cugroup){
        cy.get(this.customer_group).type(cugroup)
    }

    abnNumber(abn){
        cy.get(this.abn_number).type(abn)

    }


    nextPage (){
        cy.xpath(this.next_page_company).click()
    }


    // Add products input fields (director Info)
    directorName(dname){
        cy.get(this.director_name).type(dname)
    }

    directorSurname(dsurname){
        cy.get(this.sur_name).type(dsurname)
    } 

    directorEmail(email){
        cy.get(this.email_id).type(email)
    }

    directorPassword(passw){
        cy.get(this.password).type(passw)
    }

    // countryCodeCustomer(){
    //     cy.get(this.mobile_Country_Code_director).click()
    // }

    mobileNumberCustomer(customermobile){
        cy.get(this.mobile_Number_director).type(customermobile)
    }



    nextPageDirector(){
        cy.xpath(this.next_page_director).click()
    }
    

    // Contacts details for custoemr
    givenName(givenname){
        cy.get(this.given_name).type(givenname)
    }

    customerRole(role){
        cy.get(this.role).type(role)
    }

    mobileCodeContact(){
        cy.get(this.mobile_Country_code_contact).click()
    }

    phoneNumber(phone){
        cy.get(this.mobile_Number_Contract).type(phone)
    }

    nextPageContacts(){
        cy.xpath(this.next_page_contacts).click()
    }
    

    // Trading details for create supplier

    tradingName(tradname){
        cy.get(this.trading_name).type(tradname)
    }
    addressLineOne(addressone){
        cy.get(this.addressLine_one).type(addressone)
    }
    addressLineTwo(addresstwo){
        cy.get(this.addressLine_two).type(addresstwo)
    }
    
    suburbTrading(suburb){
        cy.get(this.suburb).type(suburb)
    }

    countryTrading(countrytrad){
        cy.get(this.country).type(countrytrad)
    }
    stateTrading(statetrad){
        cy.get(this.state).type(statetrad)
    }
    
    postcodeTrading(postcode){
        cy.get(this.postcode).type(postcode)
    }
    
    emailTrading(email){
        cy.get(this.email).type(email)
    }
    
    deliveryDate(statetrad){
        cy.get(this.delivery_date_one).check(statetrad)
    }

    submitTrading(submit){
        cy.get(this.submit).click(submit)
    }

    
}