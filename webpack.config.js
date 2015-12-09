var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将组件中的样式乖乖提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin');//html模板插入代码
var vue = require("vue-loader");//webpack的loader插件

//webpck插件
var plugins = [
  //提公用js到common.js文件中
  new webpack.optimize.CommonsChunkPlugin('common.js'),
  new HtmlWebpackPlugin({
    title:"Vue 学习demo",
    template:"tpl.html",
    filename:"index.html",
    hash:true
  }),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("style.css", {
    allChunks: true,
    disable: false
  }),
  // 使用 ProvidePlugin 加载使用率高的依赖库
  new webpack.ProvidePlugin({
    $: 'webpack-zepto'
  })
];
var entry = ['./src/main'],
  buildPath = "/dist/";
//编译输出路径
module.exports = {
  debug: true,
  entry: entry,
  output: {
    path: __dirname + buildPath,
    filename: 'build.js',
    publicPath: ''
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          "style-loader", "css-loader?sourceMap!cssnext-loader")
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "file-loader?name=images/[name].[hash].[ext]"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }]
  },
  vue: {
    loaders: {
      css: ExtractTextPlugin.extract("css")
    }
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extension: ['', '.js'],
    //别名
    alias: {}
  },
  plugins: plugins,
  devtool: '#source-map'
};
