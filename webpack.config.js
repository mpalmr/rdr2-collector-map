'use strict';

const path = require('path');
const merge = require('webpack-merge');

const base = {
	context: path.resolve('src'),
	entry: './index.js',
	output: {
		path: path.resolve('public'),
		filename: 'main.js',
	},
	module: {
		strictExportPresence: true,
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: 'babel-loader',
				options: { sourceMap: true },
			}],
		}],
	},
};

const environments = {
	development: {
		mode: 'development',
		devtool: 'eval-source-map',
		devServer: {
			contentBase: path.resolve('public'),
		},
	},

	production: {
		mode: 'production',
		devtool: 'source-map',
	},
};

module.exports = function webpackConfig(env) {
	return merge(base, environments[env]);
};
