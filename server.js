/**
 * Created by WangMing on 15/12/7.
 */
/*var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8090', "webpack/hot/only-dev-server");
config.plugins.push(new webpack.HotModuleReplacementPlugin());
//启动服务
var app = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true
});
app.listen(8090, function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at http://localhost:8090');
});*/
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
config.entry.unshift('webpack-hot-middleware/client');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());
var compiler = webpack(config);
var app = express();
//启动服务
app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.listen(8090, function(err, result) {
	if (err) {
		console.log(err);
	}
	console.log('Listening at http://localhost:8090');
});