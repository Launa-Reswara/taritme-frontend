describe("Komunitas page", () => {
  it("Should display Komunitas page and test it", () => {
    cy.visit("http://localhost:3000/komunitas");

    // test title
    cy.get("h1").should("be.visible").contains("Komunitas");

    // test hero section
    cy.get(`[data-cy="hero"]`).should("be.visible");

    // test list komunitas
    cy.get(`[data-cy="list-card-komunitas"]`).should("be.visible");

    // looping and test six card komunitas
    Array(6)
      .fill(null)
      .map((_, index) => {
        cy.get(`[data-cy="card-komunitas-${index + 1}"]`).should("be.visible");
      });
  });
});
