import { Productpage } from "./pages/product/product_page";
import { BrandPage } from "./pages/product/brand_page";
import { CategoryPage } from "./pages/product/category_page";
import { UnitPage } from "./pages/product/unit_page";
import { createitems } from "../util";

describe('Create Products', () => {

    const productpage = new Productpage()
    const brandpage = new BrandPage()
    const categorypage = new CategoryPage()
    const unitpage = new UnitPage()

    it('Product Management', () => {

        cy.fixture('product.json').then((data) => {

            data.skuNumber = createitems(data.skuNumber)
            data.productName = createitems(data.productName)
            data.barCode = createitems(data.barCode)            
            data.new_brand = createitems.apply(data.new_brand)
            data.new_category = createitems.apply(data.new_category)

            // Login application
            cy.viewport('macbook-16')
            cy.visit("https://kcom.kuiperz.io/login")
            productpage.enterEmail(data.enterEmail)
            productpage.enterPassword(data.enterPassword)
            productpage.clickLogin()
            cy.title().should('be.equal', 'Home')
            cy.wait(3000)

            
            // create brands
            productpage.clickProductMenu()
            cy.wait(5000)
            brandpage.clickBrandMenu()
            cy.wait(5000)
            brandpage.clickAddBrand()
            cy.wait(3000)

            // input brand data
            brandpage.inputBrnadName(data.new_brand)
            brandpage.submitBrandname()
            cy.wait(3000)



            // create category
            categorypage.clickCategoryMenu()
            cy.wait(5000)
            categorypage.clickAddCategory()
            cy.wait(3000)

            // Input category data
            categorypage.inputCategoryName(data.new_category)
            categorypage.submitCategoryname()



            // create Units
            unitpage.clickUnitMenu()
            cy.wait(5000)
            unitpage.clickAddUnit()
            cy.wait(3000)

            // input unit data
            unitpage.inputUnitName(data.new_unit)
            unitpage.submitUnitname()

            
            
            // create new Product (product page)
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
            productpage.inputCategory(data.new_category)
            cy.get('li.vs__dropdown-option--highlight').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.new_category) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputBrand(data.new_brand)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.new_brand) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputUnit(data.new_unit)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.new_unit) {
                    cy.wrap($ele).click()
                }
            })

            productpage.inputSupplier(data.supplier)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.supplier) {
                    cy.wrap($ele).click()
                }
            })
            cy.get(3000)

            productpage.inputCountry(data.country)
            cy.get('li.vs__dropdown-option').each(($ele, index, $list) => {
                if ($ele.text().trim() === data.country) {
                    cy.wrap($ele).click()
                }
            })

            cy.xpath("//div[contains(text(),'Add')]").click()
            cy.wait(3000)

            

        })

    });



});

