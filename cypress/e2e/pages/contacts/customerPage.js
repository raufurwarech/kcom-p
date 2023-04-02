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
    next_page_company = "//button[normalize-space()='Next']"

    //director details 
    director_name = "#director_name"
    sur_name = "#sur_name"
    email_id = "#email"
    password = "#password"
    phone_Country_Code_Director = "div#phone label.country-selector__label"
    phone_Select_Country_Code_Director = "div#phone div.iti-flag-small.iti-flag.bd"
    phone_Number_director = "div#phone [placeholder='Phone number']"
    next_page_director = "//button[contains(text(),'Next')]"

    // contacts details
    given_name = "[placeholder='Given Name']"
    role = "#role"
    mobile_Country_Code_Director = "div#mobile label.country-selector__label"
    mobile_Select_Country_Code_Director = "div#mobile div.iti-flag-small.iti-flag.bd"
    
    mobile_Number_Contract = "div#mobile [placeholder='Phone number']"
    next_page_contacts = "Next" 


    // Trading details 
    trading_name = "#trading_name"
    addressLine_one = "#trading-address-line-1"
    addressLine_two = "#address_line2"
    suburb = "div#TradingDetails6 input#suburb"
    country = "div#TradingDetails6 input#country"
    state = "div#TradingDetails6 input#state"
    postcode = "div#TradingDetails6 input#postcode"
    email = "div#TradingDetails6 input#email"
    delivery_date_one = "Monday"
  
    submit = "Submit"

    // verification customer add
    customer_List = "Customer List"
    search_customer = "[placeholder='Search...']"
    actions_button = "#dropdown-right__BV_toggle_"
    activate_customer = "Activate"
    confirm_active_custoemr = "[class='swal2-confirm btn btn-primary']"

    

    enterEmail(userid) {
        cy.get(this.enterEmail_textbox).should('be.visible').type(userid)

    }

    enterPassword(password) {
        cy.get(this.enterPassword_textbox).should('be.visible').type(password)

    }

    clickLogin() {
        cy.get(this.clickLogin_button).click()
    }

    // go to customer page
    contactMenu(){
        cy.xpath(this.click_Contacts_Menu).click()

    }
    
    CustomerListMenu(){
        cy.get(this.click_CustomerList_menu).click()
    }

    AddCustomer(){
        cy.contains(this.click_AddCustomer_button).click()
        
    }

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

    phoneCountryCodeDirector(){
        cy.get(this.phone_Country_Code_Director).click()
    }

    
    phoneSelectCountryCodeDirector(){
        cy.get(this.phone_Select_Country_Code_Director).click()
    }

    phoneNumberCustomer(customermobile){
        cy.get(this.phone_Number_director).type(customermobile)
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

    mobileCountryCodeDirector (){
        cy.get(this.mobile_Country_Code_Director).click()
    }

    mobileSelectCountryCodeDirector (){
        cy.get(this.mobile_Select_Country_Code_Director).click()
    }

    mobileNumberContacts(mobile){
        cy.get(this.mobile_Number_Contract).type(mobile)
    }
    
    nextPageContacts(){
        cy.contains(this.next_page_contacts).click()
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
    
    deliveryDate(){
        cy.contains(this.delivery_date_one).click()
    }

    submitTrading(){
        cy.contains(this.submit).click()
    }

    // verification customer adding
    customerList(){
        cy.contains(this.customer_List).click()
    }

    searchCustoemr(searchcustomer){
        cy.get(this.search_customer).type(searchcustomer)
    }
   
    actionButton(){
        cy.get(this.actions_button).click()
    }
    activeCustomer(){
        cy.get(this.activate_customer).click()
    }

   confirmActivation(){
    cy.get(this.confirm_active_custoemr).click()
   }
    
}