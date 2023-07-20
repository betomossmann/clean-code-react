const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    specPattern: 'tests/e2e/cypress/integration/*.spec.{ts,tsx}',
    fixturesFolder: 'tests/e2e/cypress/fixtures',
    supportFile: 'tests/e2e/cypress/support/index.js',
    video: false,
    viewportWidth: 1000,
    viewportHeight: 660,
    setupNodeEvents (on, config) {
      'tests/e2e/cypress/plugins/index.js'
    }
  }
})
