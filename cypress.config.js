const cypress = require("cypress");
const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

module.exports = defineConfig({
  projectId: 'kiarya',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const env = dotenv.config().parsed;
      config.env = { ...config.env, ...env };
      config.viewportWidth = 1920;
      config.viewportHeight = 1080;
      
      return config;
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    env: { ...process.env },
  },
});
