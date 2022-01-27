
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {

  // 出口配置
  output: {
    // 目标文件名 可以将打包文件输出到同一个文件下
    filename: 'scripts/[name].[contenthash].js',
    // 公共路径的配置
    publicPath: 'http://localhost:8080/'
  },
  // 打包模式 production / development / none
  mode: 'production',
  // 优化配置
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
      // 文件压缩
      new TerserWebpackPlugin()
    ],
  },
  // 性能相关配置
  performance: {
    // 关闭性能提示
    hints: false
  }
}

