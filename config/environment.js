'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'recipe-db',
    podModulePrefix: 'recipe-db/routes',
    environment,
    rootURL: '',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
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

  /////////////////////////////////////////////////////////////////////////////
  //                        ALL ENVIRONMENTS CONFIG                          //
  /////////////////////////////////////////////////////////////////////////////
  ENV.analytics = {
    source: 'oncallsupport',
    environment: environment
  }

  ENV.emberPouch = {
    staticContent: 'mas-recipes',
    // remoteDb: 'http://localhost:5000/api/feeds/public',
    // publicContent: 'https://oncall.ca/public-content/'
  };

  /////////////////////////////////////////////////////////////////////////////
  //                LOCAL DEVELOPMENT ENVIRONMENT CONFIG                     //
  /////////////////////////////////////////////////////////////////////////////
  if (environment === 'local') {
    let serverHost = 'http://localhost:5000';

    // Use automatically defined values by ember-torusoft-api-adapter
    ENV.apiServer = {
      host: serverHost,
      namespace: 'api',
      headers: {
        // add headers here that should be sent with each request, for example:
        'Accept': "application/json",
        'credentials': 'include',
        'Content-type': 'application/json',
        'X-AppId': '97bb6af7-d3a7-4843-aa86-b1cc64db3fc0'
      }
    };

    ENV.authUrl = `${serverHost}/api/auth/oncall-support`;
    ENV.analyticsUrl = `${serverHost}/api/analytics`;

    ENV.emberPouch = {
      localDb: 'mas-recipes',
      staticContent: 'mas-recipes-static',
      // remoteDb: 'http://localhost:5000/api/feeds/public',
      publicContent: 'https://careers.otcns.ca/db/'
    };
  }

  /////////////////////////////////////////////////////////////////////////////
  //                DEVELOPMENT SERVER ENVIRONMENT CONFIG                    //
  /////////////////////////////////////////////////////////////////////////////
  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    // let serverHost = 'https://p2p.dev.torusoft.com';
    let serverHost = 'http://192.168.0.34:5000';

    // ember-torusoft-api-adapter config
    ENV.apiServer = {
      host: serverHost,
      // host: 'https://p2p.dev.torusoft.com',
      namespace: 'api',
      headers: {
        // add headers here that should be sent with each request, for example:
        'Accept': "application/json",
        'credentials': 'include',
        'Content-type': 'application/json',
        'X-AppId': '97bb6af7-d3a7-4843-aa86-b1cc64db3fc0'
      }
    };

    // ember-simple-auth config
    ENV.authUrl = `${serverHost}/api/auth/oncall-support`;
    ENV.analyticsUrl = `${serverHost}/api/analytics`;

    ENV.emberPouch = {
      localDb: 'mas-recipes',
      staticContent: 'mas-recipes-static',
      // remoteDb: 'http://localhost:5000/api/feeds/public',
      publicContent: 'https://careers.otcns.ca/db/'
    };
  }


  /////////////////////////////////////////////////////////////////////////////
  //                    STAGING SERVER ENVIRONMENT CONFIG                    //
  /////////////////////////////////////////////////////////////////////////////
  if (environment === 'staging') {
    // ember-torusoft-api-adapter config
    ENV.apiServer = {
      host: 'https://p2p.staging.torusoft.com',
      namespace: 'api'/*,
      headers: {
        // add headers here that should be sent with each request, for example:
        // 'Content-type': 'application/json'
      } */
    };
  }

  /////////////////////////////////////////////////////////////////////////////
  //                       TEST CODE ENVIRONMENT CONFIG                      //
  /////////////////////////////////////////////////////////////////////////////
  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;

    // ember-torusoft-api-adapter config
    ENV.apiServer = {
      host: 'http://p2p.dev.torusoft.com',
      namespace: 'api'/*,
      headers: {
        // add headers here that should be sent with each request, for example:
        // 'Content-type': 'application/json'
      } */
    };
  }

  /////////////////////////////////////////////////////////////////////////////
  //                  PRODUCTION SERVER ENVIRONMENT CONFIG                   //
  /////////////////////////////////////////////////////////////////////////////
  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
