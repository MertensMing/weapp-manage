'use strict';

module.exports = app => {
  class TvController extends app.Controller {
    * list() {
      const { ctx } = this;
      const {
        page = 1,
        pageSize = 10,
        order,
        orderType = 'ascend',
      } = ctx.query;
      const list = yield ctx.service.tv.list(page, pageSize, order, orderType);
      const total = yield ctx.service.tv.total();
      ctx.body = {
        code: 0,
        data: {
          list,
          total,
        },
      };
    }
  }
  return TvController;
};
