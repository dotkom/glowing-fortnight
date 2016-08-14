var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
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
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      }
    ]
  },
  sassLoader: {
    includePath: [path.resolve(__dirname, './styles')]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
	'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new ExtractTextPlugin("styles.css")
  ]
};
