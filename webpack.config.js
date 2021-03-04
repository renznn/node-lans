const path = require('path');
module.exports = {
  mode: 'production',
  // 打包文件入口
  entry: {
    index: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['ts-loader'], // 借助ts-loader依赖进行打包
        exclude: /node_modules/ // 除node_modules文件夹下之外的以.ts结尾的文件
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json']
  },
  // 打包文件出口
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
