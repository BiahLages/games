module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: "lastest",
		ecmaType: "module",
		project: "tsconfig.json",
		tsconfigRootDir: __dirname,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint/eslint-plugin", "react"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
	],
	root: true,
	env: {
		node: true,
		jest: true,
		browser: true,
		es2021: true,
	},
	ignorePatterns: [".eslintrc.js"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
		"@typescript-eslint/interface-name-prefix": "off",
		"@typescript-eslint/explicit-function-return-type": "error",
		"@typescript-eslint/explicit-module-boundary-types": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
