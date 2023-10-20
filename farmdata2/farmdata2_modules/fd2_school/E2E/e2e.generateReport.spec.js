describe("Test Report Generation", () => {
    beforeEach(() => {
      cy.login("manager1", "farmdata2");
      cy.visit("/farm/fd2-school/e2e");
    });

    it("Test Report Generation", () => {
      cy.get("[data-cy=report-header]").not.exist
      cy.get("[data-cy=generate-button]")
      cy.get("[data-cy=generate-button]").click()
      cy.get("[data-cy=report-header]").should.exist
    });
  }); 
  
