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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('@testing-library/cypress/add-commands');

// load https://github.com/NoriSte/cypress-wait-until
// which adds "cy.waitUntil" command
// note that this 3rd party module includes TypeScript "types"
// file that correctly adds "waitUntil" to the Cypress Chainer namespace
require('cypress-wait-until');

/**
 * Adds custom command "cy.dataCy" to the global "cy" object
 *
 * @example cy.dataCy('greeting')
 */
Cypress.Commands.add('dataCy', value => cy.get(`[data-cy=${value}]`));

// the type defnitions be defined in "index.d.ts" file
