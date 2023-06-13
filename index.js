module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
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
    "react-hooks",
    "array-func",
    "simple-import-sort",
    "unused-imports",
    "react-refresh",
  ],
  rules: {
    "react/no-unescaped-entities": "off",
    eqeqeq: ["error", "smart"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-explicit-any": "off",
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
    "react/jsx-key": [
      "error",
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],

    // Array-func
    "array-func/prefer-array-from": "off",

    "react-refresh/only-export-components": ["warn", { "allowConstantExport": true }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: true,
    },
  },
};
