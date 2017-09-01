'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const { ctx } = this;
      const data = {
        helper: ctx.helper,
      };
      yield ctx.render('home/index.tpl', data);
    }
  }
  return HomeController;
};
