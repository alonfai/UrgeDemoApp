///<reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('loading the main page with empty search form', () => {});

  it('Validate the form is not clickable when input text is empty', () => {});

  it('Validate the search button is clicked when text input is present', () => {});

  it('validate the reset button is clicked and remove all results panel', () => {});
});

export {};
