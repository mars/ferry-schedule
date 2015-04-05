module.exports = {
  name: "browser",

  target: "web",
  debug: true,

  entry: {
    'ferry-schedule': './source/main'
  },
  output: {
    filename: '[name].bundle.js',
    path: './dist'
  },    
  module: {
    loaders: [{
      test: /\.jsx$/, loader: 'babel'
    }]
  },
  resolve: {
    extensions: ["", ".jsx", ".js"]
  }

};
