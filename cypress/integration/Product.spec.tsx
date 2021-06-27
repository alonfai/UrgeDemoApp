///<reference types="cypress" />
/// <reference path="../support/index.d.ts" />

describe('Product page', () => {
  beforeEach(() => {});

  it('loading the product page with non existing product id => show 404', () => {
    cy.visit('/product/1');
    cy.dataCy('missingResultPanel').should('contain.text', 'No product 1 was found');
  });

  it('loading the product page with a valid product id', () => {});
});
