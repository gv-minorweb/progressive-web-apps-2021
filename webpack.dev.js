const config = require('./config/config')

const { merge } = require('webpack-merge')

const common = require('./webpack.common')

const configureDevServer = require('./config/tasks/dev/dev-server')
const configureCss = require('./config/tasks/dev/css')

const webpackConfig = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: configureDevServer(),

  module: {
    rules: [
      configureCss(),
    ]
  },
})

module.exports = webpackConfig