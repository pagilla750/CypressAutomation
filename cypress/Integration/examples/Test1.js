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

    cy.get('@productlocator').find('.product').should('have.length',2)
    //hardcoded index
    cy.get('@productlocator').find('.product').eq(1).contains('ADD TO CART').click()
    // click the required item thru Iterator
    cy.get('@productlocator').find('.product').each(($el, index, $list) => {

        const textveg = $el.find('h4.product-name').text()
        if(textveg.includes('Cucumber')){
            //wrap this element so that we can use cypress commands on it
            cy.wrap($el).find('button').click()
        }
    })
    //Assert the logoelement text
    cy.get('.brand').should('have.text','GREENKART')

    //print the logoelelement text in rest run log
    cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    })



})

})
