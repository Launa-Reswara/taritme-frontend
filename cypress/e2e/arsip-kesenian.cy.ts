describe("Arsip Kesenian page", () => {
  it("Should display Arsip Kesenian page and test it", () => {
    cy.visit("http://localhost:3000/arsip-kesenian");

    // test title
    cy.get(`[data-cy="title"]`).should("be.visible");

    // test each article arsip kesenian
    Array(8)
      .fill(null)
      .map((_, index) => {
        cy.get(`[data-cy="article-arsip-kesenian-${index + 1}"]`).should(
          "be.visible"
        );
      });

    // test newsletter component
    cy.get(`[data-cy="newsletter"]`).should("be.visible");
  });
});
