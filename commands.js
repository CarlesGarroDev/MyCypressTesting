// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
//import 'cypress-file-upload';
Cypress.Commands.add('disableCss', ({ styleSheets }) => {
        var stylesheet = document.styleSheet[0];
        var cssStyles = document.CSSStyleSheet[0];
        var otherStyle = document.styleSheetList[0]
        stylesheet.disabled=true;
        cssStyles.disabled=true;
        otherStyle.disabled=true;
      // document.getElementById("styles").disabled=true;
  });
  function del_style() {
    document.getElementById("styles").disabled=true;
}
