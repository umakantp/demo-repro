const path = require('path')

module.exports = async ({config, mode}) => {

  config.module.rules.push({
    test: /\.scss$/,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader',
      options: {
        includePaths: [path.resolve(__dirname, '../src')]
      }
    }],
    include: path.resolve(__dirname, '../')
  })

  return config;
}
