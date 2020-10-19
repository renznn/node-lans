const path = require('path');
module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader', // 借助ts-loader依赖进行打包
        exclude: /node_modules/ // 除node_modules文件夹下之外的以.ts结尾的文件
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
