module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    /* 0禁止
    1警告
    2开启 */
    'prettier/prettier': 'error',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-bitwise': 'off',
    /* 函数名与括号之间的空格 */
    'space-before-function-paren': 0,
    'no-unused-vars': [
      1,
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-control-regex': 'off',
    'func-names': 'off',
    'import/order': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'comma-dangle': ['error', 'never'],
    /* 句尾需要分号 并且报错 */
    semi: ['error', 'always']
  }
};
