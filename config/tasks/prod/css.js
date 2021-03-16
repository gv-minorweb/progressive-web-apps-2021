const config = require('../../config')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const configureCss = () => {
  return {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'postcss-loader',
      'sass-loader',
    ],
  }
}

module.exports = configureCss