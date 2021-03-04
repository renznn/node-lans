// babel.config.js
// 作用：es6的代码转换成es5
// 指定翻译预置presets node版本
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
  ]
};
