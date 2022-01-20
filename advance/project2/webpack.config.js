const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口
  entry: './src/index.js',
  // 出口配置
  output: {
    // 目标文件名
    filename: 'bundle.js',
    // 目标路径 绝对路径
    path: path.resolve(__dirname, './dist'),
    // 打包前清理目标文件夹
    clean: true,
  },
  // 打包模式 prodoction / development
  mode: 'none',
  // 插件配置
  plugins: [
    // 再打包后的文件夹中生成一个html文件，来引入打包好的js文件等
    new HtmlWebpackPlugin(
      {
        // 标题，如果使用了 template 模板属性后，要在模板文件中的 title 标签中配置  <%= htmlWebpackPlugin.options.title %>
        title: 'My App',
        // 生成的html文件所对应的模板文件
        template: './index.html',
        // 生成的html文件名及路径
        filename: 'assets/admin.html'
      }
    )]
}