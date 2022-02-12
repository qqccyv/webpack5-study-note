const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app.js',
  output: {
    publicPath: '/' // 这里的绝对路径和 devServer中的historyApiFallback 配置互相影响
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin()
  ],
  devServer: {
    hot: false,
    host: '0.0.0.0', // 可以在局域网中访问
    historyApiFallback: true,
    // static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 9000,
    headers: {
      'X-Custom-Foo': 'bar',
    },
    http2: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  }
}



