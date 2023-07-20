const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'tests/e2e/cypress/**/*.spec.{ts,tsx}',
    fixturesFolder: 'tests/e2e/cypress/fixtures',
    supportFile: 'tests/e2e/cypress/support/index.js',
    video: false,
    viewportWidth: 1440,
    viewportHeight: 900,
    setupNodeEvents (on, config) {
      // implement node event listeners here
    }
  }
})