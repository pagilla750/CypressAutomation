/// <reference types="cypress" />

describe('My first test suite', function()
{

it('My first testcase',function(){

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('cu')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',2)
    //Alais repeated locator
    cy.get('.products').as('productlocator')

    // click the required item thru Iterator
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {

        const textveg = $el.find('h4.product-name').text()
        if(textveg.includes('Cucumber')){
            //wrap this element so that we can use cypress commands on it
            cy.wrap($el).find('button').click()
        }
    })
    cy.get('.cart-icon > img').click()
    cy.contains('PROCEED TO CHECKOUT').click()

    cy.get('.promoCode').type('rahulshettyacademy')
    cy.get('.promoBtn').click()
    // cy.wait(2000)
    cy.contains('Place Order').click()
    // cy.get('select')
    cy.get('.chkAgree').click()
    cy.get('button').click()
    cy.get('.wrapperTwo').should('contain.text',"You'll be redirected to Home page shortly!!")



})

})
