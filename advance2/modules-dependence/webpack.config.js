const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  // 解析的配置
  resolve: {
    // 创建 import 或 require 的别名
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // 自动解析确定的扩展。
    extensions: [".json", ".js",]
  },
  // 解析外部扩展，避免将外部扩展打包入项目，同时项目又能正常打包运行  需要配置HtmlWebpackPlugin插件使用，自动外部扩展以script标签的方式导入
  externals: {
    // jquery: ['https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.js', 'jQuery'],
    lodash: ['https://cdn.jsdelivr.net/npm/lodash@4.17.19/lodash.min.js', '_'],
  },
  // 解析外部扩展的方式
  externalsType: 'script'
}