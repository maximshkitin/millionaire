module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true,
  },
  extends: [
    /*
      I wasn't sure enough whether it's required to use airbnb config or that's an option to choose: airbnb OR eslint config.
      Nonetheless, I tried to use both configs and it seems that airbnb's is widely conflicting with the style I write in.
      With airbnb config I'd need to overwrite plenty of rules to make my code eslint valid.
      So I decided not to use it at all and to rely on the eslint recommended rules (which seem to be adequate) instead.
    */
        
    // "airbnb", 
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: ['**/*.scss'],
};
