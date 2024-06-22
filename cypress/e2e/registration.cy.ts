describe("Registration page", () => {
  it("Should display registration account page and test it", () => {
    cy.visit("http://localhost:3000/auth/registration");

    // test title
    cy.get(`[data-cy="title"]`).should("be.visible");

    // test form and input
    cy.get(`[data-cy="form-registration"]`)
      .should("be.visible")
      .then(() => {
        cy.get(`[data-cy="input-nama-lengkap"]`)
          .should("be.visible")
          .type("Test Cypress");
        cy.get(`[data-cy="input-email"]`)
          .should("be.visible")
          .type("test@test.com");
        cy.get(`[data-cy="input-password"]`)
          .should("be.visible")
          .type("cypress");

        cy.get(`[data-cy="checkbox-terms"]`).should("be.visible");
        cy.get(`[data-cy="button-daftar"]`).should("be.visible");
      });
  });
});
