module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message: "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:radar/recommended",
    "plugin:array-func/all",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "lodash",
    "react-hooks",
    "array-func",
    "radar",
    "simple-import-sort",
    "unused-imports",
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    eqeqeq: ["error", "smart"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-restricted-imports": [
      "warn",
      {
        name: "react-redux",
        importNames: ["useSelector", "useDispatch"],
        message: "Use typed hooks `useAppDispatch` and `useAppSelector` instead.",
      },
    ],

    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ["^@?\\w"],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ["^"],
          // Generated
          ["/generated/"],
          // Relative imports.
          // Anything that starts with a dot.
          ["^\\."],
        ],
      },
    ],
    "simple-import-sort/exports": "error",

    "no-console": "error",
    "no-debugger": "error",

    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^log$",
        // caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "class-methods-use-this": ["error", { exceptMethods: ["render"] }],

    // React
    "react/no-danger": "error",
    "react/no-access-state-in-setstate": "error",
    "react/no-this-in-sfc": "error",
    "react/no-unused-state": "error",
    "react/button-has-type": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-unsafe": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-pascal-case": "error",
    "react/self-closing-comp": "error",
    "react/iframe-missing-sandbox": "error",
    "react/jsx-key": ["error", { checkFragmentShorthand: true, warnOnDuplicates: true }],

    // Lodash
    "lodash/prefer-lodash-method": "off",
    "lodash/collection-method-value": "error",
    "lodash/collection-return": "error",
    "lodash/no-extra-args": "error",
    "lodash/chaining": ["error", "always"],
    "lodash/import-scope": ["error", "full"],
    "lodash/identity-shorthand": ["error", "never"],
    "lodash/matches-shorthand": ["error", "never"],
    "lodash/matches-prop-shorthand": ["error", "never"],
    "lodash/prop-shorthand": ["error", "never"],
    "lodash/prefer-compact": "error",
    "lodash/prefer-filter": "error",
    "lodash/prefer-find": "error",
    "lodash/prefer-flat-map": "error",
    "lodash/prefer-immutable-method": "error",
    "lodash/prefer-map": "error",
    "lodash/prefer-reject": "error",
    "lodash/prefer-times": "error",
    "lodash/preferred-alias": "error",

    // Array-func
    "array-func/prefer-array-from": "off",

    // Radar
    "radar/cognitive-complexity": "off",
    "radar/no-small-switch": "off",
    "radar/no-duplicate-string": "off",
    "radar/prefer-immediate-return": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: true,
    },
  },
}
