module.exports = {
  journeys: [{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc01',
    depart: '5:35 am',
    arrive: '6:00 am'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc02',
    depart: '6:40 am',
    arrive: '7:05 am'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc03',
    depart: '7:50 am',
    arrive: '8:15 am'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc04',
    depart: '8:45 am',
    arrive: '9:10 am'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc05',
    depart: '4:55 pm',
    arrive: '5:20 pm'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc06',
    depart: '5:55 pm',
    arrive: '6:20 pm'
  },{
    linked: { route: 'tiburon-sf-commute' },
    id: 'tsc07',
    depart: '7:05 pm',
    arrive: '7:30 pm'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc01',
    depart: '6:05 am',
    arrive: '6:30 am'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc02',
    depart: '7:10 am',
    arrive: '7:35 am'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc03',
    depart: '8:20 am',
    arrive: '8:40 am'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc04',
    depart: '4:25 pm',
    arrive: '4:50 pm'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc05',
    depart: '5:25 pm',
    arrive: '5:50 pm'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc06',
    depart: '6:30 pm',
    arrive: '6:55 pm'
  },{
    linked: { route: 'sf-tiburon-commute' },
    id: 'stc07',
    depart: '7:35 pm',
    arrive: '7:55 pm'
  }],

  links: {
    routes: [{
      id: 'tiburon-sf-commute',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'Tiburon',
      destination: 'San Francisco, Ferry Bldg'
    },{
      id: 'sf-tiburon-commute',
      days: 'weekdays',
      qualifier: 'Effective October 27, 2014 - April 26, 2015',
      origin: 'San Francisco, Ferry Bldg',
      destination: 'Tiburon'
    }]
  }
};
