var config = require('./webpack.config.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');


var compiler =  webpack(config);

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true
});

server.listen(3000);
