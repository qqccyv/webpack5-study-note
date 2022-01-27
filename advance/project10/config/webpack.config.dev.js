module.exports = {

  // 出口配置
  output: {
    // 目标文件名 可以将打包文件输出到同一个文件下
    filename: 'scripts/[name].js',
  },
  // 打包模式 production / development / none
  mode: 'development',
  // 配置source-map
  devtool: 'inline-source-map',
  // webpack-dev-server 开发配置
  devServer: {
    static: "./dist"
  },

}

