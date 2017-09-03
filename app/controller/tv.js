'use strict';

module.exports = app => {
  class TvController extends app.Controller {
    * list() {
      const { ctx } = this;
      const data = {
        code: 0,
        data: {},
      };
      ctx.body = data;
    }
  }
  return TvController;
};
