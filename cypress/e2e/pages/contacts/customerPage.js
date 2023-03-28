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
    company_name= "name"

    company_email = "#__BVID__1249"   // checkbox 
    company_mobile = "#__BVID__1250"

    next_page_company = "//button[normalize-space()='Next']"

    //director details 
    director_name = "#director_name"
    sur_name = "#sur_name"
    email_id = "#email"
    password = "#password"
    mobile_Country_Code_Customer = "[class='country-selector__label']"
    mobile_Number_Custoemr = "#phone-2291_phone_number"

    next_page = "div[class='wizard-footer-right'] button[type='button']"

    // contacts details
    given_name = "[placeholder='Given Name']"
    role = "#role"
    mobile_code_contact_details = "#mobile-2332_country_selector"
    phone_number = "#mobile-2332_phone_number"
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
    customerType(custype){
        cy.get(this.company_type).type(custype)

    }

    customerGroup(cugroup){
        cy.get(this.customer_group).type(cugroup)
    }

    abnNumber(abn){
        cy.get(this.abn_number).type(abn)

    }

    CompanyName(compname){
        cy.get(this.company_name).type(compname)
    }

    companyEmail(){
        cy.get(this.company_email).check()
    }

    companyMobile(unit){
        cy.get(this.company_mobile).check(unit)
    }

    nextPage (){
        cy.get(this.next_page_company).click()
    }


    // Add products input fields (director Info)
    directorName(dname){
        cy.get(this.director_name).type(dname)
    }

    directorSurname(dsurname){
        cy.get(this.origin_dropdown).type(dsurname)
    } 

    directorEmail(email){
        cy.get(this.email_id).type(email)
    }

    directorPassword(passw){
        cy.get(this.password).type(passw)
    }

    countryCodeCustomer(){
        cy.get(this.mobile_Country_Code_Customer).click()
    }

    mobileNumberCustomer(customermobile){
        cy.get(this.mobile_Number_Custoemr).type(customermobile)
    }

    nextPageDirector(){
        cy.get(this.next_page_director).click()
    }
    

    // Contacts details for custoemr
    givenName(givenname){
        cy.get(this.given_name).type(givenname)
    }

    customerRole(role){
        cy.get(this.role).type(role)
    }

    mobileCodeContact(mobilecc){
        cy.get(this.mobile_code_contact_details).type(mobilecc)
    }

    phoneNumber(phone){
        cy.get(this.phone_number).type(phone)
    }

    nextPageContacts(){
        cy.get(this.next_page_contacts).click()
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