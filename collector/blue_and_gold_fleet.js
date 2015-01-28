pjs.addSuite({
  // url to start at
  url: 'http://www.blueandgoldfleet.com/ferry-services/ferry-schedules/',
  // selector to find more urls to spider
  //moreUrls: '#sortable_table_id_0 tr td:nth-child(2) a',
  //maxDepth: 1,
  // function to get some data
  scraper: function() {
    return [
      { 
        days: 'weekdays',
        origin: 'San Francisco, Pier 41',
        depart: _pjs.getText('#wp-table-reloaded-id-46-no-1 > tbody:nth-child(2) > tr > td:nth-child(3)'),
        destination: 'Sausalito',
        arrive: _pjs.getText('#wp-table-reloaded-id-46-no-1 > tbody:nth-child(2) > tr > td:nth-child(4)')
      },
      { 
        days: 'weekdays',
        origin: 'Sausalito',
        depart: _pjs.getText('#wp-table-reloaded-id-46-no-1 > tbody:nth-child(2) > tr > td:nth-child(5)'),
        destination: 'San Francisco, Pier 41',
        arrive: _pjs.getText('#wp-table-reloaded-id-46-no-1 > tbody:nth-child(2) > tr > td:nth-child(6)')
      }
    ];
  }
});
