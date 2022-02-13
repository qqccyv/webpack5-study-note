const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  plugins: [
    new HtmlWebpackPlugin(),
    // service worker配置服务
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {

  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }

}