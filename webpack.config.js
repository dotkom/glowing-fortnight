var path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
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
  }
};
