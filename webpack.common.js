const config = require('./config/config')

const { GenerateSW } = require('workbox-webpack-plugin')

const configureJs = require('./config/tasks/common/js')
const configureFonts = require('./config/tasks/common/fonts')
const configureImages = require('./config/tasks/common/images')

const webpackConfig = {
  entry: './src/client/js/main.js',
  output: {
    path: config.paths.dist.base,
    filename: '[name].js',
  },
  module: {
    rules: [
      // JavaScript
      configureJs(),

      // Fonts
      configureFonts(),

      // Images
      configureImages()
    ],
  },
  plugins: [
    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
    })
  ]
}

module.exports = webpackConfig
