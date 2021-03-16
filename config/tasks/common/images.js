const configureImages = () => {
  return {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }
}

module.exports = configureImages