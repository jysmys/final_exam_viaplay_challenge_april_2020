describe("Main view is shown", () => {
  beforeEach(() => {
    cy.server();
    // cy.route({
    //   method: "GET",
    //   url: "**/pc-se/serier/samtliga*",
    //   response: "fixture:movie_list.json",
    // });
  });
  it("displays movies", () => {
    cy.visit("/");

    cy.get(".display-show").should("be.visible");
  });
});
