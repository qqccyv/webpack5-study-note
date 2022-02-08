const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        // 在不将css样式插入html头部style标签后，需要将MiniCssExtractPlugin插件附带的loader替换掉原有style-loader
        use: ['style-loader', 'css-loader']
      },
    ]
  },
  devServer: {
    // 热替换  默认是true
    hot: false,
    // 热加载  默认是true
    liveReload: false
  }
}