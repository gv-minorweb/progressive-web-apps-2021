const config = require('../../config')

const configureImages = () => {
  return {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: `${config.paths.dist.images}/[hash][ext][query]`
    }
  }
}

module.exports = configureImages