// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:

import './commands'
import '@percy/cypress'

// Alternatively you can use CommonJS syntax:
// require('./commands')

beforeEach(() => {
    cy.log('This will run before each test in the project')
    if (Cypress.env('isMobile')) {
        cy.viewport('iphone-8')
    }
})