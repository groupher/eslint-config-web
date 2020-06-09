// see details in
// https://github.com/groupher/eslint-config-web/blob/master/index.js
module.exports = {
  extends: ["airbnb", "plugin:react/recommended"],
  plugins: ["react", "cypress", "react-hooks"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    "cypress/globals": true,
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
    },
  },
  rules: {
    // ignore import order
    "import/order": 0,
    // perfer single quotes
    quotes: [2, "single", { avoidEscape: true }],
    // import/resolver 暂时识别不了 @xxx, 暂时关闭该检测
    "import/no-extraneous-dependencies": 0,
    "arrow-body-style": 0,
    // need for _store init
    "no-underscore-dangle": 0,
    // heavilly used in store.actions
    "no-param-reassign": 0,
    // heavilly used in store.views
    "no-use-before-define": 0,
    // force-return is unneeded
    "consistent-return": 0,
    "no-shadow": 0,
    // error could be object for parse by up floor
    "prefer-promise-reject-errors": 0,
    "react/jsx-no-bind": 2,
    // allow JSX in js files
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    // no need sort
    "react/sort-comp": 0,
    "react/prop-types": [1, { skipUndeclared: true }],
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,

    // for cypress test usage
    "no-unused-expressions": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-extra-semi": 0,
    semi: 0,
    "arrow-parens": ["error", "always"],
    "comma-dangle": ["error", "only-multiline"],
    "no-confusing-arrow": 0,
    "implicit-arrow-linebreak": 0,
    "react/jsx-wrap-multilines": [2, { prop: "ignore" }],
    "object-curly-newline": 0,
    "react/jsx-one-expression-per-line": 0,
    "operator-linebreak": 0,
    indent: 0,
    "function-paren-newline": 0,
  },
};
