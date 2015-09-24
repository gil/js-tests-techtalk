// Karma configuration
// Generated on Thu Sep 24 2015 14:44:40 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
        'public/libs/underscore.js',
        'public/libs/jquery-2.1.4.js',
        'public/libs/backbone.js',

        'public/src/**/*.js',
        'public/specs/*.specs.js'
    ],


    // list of files to exclude
    exclude: [
        'public/src/app.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'public/src/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],

    coverageReporter: {
        reporters: [
            { type: "lcov", dir: "coverage/" },
            { type: "json", dir: "coverage/" }
        ],
        check: {
            global: {
                statements: 80
            }
        }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Set ENV variables : BROWSER_STACK_USERNAME and BROWSER_STACK_ACCESS_KEY
    // Get your key at : https://www.browserstack.com/accounts/automate
    // PS: I know I'm wasn't supposed to need the following lines, but it didn't work by itself.
    browserStack: {
        username: process.env.BROWSER_STACK_USERNAME,
        accessKey: process.env.BROWSER_STACK_ACCESS_KEY
    },

    // List of browsers : curl -u "user:key" https://www.browserstack.com/automate/browsers.json
    customLaunchers: {
        bs_iphone6: {
            "base": "BrowserStack",
            "device": "iPhone 6",
            "os": "ios",
            "os_version": "8.0"
        },
        bs_ie10: {
            "base": "BrowserStack",
            "browser": "ie",
            "os_version": "8",
            "browser_version": "10.0",
            "os": "Windows"
        }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],
    // browsers: ['PhantomJS', 'Chrome'],
    // browsers: ['PhantomJS', 'Chrome', 'bs_iphone6', 'bs_ie10'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};