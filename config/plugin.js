'use strict';

// had enabled by egg
exports.static = true;

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks'
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};