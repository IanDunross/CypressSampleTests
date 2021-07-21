import { Before, Given, Then, When } from 'cypress-cucumber-preprocessor/steps'
import selectors from '../selectors'


Given(/^I'm on the Calculator main page$/, { timeout: 3 * 5000 }, () => {

    cy.visit(Cypress.config().baseUrl)

});

Then(/^I should see header of the main page as "([^"]*)"$/, (title) => {

    cy.get(selectors.mainHeader)
        .should('be.visible')
        .should('have.text', title)

});


When(/^I enter first value as number "([^"]*)" and second value as number "([^"]*)"$/, { timeout: 1 * 5000 }, (valueFirst, valueSecond) => {

    cy.enteringCalculatorValues(valueFirst,valueSecond)

});

When(/^I select math operator from select option as "([^"]*)"$/, (mathSymbol) => {

    cy.get(selectors.selectMathOption)
        .select(mathSymbol)

});


When(/^I click 'Go' button$/, async () => {

    cy.get(selectors.goButton)
        .click();

});

Then(/^I see the number "([^"]*)" as a result$/, { timeout: 2 * 5000 }, (expectedNumber) => {

    cy.get('h2')
        .should('have.text', expectedNumber)

});

Then(/^I count all rows written in the history and the number should be "([^"]*)"$/, async (countNumber) => {

    cy.get(selectors.resultInMemory)
        .should('have.length', countNumber)

});