var path = require('path');
var webpack = require('webpack');

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
        loaders: ['style', 'css', 'sass'],
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
    })
  ]
};
