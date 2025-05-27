import cartPage from "../../support/pageObjects/cartPage"

class productPage {

    pageValidation() {
        //assertion
        return cy.contains('Shop Name')

    }

    getCardCount() {
        return cy.get('app-card')

    }

    selectFirstProduct() {
        cy.get('app-card').eq(0).contains('button', 'Add').click()
    }

    selectProduct(productname) {
        cy.get('app-card').filter(`:contains("${productname}")`).contains('Add').click()
        cy.get('app-card').eq(0).contains('Add').click()
    }

    goToCart() {
        cy.contains('Checkout').click()
        return new cartPage()
    }

}
export default productPage
