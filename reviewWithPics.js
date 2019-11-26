
describe('Do a review', function () {
    it('Tries to review a vendor with pics', function () {
        Cypress.version
        cy.visit('https://www.weddingwire.com/')
        cy.clearCookies()
        cy.clearCookie('USER_ID')
        cy.clearLocalStorage()
        cy.visit('https://www.weddingwire.com/users-login.php')
        cy.get('[id="Mail"]').type('cgarrobodas+55@gmail.com')
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
        cy.visit('https://www.weddingwire.com/shared/rate/new?vid=4b7ebd73d077039c')
        cy.get('[data-name="Excellent"]').each(($el, index, $list) => {
            $el.click()
        })
        cy.get('[data-direction="next"]').click()
        cy.get('[name="tituloOpinion"]').type('This is a QA test made with cypress')
        cy.get('[name="opinion"]').type('Oops! You have written less than 30 characters, which is the minimum for a review. Please write a little bit more - this will help other couples decide whether or not to book this vendor!')
        cy.get('[data-direction="next"]').click()
        cy.get('[data-direction="next"]').click()

        cy.get("[id='html5_1dq6gv2b74g4nuo1ve8165li2v4_container']" , {force: true})
        //cy.get('[class="review-vendors-content-title"]'))
        //var hiddenDiv = document.querySelector("#html5_1dq6gv2b74g4nuo1ve8165li2v4_container");
        //var hiddenInput = document.querySelector( "#html5_1dq6gv2b74g4nuo1ve8165li2v4");
        //cy.disableCss()
        //cy.window().then(win => win.disableCss)



        cy.get('[class="iCheck-helper"]').click()
       // cy.get('[class="btnFlat btnFlat--red flex-left-auto app-step-opinion-contest-submit"]').click()

       
    }
    )
}
)