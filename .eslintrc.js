module.exports = {
          "extends": [
            // Recommended Eslint config
            "eslint:recommended",
            // AirBnB Styleguide rules
            "airbnb-typescript/base",
            "prettier",
            "plugin:prettier/recommended",
          ],
          "rules": {
            // Turns of Airbnb React prefer default export
            "import/no-unresolved": "off",
            // Stupid rule for React
            "import/prefer-default-export": "off",
            // Stupid rule for React
            "class-methods-use-this": "off",
            // If we turn this on, any regex we are using will be read as an error
            "no-useless-escape": "warn",
            // We need this turned off because we are using _ for BehaviourSubject naming in services
            "no-underscore-dangle": "off",
            // Stupid rule for React
            "@typescript-eslint/lines-between-class-members": "off",
            // We can use this in the future but right now we are using + to concatenate strings in most of the places
            "prefer-template": "off",
            // No param reassign should be enabled in order to enforce immutable code style
            "no-param-reassign": "off",
            // We need this for new coding style where we use only if and not else and we use early return if the conditions are not met (by dusan's recommendation)
            "no-useless-return": "off",
            // THis disabled using of prototype calls like hasOwnProperty
            // TODO: Discuss should we turn this on but then we will need to use in or hasOwnPropety.call(obj,'property')
            "no-prototype-builtins": "off",
            // Should we turn off destructuring of arrays/objects
            "@typescript-eslint/unbound-method": [
              "error",
              {
                "ignoreStatic": true
              }
            ],
            'prettier/prettier': [
                'error',
                {
                    trailingComma: 'all',
                    tabWidth: 2,
                    semi: true,
                    singleQuote: true,
                    bracketSpacing: true,
                    printWidth: 100
                }
            ]
        }
}