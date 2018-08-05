// basic vars
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');

// module settings
const common = merge ([
  {
    // базовый путь к проекту
    context: path.resolve(__dirname, 'src'),

    // точки входа JS
    entry: {
      // основной файл приложения
      app: [
        './js/app.js'
      ],
    },

    //путь для собранных файлов
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './index.pug'
      }),
    ],
    optimization: {
      minimize: false,
      runtimeChunk: { name: 'common' },
      splitChunks: {
        cacheGroups: {
          default: false,
          commons: {
            test: /\.jsx?$/,
            chunks: 'all',
            minChunks: 2,
            name: 'common',
            enforce: true,
          },
        },
      },
    },
  },
    pug()
]);

module.exports = function(env) {
  if (env === 'production'){
    return merge([
      common,
      extractCSS(),
    ])
  }
  if (env === 'development'){
    return merge([
      common,
      devserver(),
      sass(),
      css(),
    ])
  }
}
