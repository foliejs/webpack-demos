var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Webpack-demos',
      filename: 'index.html'
    })
  ]
};
