'use strict';

module.exports = () => {
  const config = {};

  config.name = 'ssssssx';

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'mertens',
      password: 'lzm0935',
      database: 'we_app_db',
    },
    app: true, // 是否加载到 app 上，默认开启
    agent: false, // 是否加载到 agent 上，默认关闭
  };

  return config;
};
