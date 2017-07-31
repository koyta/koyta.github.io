const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    'filename': 'bundle.js',
    'path': '/dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
