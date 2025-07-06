export default {
	extends: [
		"stylelint-config-standard",
		"stylelint-config-html",
		"stylelint-config-recess-order",
	],
	plugins: ["stylelint-prettier"],
	overrides: [
		{
			files: ["**/*.astro"],
			customSyntax: "postcss-html",
		},
	],
	rules: {
		// Tailwind CSSのサポート
		"at-rule-no-unknown": [
			true,
			{
				ignoreAtRules: [
					"tailwind",
					"apply",
					"variants",
					"responsive",
					"screen",
					"layer",
				],
			},
		],
		// @import文の書き換えを防ぐ
		"import-notation": null,
		// prettierとの競合を避ける
		"prettier/prettier": null,
		// CSSカスタムプロパティ名のkebab-caseルールを無効化
		"custom-property-pattern": null,
	},
};
