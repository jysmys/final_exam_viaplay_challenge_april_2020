describe("Main view is shown", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/pc-se/serier/samtliga",
      response: "fixture:movie_list.json",
    });
  });
  it("displays movies", () => {
    cy.get("#header").should("contain", "ViaPlay");
  });
});
