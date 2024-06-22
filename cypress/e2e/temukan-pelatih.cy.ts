describe("Temukan Pelatih page", () => {
  it("Should display Temukan Pelatih page and test it", () => {
    cy.visit("http://localhost:3000/temukan-pelatih");

    // title
    cy.get(`[data-cy="title"]`).should("be.visible");

    // test pelatih tari card in rekomendasi
    Array(3)
      .fill(null)
      .map((_, index) => {
        cy.get(`[data-cy="card-rekomendasi-pelatih-tari-${index + 1}"]`).should(
          "be.visible"
        );
      });

    // test pelatih tari card in lainnya
    Array(4)
      .fill(null)
      .map((_, index) => {
        cy.get(`[data-cy="card-lainnya-pelatih-tari-${index + 1}"]`).should(
          "be.visible"
        );
      });

    // test searchbar command functionality
    cy.get(`[data-cy="searchbar"]`).should("be.visible").click();
  });
});
