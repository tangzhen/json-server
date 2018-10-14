module.exports = {
  extends: ['standard', 'standard-preact', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        useTabs: false
      }
    ]
  },
  env: { jest: true }
};
