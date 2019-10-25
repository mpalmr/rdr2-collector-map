'use strict';

module.exports = function babelConfig(api) {
	api.cache(true);
	return {
		presets: [
			'@babel/preset-react',
			'@emotion/babel-preset-css-prop',
			['@babel/preset-env', { modules: false }],
		],
	};
};
