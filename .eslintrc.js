module.exports = {
  root: true,
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": [
      "error"
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx"
        ]
      }
    ]
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
  }
}
