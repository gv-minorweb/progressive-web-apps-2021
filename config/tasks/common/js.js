const config = require('../../config')

const configureJs = () => {
  return {
    test: /\.m?js$/,
    exclude: /(node_modules)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env']
        ],
        plugins: ['@babel/plugin-transform-runtime']
      },
    },
  }
}

module.exports = configureJs