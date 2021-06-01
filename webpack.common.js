const config = require('./config/config')

const configureJs = require('./config/tasks/common/js')
const configureFonts = require('./config/tasks/common/fonts')
const configureImages = require('./config/tasks/common/images')

const CopyPlugin = require('copy-webpack-plugin')

const webpackConfig = {
  entry: {
    main: './src/client/js/main.js',
    'service-worker': './src/client/js/service-worker.js',
  },
  output: {
    path: config.paths.dist.base,
    filename: `[name].js`,
    publicPath: config.paths.publicPath
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
    new CopyPlugin({
      patterns: [
        {
          from: 'src/client/images/manifest',
          to: 'assets/images/manifest' 
        },
        `${config.paths.src.base}client/manifest.json`
      ],
    })
  ]
}

module.exports = webpackConfig
