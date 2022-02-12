const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    // 入口文件，配置公共依赖
    main: {
      import: ['./src/app.js'],
      // 这里的依赖名是下面的key值
      dependOn: 'lodash',
      filename: 'channel1/[name].js'
    },
    main2: {
      import: ['./src/app2.js'],
      // 这里的依赖名是下面的key值
      dependOn: 'lodash',
      filename: 'channel2/[name].js'
    },
    lodash: {
      import: 'lodash',
      filename: 'common/[name].js'
    }
  },
  plugins: [
    // 打包多个入口文件，可以调用多次htmlwebpackplugin插件，配置不同的规则
    new HtmlWebpackPlugin({
      title: '多页面应用',
      template: './index.html',
      filename: 'channel1/index.html',
      // 多页面时，配置每个页面自己单独的引入规则 避免重复引入
      chunks: ['main', 'lodash']
    }),
    new HtmlWebpackPlugin({
      title: '多页面应用',
      template: './index2.html',
      filename: 'channel2/index2.html',
      chunks: ['main2', 'lodash']
    })
  ],
  output: {
    clean: true
  }
}