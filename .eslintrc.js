module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint-config-standard",
    "eslint-config-prettier",
  ],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "react/require-default-props": [
      "error",
      { ignoreFunctionalComponents: true },
    ],
  },
  ignorePatterns: ["**/*.scss"],
  parserOptions: {
    project: "./tsconfig.json",
  },
};
