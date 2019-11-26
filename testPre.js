describe('Page400 Error', function () {
    it('Test if page 400 is working', function () {
        cy.visit('https://pre58.casamentos.pt/vestidos-noiva/demetrios/200106--v103527')

        cy.get('.btn-fav').click()
        cy.get('[id="txtStrPoblacion"]')
        .type('Es').get('.matching-text').eq(0).click()
       
        
        
    
    
    })})
