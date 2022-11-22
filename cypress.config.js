const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hrg8nh',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
