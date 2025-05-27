import productPage from "../../support/pageObjects/productPage"

class homePage 
{

    goTo(url) {
        cy.visit(url)
    }
    
    login(username, password) 
    {
        
        cy.get('#username').type(username)
        cy.get('#password').type(password)
        cy.get('#terms').check()
        cy.get('#signInBtn').click()
        
        return new productPage()

    }
}
export default homePage
