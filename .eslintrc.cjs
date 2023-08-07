module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended',
		// '@vue/typescript'
	],
	parserOptions: {
		// parser: 'babel-eslint'
		parser: '@typescript-eslint/parser',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-constant-condition': 'off',
		'vue/heml-self-closing': 'off',
		'no-empty': 'warn',
		'no-unused-vars': 0,
		'vue/no-multiple-template-root': 'off',
		'vue/multi-word-component-names': 'warn',
		'vue/no-mutating-props': 'warn',
		'vue/no-v-for-template-key': 'warn',
		'vue/no-v-text-v-html-on-component': 'warn',
	},
	// include: [
	// 	'src/**/*.ts',
	// 	'src/**/*.tsx',
	// 	'src/**/*.vue',
	// 	'tests/**/*.ts',
	// 	'tests/**/*.tsx'
	// ],
	// exclude: [
	// 	'node_modules'
	// ],
	ignorePatterns: ['**/public/js/*.js', 'src/utils/js/*.js', '*.js', 'src/auto-imports.d.ts'],
}
