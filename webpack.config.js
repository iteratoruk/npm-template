const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
	entry: path.resolve(__dirname, 'src/js/app.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "app.js"
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist')
	},
	plugins: [new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src/html/index.html')
	})],
	resolve: {
		modules: [
			path.resolve(__dirname, 'node_modules'),
			path.resolve(__dirname, 'src/js')
		]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};

module.exports = config;
