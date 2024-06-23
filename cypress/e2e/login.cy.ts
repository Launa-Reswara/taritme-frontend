describe("Login user page", () => {
  it("Should display login user page and test it", () => {
    cy.visit("http://localhost:3000/auth/login");

    cy.get(`[data-cy="bg-login-side-image"]`).should("be.visible");

    cy.get(`[data-cy="title"]`);

    cy.get(`[data-cy="form-login-account"]`)
      .should("be.visible")
      .then(() => {
        cy.get(`[data-cy="input-email"]`)
          .should("be.visible")
          .type("test@test.com");
        cy.get(`[data-cy="input-password"]`)
          .should("be.visible")
          .type("cypress");

        cy.get(`[data-cy="checkbox-ingatkan-saya"]`).should("be.visible");
        cy.get(`[data-cy="button-masuk"]`).should("be.visible");
      });
  });
});
