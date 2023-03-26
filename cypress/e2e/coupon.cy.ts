/// <reference types="cypress" />

describe("Coupon", () => {
  it("Check if the coupon input add the discount and validation", () => {
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

    const couponInput = cy.get("#coupon-input");
    couponInput.type("Marvelcommon");

    const applyCouponBtn = cy.contains("Apply discount coupon");
    applyCouponBtn.click();
    const appliedToast = cy.contains("Discount applied on common comics.");
    appliedToast.should("be.visible");

    // test if invalid toast appears on the screen
    couponInput.clear();
    couponInput.type("marvel123");
    applyCouponBtn.click();
    const errorToast = cy.contains("Invalid coupoun.");
    errorToast.should("be.visible");
  });
});
