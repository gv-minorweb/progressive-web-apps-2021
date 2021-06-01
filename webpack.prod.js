const config = require('./config/config')

const path = require('path')

const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

const common = require('./webpack.common')

const configureCss = require('./config/tasks/prod/css')

const webpackConfig = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  module: {
    rules: [
      configureCss()
    ]
  },
  
  plugins: [
    // Clean Dist Directory
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: config.paths.dist.clean,
      verbose: true
    }),

    new MiniCssExtractPlugin({
      filename: path.join(config.paths.dist.css, '[name].css')
    }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
})

module.exports = webpackConfig