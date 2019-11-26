describe('usaFirstTest', function () {
    it('will try to make a lead to Jelwery Glam', function () {

      //cy.visit('https://www.weddingwire.com')
     cy.visit('https://www.weddingwire.com/biz/jelwery-glam/4b7ebd73d077039c.html')
  
      //cy.get('Nombre').type('carlQA')
  
     // cy.url().should('include', 'Barcelona')
  
      cy.get('[placeholder="First and last name"]').type('carlQA2')
      cy.get('[placeholder="Email"]').type('cgarrobodas+28@gmail.com')
      cy.get('[placeholder="Phone number"]').type('000000000')
      cy.get('[placeholder="mm/dd/yyyy"]')
      .click()
      .get('[class="year active"]')
      .click()
      .get('[class="month active"]')
      .click()
      .get('[class="day  active"]')
      .click()
      cy.get('[placeholder="Write your message"]')
      .type('placeholder="Write your message"placeholder="Write your message"')
      cy.get('.storefrontContactWW__submit ').click()
      cy.visit('https://www.weddingwire.com/c/es-spain/spain/wedding-vendors/ES-605-rca.html')
      cy.url().should('include', 'wedding-vendors')
      // cy.get('.action-email')
      //.type('fake@email.com')
      //.should('have.value', 'fake@email.com')
    })
  })