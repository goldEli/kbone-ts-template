/*
 * @Author: miaoyu
 * @Date: 2020-04-29 16:24:34
 * @LastEditors: miaoyu
 * @LastEditTime: 2020-04-30 16:15:14
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: 0,
    semi: 0,
    "space-before-function-paren": 0,
    "no-trailing-spaces": 0
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
