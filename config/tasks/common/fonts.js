const config = require('../../config')

const configureFonts = () => {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: `${config.paths.dist.fonts}/[hash][ext][query]`
    }
  }
}

module.exports = configureFonts