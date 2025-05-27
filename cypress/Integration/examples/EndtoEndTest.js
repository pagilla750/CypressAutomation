/// <reference types="cypress" />

import homePage from "../../support/pageObjects/homePage"

describe('End to End Test', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
            this.homepage = new homePage()
        })

    })

    it('end to end test', function () {
        const productname = this.data.productname

        this.homepage.goTo(Cypress.env('url')+'/loginpagePractise/#')
        const productpage = this.homepage.login(this.data.username, this.data.password)
        productpage.pageValidation().should('be.visible')
        productpage.getCardCount().should('have.length', 4)
        productpage.selectProduct(productname)
        productpage.selectFirstProduct()
        const cartPage = productpage.goToCart()
        cartPage.sumOfProdcuts().then(function (sum) {
            expect(sum).to.be.lessThan(300000)
        })

        const confirmationPage = cartPage.checkoutItems()
        confirmationPage.submitFormDetail()
        confirmationPage.getAlertMessage().should('contain', 'Success')

    })


})