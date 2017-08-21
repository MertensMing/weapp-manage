'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = 'zhiming_1503324505400_668';

  // add your config here

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    },
  };

  return config;
};
