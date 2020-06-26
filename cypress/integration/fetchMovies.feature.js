describe("Main view is shown", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:movie_list.json",
    });
  });
  it("displays movies", () => {
    cy.get("#header").should("contain", "ViaPlay");
  });
});
