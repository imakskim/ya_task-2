// basic vars
const path = require('path')
const webpack = require('webpack')

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
    publicPath: '../'
  },
}