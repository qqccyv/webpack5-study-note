const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    // 将_设置为预制的全局变量，遇到有使用到_变量的时候，ProvidePlugin插件自动引入lodash这个第三方库
    new Webpack.ProvidePlugin({
      _: 'lodash'
    })
  ],
  module: {
    // imports-loader 可以对引入的包在编译时转换里面的某些变量指向等，这里就是讲   原本在commonjs中指向module.exports的this，在编译时覆盖为window
    rules: [
      {
        test: require.resolve("./src/index.js"),
        use: [
          {
            loader: "imports-loader",
            options: {
              wrapper: "window",
            },
          },
        ],
      },
    ],
  },
}