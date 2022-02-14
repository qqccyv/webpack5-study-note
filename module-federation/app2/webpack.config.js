const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin(),
    new ModuleFederationPlugin({
      name: 'app2',
      filename: 'remoteEntry.js',
      remotes: {
        // 这里引入的是app1暴露出来的容器组件 格式为 app1.ModuleFederationPlugin.name : app1.ModuleFederationPlugin.name @ url/app1.ModuleFederationPlugin.filename
        app1: `app1@http://localhost:8080/remoteEntry.js`,
      },
      // exposes: {
      //   './List': './src/index.js'
      // }
    })
  ]
}