// JSON-API format http://jsonapi.org/format/
module.exports = {
  journeys: [{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb01',
    depart: '5:35 am',
    arrive: '6:00 am'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb02',
    depart: '6:40 am',
    arrive: '7:05 am'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb03',
    depart: '7:50 am',
    arrive: '8:15 am'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb04',
    depart: '8:45 am',
    arrive: '9:10 am'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb05',
    depart: '4:55 pm',
    arrive: '5:20 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb06',
    depart: '5:55 pm',
    arrive: '6:20 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-ferry-bldg' }
    },
    id: 'tsfb07',
    depart: '7:05 pm',
    arrive: '7:30 pm'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt01',
    depart: '6:05 am',
    arrive: '6:30 am'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt02',
    depart: '7:10 am',
    arrive: '7:35 am'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt03',
    depart: '8:20 am',
    arrive: '8:40 am'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt04',
    depart: '4:25 pm',
    arrive: '4:50 pm'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt05',
    depart: '5:25 pm',
    arrive: '5:50 pm'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt06',
    depart: '6:30 pm',
    arrive: '6:55 pm'
  },{
    links: {
      route: { id: 'sf-ferry-bldg-tiburon' }
    },
    id: 'sfbt07',
    depart: '7:35 pm',
    arrive: '7:55 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-pier-41' }
    },
    id: 'tsp4101',
    depart: '10:30 am',
    arrive: '10:55 am'
  },{
    links: {
      route: { id: 'tiburon-sf-pier-41' }
    },
    id: 'tsp4102',
    depart: '11:50 am',
    arrive: '12:15 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-pier-41' }
    },
    id: 'tsp4103',
    depart: '1:10 pm',
    arrive: '1:45 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-pier-41' }
    },
    id: 'tsp4104',
    depart: '2:35 pm',
    arrive: '3:15 pm'
  },{
    links: {
      route: { id: 'tiburon-sf-pier-41' }
    },
    id: 'tsp4105',
    depart: '8:00 pm',
    arrive: '8:20 pm'
  },{
    links: {
      route: { id: 'sf-pier-41-tiburon' }
    },
    id: 'sp41t01',
    depart: '9:45 am',
    arrive: '10:25 am'
  },{
    links: {
      route: { id: 'sf-pier-41-tiburon' }
    },
    id: 'sp41t02',
    depart: '11:00 am',
    arrive: '11:45 am'
  },{
    links: {
      route: { id: 'sf-pier-41-tiburon' }
    },
    id: 'sp41t03',
    depart: '12:20 pm',
    arrive: '1:05 pm'
  },{
    links: {
      route: { id: 'sf-pier-41-tiburon' }
    },
    id: 'sp41t04',
    depart: '1:50 pm',
    arrive: '2:30 pm'
  },{
    links: {
      route: { id: 'sf-pier-41-tiburon' }
    },
    id: 'sp41t05',
    depart: '4:10 pm',
    arrive: '4:50 pm'
  }],

  linked: {
    routes: [{
      id: 'tiburon-sf-ferry-bldg',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      links: {
        origin: { type: 'location', id: 'tiburon' },
        destination: { type: 'location', id: 'sf-ferry-bldg' }
      }
    },{
      id: 'sf-ferry-bldg-tiburon',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      links: {
        origin: { type: 'location', id: 'sf-ferry-bldg' },
        destination: { type: 'location', id: 'tiburon' }
      }
    },{
      id: 'tiburon-sf-pier-41',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      links: {
        origin: { type: 'location', id: 'tiburon' },
        destination: { type: 'location', id: 'sf-pier-41' }
      }
    },{
      id: 'sf-pier-41-tiburon',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      links: {
        origin: { type: 'location', id: 'sf-pier-41' },
        destination: { type: 'location', id: 'tiburon' }
      }
    }],
    locations: [{
      id: 'sf-ferry-bldg',
      name: 'SF Ferry Bldg',
      latitude: 37.795420,
      longitude: -122.393520
    },{
      id: 'sf-pier-41',
      name: 'SF Pier 41',
      latitude: 37.809111,
      longitude: -122.412217
    },{
      id: 'tiburon',
      name: 'Tiburon',
      latitude: 37.872819,
      longitude: -122.455997
    }]
  }
};
