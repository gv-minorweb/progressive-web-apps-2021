const configureFonts = () => {
  return {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  }
}

module.exports = configureFonts