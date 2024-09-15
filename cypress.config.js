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
    baseUrl: 'https://www.saucedemo.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    // specPattern: [
    //   'cypress/e2e/normas/cadastro.cy.js',
    //   'cypress/e2e/normas/pesquisar-por-texto.cy.js',
    // ],
    env: { ...process.env },
  },
});

/*
  // Carrega as variáveis de ambiente do arquivo .env
  const env = dotenv.config().parsed;

  // Adiciona as variáveis de ambiente ao objeto de configuração do Cypress
  config.env = { ...config.env, ...env };

  // Retorna o objeto de configuração atualizado
  return config;
};*/
