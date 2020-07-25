module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/react",
    "plugin:prettier/recommended"
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
  env: {
    node: true,
		es6: true,
		jest: true,
		browser: true,
    // 'cypress/globals': true,
  },
  globals: {
    // Cypress: true,
    // cy: true,
    // assert: true,
  },
  rules: {
    "semi": ["error", "always"],
    "arrow-body-style": ["off"],

    "@typescript-eslint/no-explicit-any": ["warn"],
    "@typescript-eslint/explicit-function-return-type": ["warn"],

    "import/extensions": ["error", "ignorePackages", {
      "ts": "never",
      "tsx": "never",
      "js": "never",
      "jsx": "never",
      "mjs": "never"
    }],

    "react/jsx-filename-extension": [1, {
      "extensions": [".jsx", ".tsx"]
    }]
  },
}
