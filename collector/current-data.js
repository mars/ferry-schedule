module.exports = {
  journeys: [{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb01',
    depart: '5:35 am',
    arrive: '6:00 am'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb02',
    depart: '6:40 am',
    arrive: '7:05 am'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb03',
    depart: '7:50 am',
    arrive: '8:15 am'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb04',
    depart: '8:45 am',
    arrive: '9:10 am'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb05',
    depart: '4:55 pm',
    arrive: '5:20 pm'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb06',
    depart: '5:55 pm',
    arrive: '6:20 pm'
  },{
    linked: { route: 'tiburon-sf-ferry-bldg' },
    id: 'tsfb07',
    depart: '7:05 pm',
    arrive: '7:30 pm'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt01',
    depart: '6:05 am',
    arrive: '6:30 am'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt02',
    depart: '7:10 am',
    arrive: '7:35 am'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt03',
    depart: '8:20 am',
    arrive: '8:40 am'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt04',
    depart: '4:25 pm',
    arrive: '4:50 pm'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt05',
    depart: '5:25 pm',
    arrive: '5:50 pm'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt06',
    depart: '6:30 pm',
    arrive: '6:55 pm'
  },{
    linked: { route: 'sf-ferry-bldg-tiburon' },
    id: 'sfbt07',
    depart: '7:35 pm',
    arrive: '7:55 pm'
  },{
    linked: { route: 'tiburon-sf-pier-41' },
    id: 'tsp4101',
    depart: '10:30 am',
    arrive: '10:55 am'
  },{
    linked: { route: 'tiburon-sf-pier-41' },
    id: 'tsp4102',
    depart: '11:50 am',
    arrive: '12:15 pm'
  },{
    linked: { route: 'tiburon-sf-pier-41' },
    id: 'tsp4103',
    depart: '1:10 pm',
    arrive: '1:45 pm'
  },{
    linked: { route: 'tiburon-sf-pier-41' },
    id: 'tsp4104',
    depart: '2:35 pm',
    arrive: '3:15 pm'
  },{
    linked: { route: 'tiburon-sf-pier-41' },
    id: 'tsp4105',
    depart: '8:00 pm',
    arrive: '8:20 pm'
  },{
    linked: { route: 'sf-pier-41-tiburon' },
    id: 'sp41t01',
    depart: '9:45 am',
    arrive: '10:25 am'
  },{
    linked: { route: 'sf-pier-41-tiburon' },
    id: 'sp41t02',
    depart: '11:00 am',
    arrive: '11:45 am'
  },{
    linked: { route: 'sf-pier-41-tiburon' },
    id: 'sp41t03',
    depart: '12:20 pm',
    arrive: '1:05 pm'
  },{
    linked: { route: 'sf-pier-41-tiburon' },
    id: 'sp41t04',
    depart: '1:50 pm',
    arrive: '2:30 pm'
  },{
    linked: { route: 'sf-pier-41-tiburon' },
    id: 'sp41t05',
    depart: '4:10 pm',
    arrive: '4:50 pm'
  }],

  links: {
    routes: [{
      id: 'tiburon-sf-ferry-bldg',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'Tiburon',
      destination: 'SF Ferry Bldg'
    },{
      id: 'sf-ferry-bldg-tiburon',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'SF Ferry Bldg',
      destination: 'Tiburon'
    },{
      id: 'tiburon-sf-pier-41',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'Tiburon',
      destination: 'SF Pier 41'
    },{
      id: 'sf-pier-41-tiburon',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'SF Pier 41',
      destination: 'Tiburon'
    }],
    locations: [{
      id: 'Tiburon',
      latitude: 37.872819,
      longitude: -122.455997
    },{
      id: 'SF Pier 41',
      latitude: 37.809111,
      longitude: -122.412217
    },{
      id: 'SF Ferry Bldg',
      latitude: 37.795420,
      longitude: -122.393520
    }]
  }
};
