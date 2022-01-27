const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

const productionConfig = require('./webpack.config.prod.js');

const developmentConfig = require('./webpack.config.dev.js');

module.exports = (env, args) => {
  // 通过参数合并不同场景的配置对象
  switch (args.mode) {
    case 'development':
      return merge(developmentConfig, commonConfig);
    case 'production':
      return merge(productionConfig, commonConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}