const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './app.js',
  mode: 'development',
  // 可以映射被babel-loader 转换的代码
  devtool: 'cheap-module-source-map',
  output: {
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}