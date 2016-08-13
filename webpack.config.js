var path = require('path');
var webpack = require('webpack');


module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    'webpack/hot/dev-server',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: "babel-loader"
      },
      {
	test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      }
    ]
  },
  sassLoader: {
    includePath: [path.resolve(__dirname, './styles')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
