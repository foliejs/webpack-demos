var webpack = require('webpack');
var TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: '[name].js'
  },
  cache: false,
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // }
  plugins: [
    new TerserPlugin({
    })
  ]
};
