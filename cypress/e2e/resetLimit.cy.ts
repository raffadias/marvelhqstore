/// <reference types="cypress" />

describe("Reset limit button", () => {
  it("Check if the button restore the initial limit of the list", () => {
    cy.visit("http://localhost:5173/");
    const loadMoreBtn = cy.contains("Load more");
    loadMoreBtn.click();
    cy.get("#comics-container")
      .children()
      .should("have.length", 30);
    const resetLimitBtn = cy.contains("Reset limit");
    resetLimitBtn.click();
    cy.get("#comics-container")
      .children()
      .should("have.length", 20);
  });
});
