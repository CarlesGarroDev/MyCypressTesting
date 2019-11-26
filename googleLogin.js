import { watchFile } from "fs"

describe('Google Login', function () {

    it('Test if google login 3rd party is possible', function () {

        Cypress.config('chromeWebSecurity',false);
        cy.visit('https://www.weddingwire.com/users-login.php')


        cy.get('[class="btn-outline btn-outline--social btn-full app-google-login"]').click()
        cy.wait(5000)
        cy.get('iframe').then($element => {

            const $body = $element.contents().find('body')

            let stripe = cy.wrap($body)
            stripe.find('.Input .InputElement').eq(0).click().type('4242424242424242')
            stripe = cy.wrap($body)
            stripe.find('.Input .InputElement').eq(1).click().type('4242')
            stripe = cy.wrap($body)
            stripe.find('.Input .InputElement').eq(2).click().type('424')
        })
       /*  cy.get("iframe").then($iframe => {
            const $doc = $iframe.contents();
            cy.wrap($doc.find("identifierId")).type("1234");
        }); */
    })
})
