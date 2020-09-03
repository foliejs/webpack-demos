
module.exports = {
  entry: {
    app: './main.js',
    vendor: ['jquery'],
  },
  output: {
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      filename: 'vendor.js',
      name: 'vendor'
    }
  }
};
