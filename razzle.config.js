'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('deepmerge');

module.exports = {
  modify: (config, { target, dev }, webpack) => {
    const appConfig = Object.assign({}, config);

    if (target === 'web') {
      appConfig.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      });
    } else {
      appConfig.module.rules.push({
        test: /\.(sa|sc|c)ss$/,
        use: 'css-loader',
      });
    }

    return merge(require('razzle-heroku'), appConfig);
  },
};
