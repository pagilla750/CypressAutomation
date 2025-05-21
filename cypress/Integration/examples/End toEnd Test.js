/// <reference types="cypress" />

describe('End to End Test', function () {

    before(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('end to end test', function () {
        const productname = this.data.productname

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/#')
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('#terms').check()
        cy.get('#signInBtn').click()

        //assertion
        cy.contains('Shop Name').should('be.visible')
        cy.get('app-card').should('have.length', 4)

        cy.get('app-card').filter(`:contains("${productname}")`).contains('Add').click()
        cy.get('app-card').eq(0).contains('Add').click()

        cy.contains('Checkout').click()

        let sum = 0
        cy.get('td:nth-child(4) strong')
            .each(($el) => {
                const amount = Number($el.text().split(" ")[1].trim())
                sum = sum + amount
                cy.log(sum)
            })
            .then(() => {
                expect(sum).to.be.lessThan(200000)
            })

        cy.contains('Checkout').click()
        cy.get('#country').type('ind')
        //override default timeout settings
        Cypress.config('defaultCommandTimeout', 6000)
        // cy.wait(1000)
        cy.contains('India').click()
        cy.contains('Purchase').click()
        cy.get('.alert').should('contain', 'Success')
        // cy.get('.alert').then(function (el) {
        //     const aleartmessage = el.text()
        //     expect(aleartmessage).contains('Thank you! Your order will be delivered in next few weeks :-')
        // })
    })


})