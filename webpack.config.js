'use strict';

const path = require('path');
const merge = require('webpack-merge');
const MiniCssExtract = require('mini-css-extract-plugin');
const Html = require('html-webpack-plugin');
const { CleanWebpackPlugin: Clean } = require('clean-webpack-plugin');
const Copy = require('copy-webpack-plugin');

const base = {
	context: path.resolve('src'),
	entry: [
		'leaflet/dist/leaflet.css',
		'./index.jsx',
	],
	resolve: { extensions: ['.jsx', '.js', '.json'] },
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: { sourceMap: true },
				}],
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtract.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true, url: false },
					},
				],
			},
			{
				test: /\.(jpe?g)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new MiniCssExtract({ filename: 'styles.css' }),
		new Html({
			inject: true,
			minify: true,
			template: path.resolve('public/index.html'),
		}),
	],
};

const environments = {
	development: {
		mode: 'development',
		devtool: 'eval-source-map',
		devServer: { contentBase: path.resolve('public') },
	},

	production: {
		mode: 'production',
		output: {
			path: path.resolve('dist'),
			filename: 'main.js',
		},
		devtool: 'source-map',
		plugins: [
			new Clean(),
			new Copy([{
				from: path.resolve('public'),
				to: path.resolve('dist'),
				ignore: ['public/index.html'],
			}]),
		],
	},
};

module.exports = function webpackConfig(env) {
	return merge(base, environments[env]);
};
