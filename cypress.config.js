const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
