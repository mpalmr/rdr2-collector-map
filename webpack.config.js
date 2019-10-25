'use strict';

const path = require('path');
const merge = require('webpack-merge');

const base = {
	context: path.resolve('src'),
	entry: './index.js',
	output: {
		path: path.resolve('dist'),
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
	development: { mode: 'development' },
	production: { mode: 'production' },
};

module.exports = function webpackConfig(env) {
	return merge(base, environments[env]);
};
