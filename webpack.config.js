// basic vars
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const sass = require('./webpack/sass');

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
        template: './index.pug'
      })
    ]
  },
    pug()
]);

module.exports = function(env) {
  if (env === 'production'){
    return common;
  }
  if (env === 'development'){
    return merge([
      common,
      devserver(),
      sass()
    ])
  }
}
