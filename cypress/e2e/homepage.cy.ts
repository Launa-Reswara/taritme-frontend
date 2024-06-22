describe("Homepage", () => {
  it("Should display homepage and test it", () => {
    cy.visit("http://localhost:3000");

    // test abstract image
    cy.get(`[data-cy="image-abstract"]`).should("be.visible");

    // test card komunitas
    cy.get(`[data-cy="card-komunitas"]`).should("be.visible");

    // test card temukan-pelatih
    cy.get(`[data-cy="card-temukan-pelatih"]`).should("be.visible");

    // test payung tari iamge
    cy.get(`[data-cy="image-payungtari"]`).should("be.visible");

    // test card payung tari
    cy.get(`[data-cy="image-payungtari"]`).should("be.visible");
  });
});
