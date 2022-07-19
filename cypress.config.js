const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'v8vg4q',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'report.json',
  },
  videoCompression: 15,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
