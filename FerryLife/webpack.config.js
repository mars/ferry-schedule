var webpack = require('webpack'),
  path = require('path'),
  ignoreModules = require('./ignore-modules'),
  AnybarWebpackPlugin = require('anybar-webpack');

module.exports = {

  watch: true,
  entry: path.join(__dirname, '/src/app.jsx'),
  module: {
    loaders: [{
      test: /\.(jsx?|es6)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader?optional=runtime']
    }]
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: 'index.ios.js',
    libraryTarget: 'commonjs'
  },
  externals: ignoreModules,
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new AnybarWebpackPlugin()
  ]
};
