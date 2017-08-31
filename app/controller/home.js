'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const { ctx } = this;
      const data = {
        js_url: ctx.helper.formatJsUrl('app/index.js'),
        str: ctx.helper.formatJsUrl('app/index.js'),
        helper: ctx.helper,
      };
      yield ctx.render('home/index.tpl', data);
    }
  }
  return HomeController;
};
