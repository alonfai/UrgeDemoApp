/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const injectDevServer = require('@cypress/react/plugins/next');
const codeCoverageTask = require('@cypress/code-coverage/task');

require('dotenv').config();

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  require('@cypress/code-coverage/task')(on, config);
  // include any other plugin code...

  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  if (config.testingType === 'component') {
    injectDevServer(on, config);
  }
  injectDevServer(on, config);
  codeCoverageTask(on, config);

  // It's IMPORTANT to return the config object
  // with any changed environment variables
  return config;
};
