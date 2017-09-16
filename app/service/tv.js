'use strict';
module.exports = app => {
  class TvService extends app.Service {
    * list(page = 1, pageSize = 10, order, orderType) {
      const { ctx } = this;
      const query = {
        columns: [ 'id', 'title', 'rate', 'url', 'cover', 'start_time' ],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      };
      if (order) {
        query.orders = [[ order, orderType === 'ascend' && 'asc' || 'desc' ]];
      }
      const list = yield ctx.app.mysql.select('hongkong_tv', query);
      return list;
    }
    * total() {
      const { ctx } = this;
      const total = yield ctx.app.mysql.query('select count(*) from hongkong_tv');
      return total[0]['count(*)'];
    }
  }
  return TvService;
};
