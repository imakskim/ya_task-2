// basic vars
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// additional plugins

// module settings
module.exports = {
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
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      }
    ]
  },
  devServer: {
    stats: "errors-only"
  }
};
