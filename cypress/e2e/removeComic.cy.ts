/// <reference types="cypress" />

describe("Remove comic", () => {
  it("Check if the remove button works and empty cart message appears", () => {
    cy.visit("http://localhost:5173/");
    const comicsContainer = cy.get("#comics-container");
    comicsContainer
      .children()
      .first()
      .click();
    const buyComicBtn = cy.contains("Buy comic");
    buyComicBtn.click();

    const cartIcon = cy.get("#cart");
    cartIcon.click();
    const removeComicButton = cy.get("#remove-comic");
    removeComicButton.click();
    const emptyCartMessage = cy.contains("Cart empty.");
    emptyCartMessage.should("be.visible");
  });
});
