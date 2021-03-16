require('dotenv').config()

const appRoot = require('app-root-path')

const webpackConfig = {
  paths: {
    root: appRoot,
    
    // Source paths of the project, work in here
    src: {
      base: appRoot + '/src/',
      css: appRoot + '/src/client/styles/',
      js: appRoot + '/src/client/js/',
      images: appRoot + '/src/client/images/'
    },

    // Output paths of the project, these are built automatically
    dist: {
      base: appRoot + '/dist/',
      css: 'assets/css/',
      js: 'assets/js/',
      fonts: 'assets/fonts/',
      images: 'assets/images/',
      clean: ['**/*']
    }

  },

  // Configuration for webpack-dev-server
  devServerConfig: {
    contentBase: './dist',
    publicPath: '/',
    host: 'localhost',
    port: 5000,
    https: false,
    hot: true,
    index: 'index.html',
    open: true,
    writeToDisk: false,
  },
}

module.exports = webpackConfig