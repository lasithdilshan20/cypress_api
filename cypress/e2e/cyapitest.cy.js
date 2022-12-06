it('my UI & API test', { env: { snapshotOnly: true } }, () => {

  cy.visit('https://catfact.ninja/') // open app
  cy.api('/fact') // call api

})