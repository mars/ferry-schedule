var moment = require('moment');

module.exports = function currentRouteTime() {
  var today = moment().day();
  var routeDays = today === 0 || today === 6 ?
    'weekend' : 'weekday';
  return routeDays;
}