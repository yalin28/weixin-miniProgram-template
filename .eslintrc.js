module.exports = {
  extends: ['prettier', 'prettier/standard'],
  //插件
  plugins: ['prettier'],

  //配置解析器
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },

  env: {
    //脚本目标的运行环境
    browser: true,
    node: true,
    es6: true,
    commonjs: true,
  },

  //全局变量
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getCurrentPages: true,
  },

  //规则，只用插件：插件名/规则
  rules: {
    'prettier/prettier': 'error',
  },
}
