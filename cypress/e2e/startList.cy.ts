/// <reference types="cypress" />

describe("Comics list", () => {
  it("Check if list start with 20 items", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#comics-container")
      .children()
      .should("have.length", 20);
  });
});
