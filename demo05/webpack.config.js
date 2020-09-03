module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: [
          // use 里面存在多个 loader 的时候，里面是对象的形式
          {
            loader: 'file-loader',
            options: {
              limit: 8172,
              outputPath: '/images'
              // context: '',
              // name: '[path][name].[ext]' // 输出图片不变
            }
          }
        ]
      }
    ]
  }
}