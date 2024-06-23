describe("Login Admin page", () => {
  it("Should display Login Admin page and test it", () => {
    cy.visit("http://localhost:3000/auth/login/admin");

    // test title
    cy.get(`[data-cy="title"]`).should("be.visible").contains("Selamat Datang");

    // test side image
    cy.get(`[data-cy="bg-login-side-image"]`).should("be.visible");

    // test form
    cy.get(`[data-cy="form-login-admin"]`)
      .should("be.visible")
      .then(() => {
        // test input email
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
