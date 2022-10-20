module.exports = {
  extends: 'eslint-config-airbnb-base',
  plugins: ["jest"],
  rules: {
    'import/prefer-default-export': 0,
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    browser: true,
    "jest/globals": true
  },
};
