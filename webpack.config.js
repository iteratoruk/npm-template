const path = require('path');

const config = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "app.js"
	}
};

module.exports = config;
