describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/dashboard");
  });

  it("link is working", () => {
    cy.get("nav").contains("Support");
  });
});
