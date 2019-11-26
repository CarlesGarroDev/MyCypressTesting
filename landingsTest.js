describe('landings test checking nav bar', function()
    {it('nav bar search landings', function(){
        cy.visit('https://www.weddingwire.com/landings/')

        cy.get('.adwSearchForm__input--submit')
        .should('have.value', 'search')

        cy.get('.adwSearchForm__input--first')
        .type('Jelwery Gla')
        cy.get('.go-empresa').eq(1).click()
        cy.request('https://www.weddingwire.com/landings/?adw=0&gs=0&pageSize=16&isNavegacionUsuario=1&isFuzzySearch=0&isSearch=1&isHome=1&strBusqueda=Jelwery+Glam')//, 'log')
        cy.url().should('include', 'Jelwery+Glam')

    })

    }
)