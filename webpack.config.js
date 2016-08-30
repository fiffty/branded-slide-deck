const webpack = require('webpack');
const PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
  entry: {
    "lib/bundle": "./src/index.js",
    "demo/bundle": "./src/demo.js"
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  resolve: {
    modulesDirectories: [
      './src/lib',
      'node_modules'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ["react","es2015"]
        }
      }
    ]
  },
  plugins: PROD ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : []
};