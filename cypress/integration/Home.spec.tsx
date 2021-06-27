/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loading the main page with empty search form', () => {
    cy.dataCy('formInput').should('contain.text', '');
    cy.dataCy('formInput').should('have.prop', 'placeholder', 'search brand...');
  });

  it('Validate the form is not clickable when input text is empty', () => {
    cy.dataCy('submitForm').should('be.disabled', true);
    cy.dataCy('formInput').type('Adidas');
    cy.dataCy('submitForm').should('have.prop', 'disabled', false);
  });

  it('validate the reset button is clicked and remove all results panel', () => {
    cy.dataCy('formInput').type('Adidas');
    cy.dataCy('resetForm').click();
    cy.dataCy('formInput').should('contain.text', '');
    cy.dataCy('submitForm').should('be.disabled', true);
  });

  it('send a request to the server with invalid search input', () => {
    cy.dataCy('formInput').type('kjsd');
    cy.dataCy('submitForm').click();
    cy.dataCy('missingResultPanel').should('contain.text', 'No results were found');
  });

  it('send a request to the server with valid search input', () => {
    cy.dataCy('formInput').type('Nike');
    cy.dataCy('submitForm').click();
    cy.get('.infinite-scroll-component').should('exist', true);
  });
});
