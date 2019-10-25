'use strict';

const path = require('path');
const merge = require('webpack-merge');
const Html = require('html-webpack-plugin');

const base = {
	context: path.resolve('src'),
	entry: './index.js',
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
	plugins: [
		new Html({
			inject: true,
			template: path.resolve('public/index.html'),
		}),
	],
};

const environments = {
	development: { mode: 'development' },
	production: { mode: 'production' },
};

module.exports = function webpackConfig(env) {
	return merge(base, environments[env]);
};
