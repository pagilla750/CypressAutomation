/// <reference types="cypress" />

describe('Select Child Windows', function()
{
    
it('Select Child Windows',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('td:nth-child(2)').each(($el,index,$list) => {

        const coursetext = $el.text()
        if(coursetext.includes("Python")){
            cy.get('td:nth-child(2)').eq(index).next().then(function(price) {
                const pricetext = price.text()
                expect(pricetext).to.equal('25')
            })

        }

    })

})

})