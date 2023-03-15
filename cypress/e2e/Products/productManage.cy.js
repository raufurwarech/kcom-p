describe('create Products', () => {


    it('Product Management', () => {

        cy.viewport('macbook-16')
        cy.visit("https://kcom.kuiperz.io/login")
        cy.url().should('include', 'kuiperz.io')

        // Login app
        cy.get("#login-email").should('be.visible').type('test@ecom.com')
        cy.get("#login-password").should('be.visible').type('password')
        cy.get("button[type=submit]").click()
        // cy.title().should('include', 'Home')
        cy.wait(3000)

        // create brands
        cy.contains("Products").click()
        cy.contains("Product List").click()
        cy.wait(3000)
        cy.contains("Add Product").click()


        
        cy.get("#sku-number").should('be.visible').type('123344')
        cy.get("#product-name").should('be.visible').type('Coffee')
        cy.get("#product-barcode").should('be.visible').type('12345asdf')

        cy.get("#category-id").click().type("TEA").each(function ($ele, index, list){

            cy.select()
        })

        // category(category) {

        //     cy.get(this.category_dropdown).type(category)
        //     cy.get('vs24__listbox div').each(($el, index, $list) => {
        //         if ($el.text() === 'WATER') {
        //             cy.wrap($el).click()
        //         }
                
        //     })   
    
        // }


        // cy.get("#brand-name").should("be.visible").type("ACME TEA")
        //cy.get("div.h-100:nth-child(3) div.vertical-layout.h-100.vertical-menu-modern.menu-expanded.navbar-floating.footer-static div.app-content.content div.content-wrapper div.content-body div.b-sidebar-outer:nth-child(1) div.b-sidebar.shadow.b-sidebar-right.bg-white.text-dark.sidebar-lg:nth-child(2) div.b-sidebar-body span:nth-child(2) form.p-2 div.d-flex.mt-2:nth-child(3) button.btn.mr-2.btn-primary:nth-child(1) > div:nth-child(1)").click()

    });



});