const webpackConfig = require('./webpack.config')

module.exports = function(config) {
	config.set({
		basePath: '',
		browsers: ['PhantomJS'],
		files: [
			'test/js/**/*Test.js'
		],
		frameworks: ['mocha','chai'],
		singleRun: true,
		reporters: ['mocha'],
		preprocessors: {
			'src/js/**/*.js': ['webpack'],
			'test/js/**/*.js': ['webpack']
		},
		webpack: webpackConfig
	});
}
