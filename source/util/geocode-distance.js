
// // Calculate distance in Milesvar 
// d = GeocodeDistance.calc(47.8131545175277, -122.783203125, 42.0982224111897, -87.890625, GeocodeDistance.EarthRadiusInMiles); 
// // Calculate distance in Kilometersvar 
// d = GeocodeDistance.calc(47.8131545175277, -122.783203125, 42.0982224111897, -87.890625, GeocodeDistance.EarthRadiusInKilometers); 

// from http://pietschsoft.com/post/2008/02/Calculate-Distance-Between-Geocodes-in-C-and-JavaScript


var GeocodeDistance = {};

GeocodeDistance.EarthRadiusInMiles = 3956.0;
GeocodeDistance.EarthRadiusInKilometers = 6367.0;

GeocodeDistance.toRadian = function(v) {
  return v * (Math.PI / 180);
};

GeocodeDistance.diffRadian = function(v1, v2) { 
  return GeocodeDistance.toRadian(v2) - GeocodeDistance.toRadian(v1);
};

GeocodeDistance.calc = function(lat1, lng1, lat2, lng2, radius) { 
  return radius * 2 * Math.asin( Math.min(1, Math.sqrt( 
    ( Math.pow(Math.sin((GeocodeDistance.diffRadian(lat1, lat2)) / 2.0), 2.0)
      + Math.cos(GeocodeDistance.toRadian(lat1))
      * Math.cos(GeocodeDistance.toRadian(lat2))
      * Math.pow(Math.sin((GeocodeDistance.diffRadian(lng1, lng2)) / 2.0), 2.0))
  ) ) )
};

module.exports = GeocodeDistance;
