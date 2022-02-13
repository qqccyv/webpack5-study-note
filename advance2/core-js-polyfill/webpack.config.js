module.exports = {
  mode: 'production',
  entry: './src/app.js',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                // 关于对es语法进行降级现在推荐使用core-js通过babel-loader的配置
                {
                  targets: [
                    'last 1 version',
                    '> 1%'
                  ],
                  // useBuiltIns 的不同配置
                  // false 此时不对 polyfill 做操作。如果引入 @babel/polyfill，则无视配置的浏览器兼容，引入所有的 polyfill。
                  // entry 根据配置的浏览器兼容，引入浏览器不兼容的 polyfill。会自动根据 browserslist 替换成浏览器不兼容的所有 polyfill。
                  // usage 会根据配置的浏览器兼容，以及你代码中用到的 API 来进行 polyfill，实现了按需添加。
                  useBuiltIns: "usage",
                  // core-js对应的版本，还需要单独的下载
                  corejs: 3,
                }
              ]
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
}