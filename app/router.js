'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/tv/list.json', 'tv.list');
};
