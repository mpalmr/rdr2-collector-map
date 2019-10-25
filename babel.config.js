'use strict';

module.exports = function babelConfig(api) {
	api.cache(true);
	return {
		presets: [
			'@babel/preset-react',
			['@babel/preset-env', { modules: false }],
		],
		plugins: ['babel-plugin-emotion'],

	};
};
