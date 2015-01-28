var path = require('path');

/*
Common webpack `resolve` config; common to all environments.
*/
module.exports = {

  // // BROKEN Webpack's resolve aliases have no equivalent feature in Node's Module system.
  // alias: {
  //   "ferry-schedule": path.normalize(__dirname + "/../../source")
  // },

  extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]

};
