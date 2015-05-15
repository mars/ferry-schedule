var moment = require('moment');
var currentRouteTime = require('./current-route-time');

module.exports = function transformScheduleData(scheduleData, query) {
  var byArrival = query['location-filter'] === 'by-arrival';

  // map Ferry Routes by their ID, to join with Journeys
  var routes = {};
  scheduleData.linked.routes.forEach(function(route) {
    routes[route.id] = route;
  });

  // map Location by their ID, to join with Routes
  var locations = {}
  scheduleData.linked.locations.forEach(function(location) {
    locations[location.id] = location;
  });

  var locationQuery = query['location-name']
  if (locationQuery !== undefined && locationQuery !== '') {
    locationQuery = locationQuery.toLowerCase();
  }

  var timeQuery = query['time']
  if (timeQuery != null && timeQuery !== '') {
    timeQuery = timeQuery.toLowerCase();
  } else {
    timeQuery = currentRouteTime();
  }

  var timeFormat = 'HH:mm a';
  var journeys = [];
  scheduleData.journeys.forEach(function(journey) {
    var route = routes[journey.links.route.id];
    var location;
    var location2;
    var time;
    var time2;

    if (query['location-filter']==='by-arrival') {
      location = locations[route.links.destination.id];
      time = moment(journey.arrive, timeFormat);
      location2 = locations[route.links.origin.id];
      time2 = moment(journey.depart, timeFormat);
    } else {
      location = locations[route.links.origin.id];
      time = moment(journey.depart, timeFormat);
      location2 = locations[route.links.destination.id];
      time2 = moment(journey.arrive, timeFormat);
    }

    var shouldDisplayJourney = 
      (
        // missing location query shows all
        locationQuery === undefined || 
        locationQuery === '' || 
        location.id.toLowerCase() === locationQuery
      ) && (
        // time query must always match
        journey.days.toLowerCase() === timeQuery
      );

    if (shouldDisplayJourney) {
      journeys.push({
        id: journey.id,
        journey: journey,
        route: route,
        location: location,
        time: time,
        isArrival: byArrival,
        location2: location2,
        time2: time2
      });
    }

  }, this);

  var sortedJourneys = journeys.sort(function(a, b) {
    a = a.time;
    b = b.time;
    if (a.isSame(b)) {
      return 0;
    } else {
      return a.isBefore(b) ? -1 : 1;
    }
  });

  return sortedJourneys;
}