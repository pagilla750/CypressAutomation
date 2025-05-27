import confirmationPage from "../../support/pageObjects/confirmationPage"

class cartPage {

    checkoutItems() {
        cy.contains('Checkout').click()
        return new confirmationPage()
    }
    
    sumOfProdcuts() {

        // cy.sumofprodcuts()
        let sum = 0
        return cy.get('td:nth-child(4) strong')
            .each(($el) => {
                const amount = Number($el.text().split(" ")[1].trim())
                sum = sum + amount
                cy.log(sum)
            })
            .then(() => {
                // expect(sum).to.be.lessThan(300000)
                return sum
            })
        
    }
    
}
export default cartPage