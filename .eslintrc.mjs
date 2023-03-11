import { Linter } from 'eslint';

const linter = new Linter();

export default {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'react', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended'
	],
	rules: {
		// add your custom rules here
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};
