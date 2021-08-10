module.exports = {
  plugins: ["unused-imports"],
  extends: [
    // Recommended Eslint config
    "eslint:recommended",
    // AirBnB Styleguide rules
    "airbnb-typescript/base",
    "prettier",
    "plugin:prettier/recommended",
  ],
  rules: {
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "no-useless-escape": "warn",
    "no-underscore-dangle": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "prefer-template": "off",
    // No param reassign should be enabled in order to enforce immutable code style
    "no-param-reassign": "off",
    "no-useless-return": "off",
    // THis disabled using of prototype calls like hasOwnProperty
    // TODO: Discuss should we turn this on but then we will need to use in or hasOwnPropety.call(obj,'property')
    "no-prototype-builtins": "off",
    // Should we turn off destructuring of arrays/objects
    "@typescript-eslint/unbound-method": [
      "error",
      {
        ignoreStatic: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "all",
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ["unused-imports"]
};
