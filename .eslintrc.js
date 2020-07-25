module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: "./tsconfig.eslint.json",
    createDefaultProgram: true, // this should be re-investigated
		sourceType: "module",
		ecmaVersion: 2018,
		ecmaFeatures: {
			jsx: true
		}
  },
  settings: {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "extensions": [
          ".js",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    "semi": ["error", "always"],
    "arrow-body-style": ["off"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/explicit-function-return-type": ["warn"],
    "react/jsx-filename-extension": [1, {
      "extensions": [".tsx"]
    }]
  },
}
