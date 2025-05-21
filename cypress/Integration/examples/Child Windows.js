/// <reference types="cypress" />

describe('Select Child Windows', function()
{
    
it('Select Child Windows',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#opentab').invoke('removeAttr','target').click()

    cy.origin('https://www.qaclickacademy.com', () => {
    cy.get(".nav-item a[href*='about']").click()

    cy.get('.mt-50 > h2').should('have.text','Welcome to QAClick Academy ')

})
    

    
})

})
