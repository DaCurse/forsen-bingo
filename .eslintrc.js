module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: '2019',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	rules: {
		'react/prop-types': 'off',
	},
};
