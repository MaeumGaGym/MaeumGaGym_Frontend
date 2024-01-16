module.exports = {
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
  env: {
    jest: true,
  },
  rules: {
    'prettier/prettier': 0,
    'react-hooks/exhaustive-deps': 'off',
  },
}
