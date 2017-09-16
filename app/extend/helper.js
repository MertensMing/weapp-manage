'use strict';

const fs = require('fs');
const path = require('path');
const baseUrl = 'http://ov9z0zlev.bkt.clouddn.com/';
const jsVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../version.js.json'), 'utf-8'));
const cssVersion = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../version.css.json'), 'utf-8'));

module.exports = {
  formatJsUrl(url) {
    const env = this.app.env;
    if (env === 'local') {
      return `${baseUrl}${url}`;
    }
    const sourceUrl = jsVersion[url] || url;
    return `${baseUrl}${sourceUrl}`;
  },
  formatCssUrl(url) {
    const env = this.app.env;
    if (env === 'local') {
      return `${baseUrl}style/${url}`;
    }
    const sourceUrl = cssVersion[url] || url;
    return `${baseUrl}${sourceUrl}`;
  },
};
