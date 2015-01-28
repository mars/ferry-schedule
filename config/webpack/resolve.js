var path = require('path');

/*
Common webpack `resolve` config; common to all environments.
*/
module.exports = {

  alias: {
    "ferry-schedule": path.normalize(__dirname + "/../../source")
  },

  extensions: ["", ".webpack.js", ".web.js", ".jsx", ".js"]

};
