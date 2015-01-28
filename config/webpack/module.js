/*
Common webpack `module` config; common to all environments.
*/
module.exports = {

  loaders: [
    {
      test: /\.jsx$/,
      loader: 'jsx-loader'
    }
  ]

};
