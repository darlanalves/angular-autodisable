// Karma configuration
// Generated on Sun Jul 05 2015 01:20:52 GMT-0300 (BRT)
var path = require('path');

module.exports = function(config) {
	'use strict';

	var angular = path.join(path.dirname(require.resolve('angular')), 'angular.js');
	var angularMocks = path.join(path.dirname(require.resolve('angular-mocks/ngMock')), 'angular-mocks.js');
	var es5Shim = path.join(path.dirname(require.resolve('es5-shim')), 'es5-shim.js');

	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],


		// list of files / patterns to load in the browser
		files: [
			angular,
			angularMocks,
			es5Shim,
			'src/autodisable.module.js',
			'src/autodisable.directive.js',
			'src/autodisable.factory.js',
			'src/*.spec.js'
		],


		// list of files to exclude
		exclude: [],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],


		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: true,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: false
	})
}
