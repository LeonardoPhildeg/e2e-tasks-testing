const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8002/tasks",
    specPattern: "cypress/e2e/**/*.spec.js",
    video: false
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
