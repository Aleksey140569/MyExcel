module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.json',
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'require-jsdoc': 'off',
    'operator-linebreak': 'off'
  },
  settings: {
    'import/resolver': 'webpack',
  },
}
