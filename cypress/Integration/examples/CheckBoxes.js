/// <reference types="cypress" />

describe('Select Check boxes', function()
{
    
it('Select Check boxes',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    cy.get('input[type="checkbox"]').check(['option1','option2','option3'])

    //static dropdowns - select particular option from dropdown
    cy.get('select').select('option1').should('have.value','option1')

})


it('Select Drop Downs',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    //dynamic dropdowns - select the option from dropdwon changes based on the input
    cy.get('#autocomplete').type('Ind')
    cy.get('.ui-menu-item div').each(($el, index, $list) => {
        cy.log($el.text())
          if($el.text()=='India'){
            //wrap this element so that we can use cypress commands on it
            cy.wrap($el).click()
        }
    })
    cy.get('#autocomplete').should('have.value','India')
})

})
