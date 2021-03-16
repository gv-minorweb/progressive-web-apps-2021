const config = require('../../config')

const configureDevServer = () => {
  return {
    ...config.devServerConfig
  }
}

module.exports = configureDevServer