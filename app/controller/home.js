'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, welcome to zhiming\' website!!!!! ';
    }
  }
  return HomeController;
};
