/// <reference types="cypress" />

describe("Load more button", () => {
  it("Check if the button add 10 itens to the list", () => {
    cy.visit("http://localhost:5173/");
    const loadMoreBtn = cy.contains("Load more");
    loadMoreBtn.click();
    cy.get("#comics-container")
      .children()
      .should("have.length", 30);
  });
});
