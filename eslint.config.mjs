import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import importPlugin from "eslint-plugin-import";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default [
	// 基本設定
	js.configs.recommended,

	// TypeScriptファイル用の設定
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: typescriptParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			"@typescript-eslint": typescript,
			import: importPlugin,
			"unused-imports": unusedImportsPlugin,
		},
		rules: {
			...typescript.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/prefer-const": "error",
			"@typescript-eslint/no-var-requires": "error",

			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
			"import/no-unresolved": "error",
			"import/no-duplicates": "error",
			"import/no-unused-modules": "error",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},

	// Astroファイル用の設定
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: typescriptParser,
				extraFileExtensions: [".astro"],
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		plugins: {
			astro: astro,
			import: importPlugin,
			"unused-imports": unusedImportsPlugin,
		},
		rules: {
			...astro.configs.recommended.rules,
			"astro/no-conflict-set-directives": "error",
			"astro/no-unused-define-vars-in-style": "error",

			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
			"import/no-unresolved": "error",
			"import/no-duplicates": "error",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},

	// JavaScriptファイル用の設定
	{
		files: ["**/*.js", "**/*.mjs"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: {
			import: importPlugin,
			"unused-imports": unusedImportsPlugin,
		},
		rules: {
			"no-unused-vars": "off",
			"prefer-const": "error",
			"no-var": "error",

			"import/order": [
				"error",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index",
						"object",
						"type",
					],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
			"import/no-unresolved": "error",
			"import/no-duplicates": "error",
			"unused-imports/no-unused-imports": "error",
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],
		},
	},

	// グローバル設定
	{
		rules: {
			"no-console": "warn",
			"no-debugger": "error",
			"no-alert": "warn",
			"prefer-template": "error",
			"object-shorthand": "error",
			"prefer-arrow-callback": "error",
		},
	},

	// 無視するファイル
	{
		ignores: [
			"dist/**",
			"node_modules/**",
			".astro/**",
			"*.config.js",
			"*.config.mjs",
		],
	},
];
