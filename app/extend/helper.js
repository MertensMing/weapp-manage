'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  formatJsUrl(url) {
    const env = this.app.env;
    const versionStr = fs.readFileSync(path.resolve(__dirname, '../../version.js.json'), 'utf-8');
    const version = JSON.parse(versionStr);
    if (env === 'local') {
      return `http://ov9z0zlev.bkt.clouddn.com/${url}`;
    }
    return `http://ov9z0zlev.bkt.clouddn.com/${version[url]}`;
  },
  formatCssUrl(url) {
    const env = this.app.env;
    const versionStr = fs.readFileSync(path.resolve(__dirname, '../../version.css.json'), 'utf-8');
    const version = JSON.parse(versionStr);
    if (env === 'local') {
      return `http://ov9z0zlev.bkt.clouddn.com/style/${url}`;
    }
    return `http://ov9z0zlev.bkt.clouddn.com/${version[url]}`;
  },
};