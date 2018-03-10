module.exports = {
  extends: ['fbjs', 'prettier', 'prettier/react', 'prettier/standard'],
  rules: {
    'prettier/prettier': [
      'error',
      'fb',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  plugins: ['prettier'],
};
