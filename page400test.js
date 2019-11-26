describe('Page400 Error', function () {
    it('Test if page 400 is working', function () {
        cy.visit('https://www.weddingwire.com')

        // cy.request('/badurl', 'failOnStatusCode:false').its('body').should('include', '<p class="text-muted greyText">Error: 404</p>')
        cy.request({
            method: 'GET',
            url: 'https://www.weddingwire.com/badurl',
            failOnStatusCode: false

        }
        )
    }
    )
})
