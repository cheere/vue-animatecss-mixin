
/**
 * 规则
 * -----------------------
 * semi 错误，结尾不要使用 分号
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  globals: {
    'WXEnvironment': true,
  },
  // add your custom rules here
  // http://eslint.cn/docs/rules/
  rules: {
    'semi': 0,
    'indent': 0,
    'quote-props': 0,
    // https://eslint.bootcss.com/docs/rules/camelcase#allow
    'camelcase': ['error', {allow: ['^img_']}],
    // 要求或禁止尾随逗号, 关闭此规则 , vue 需要【方法】需要在尾部添加逗号，主要是方便阅读代码
    'comma-dangle': 0,
    // 此规则在非空文件的末尾强制执行至少一个换行符, 关闭此规则
    'eol-last': 0,
    'object-curly-spacing': 0,
    'no-tabs': 'off',
    // 禁用不必要的转义 https://eslint.bootcss.com/docs/rules/no-useless-escape
    'no-useless-escape': 0,
    // http://eslint.cn/docs/rules/arrow-parens
    'arrow-parens': ['error', 'as-needed', {'requireForBlockBody': false}],
    // http://eslint.cn/docs/rules/no-trailing-spaces
    'no-trailing-spaces': ['error', { 'skipBlankLines': true }],
    // http://eslint.cn/docs/rules/no-console 禁用 console
    'no-console': 0, // 测试是用啊
    'space-before-function-paren': 0,
    // unicorn
    'unicorn/prefer-starts-ends-with': 'off',
    // nuxt
    // https://github.com/nuxt/eslint-plugin-nuxt
    'nuxt/no-cjs-in-config': 0,
    // vue
    // https://eslint.vuejs.org/rules/html-self-closing.html
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always',
    }],
    // https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // https://eslint.vuejs.org/rules/html-quotes.html
    'vue/html-quotes': 'off',
  }
}
