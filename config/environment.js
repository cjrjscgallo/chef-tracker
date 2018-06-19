'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'chef-tracker',
    environment,
    firebase: {
      apiKey: "AIzaSyCNAOcUXN68pNn6SByos2iIIyoIIPIxS1o",
      authDomain: "chef-tracker-69a42.firebaseapp.com",
      databaseURL: "https://chef-tracker-69a42.firebaseio.com",
      projectId: "chef-tracker-69a42",
      storageBucket: "chef-tracker-69a42.appspot.com",
      messagingSenderId: "1091767799130"
    },
    rootURL: '/',
    rootImageURL: 'assets/images/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
