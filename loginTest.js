describe('Login bypass Test', function(){
    it('Tries to bypass login', function(){
        cy.visit('https://www.weddingwire.com/users-login.php')
        cy.get('[id="Mail"]').type('cgarrobodas@gmail.com')
        cy.get('[id="Password"]').type('000000')
        cy.get('.btn-flat').click()
        // cy.request({
        //     method: 'POST',
        //     url: '/users-login.php', // baseUrl is prepended to url
        //     form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
        //     body: {
        //       username: 'cgarrobodas@gmail.com',
        //       password: '000000'
        //     }
        //   })
          
          // to prove we have a session
          cy.getCookies()
          cy.getCookie('USER_ID', 'USER_TIPO').should('exist')

        
    })
})