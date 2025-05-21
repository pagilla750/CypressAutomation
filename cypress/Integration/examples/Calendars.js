/// <reference types="cypress" />

describe('Select Dates from Calendar', function()
{
    
it('Select Date',function(){

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')

    const monthnumber ="12"
    const date="15"
    const year="2025"
    const expectedlist = [monthnumber,date,year]

    cy.get('.react-date-picker__calendar-button__icon').click()
    cy.get("span[class*='react-calendar']").click()
    cy.get("span[class*='react-calendar']").click()

    cy.contains("button",year).click()
    cy.get('.react-calendar__year-view__months__month').eq(Number(monthnumber)-1).click()
    cy.contains("abbr",date).click()

    //Assertion
    cy.get('.react-date-picker__inputGroup__input').each(($el,index,$list)=>
        {
        cy.wrap($el).invoke('val').should('eq',expectedlist[index])
        })

   
})

})