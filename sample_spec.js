
describe('My First Test', function () {
  it('Visits the Kitchen Sink', function () {
    cy.visit('https://www.google.es')

    cy.get('.gLFyf').type('Barcelona {enter}')

    cy.url().should('include', 'Barcelona')

    cy.get('.ZYMsjf').eq(3).click()

    // cy.get('.action-email')
    //.type('fake@email.com')
    //.should('have.value', 'fake@email.com')
  })
})