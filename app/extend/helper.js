'use strict';

const fs = require('fs');
const path = require('path');

module.exports = {
  formatUrl(url, versionPath) {
    const env = this.app.env;
    const versionStr = fs.readFileSync(versionPath, 'utf-8');
    const version = JSON.parse(versionStr);
    if (env === 'local') {
      return `http://ov9z0zlev.bkt.clouddn.com/${url}`;
    }
    return `http://ov9z0zlev.bkt.clouddn.com/${version[url]}`;
  },
  formatJsUrl(url) {
    return this.formatUrl(
      url,
      path.resolve(__dirname, '../../version.js.json'));
  },
  formatCssUrl(url) {
    return this.formatUrl(
      `style/${url}`,
      path.resolve(__dirname, '../../version.css.json'));
  },
};
