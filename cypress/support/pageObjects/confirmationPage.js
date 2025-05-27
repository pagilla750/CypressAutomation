
class confirmationPage {

    submitFormDetail() {
        
        
        cy.get('#country').type('India')
        //override default timeout settings
        Cypress.config('defaultCommandTimeout', 6000)
        // cy.wait(1000)
        cy.contains('India').click()
        cy.contains('Purchase').click()
    }  
    getAlertMessage() {

        return cy.get('.alert')

        // cy.get('.alert').then(function (el) {
        //     const aleartmessage = el.text()
        //     expect(aleartmessage).contains('Thank you! Your order will be delivered in next few weeks :-')
        // })
    }      
    
}
export default confirmationPage