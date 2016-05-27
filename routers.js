const router = require('koa-router')();
const glRouter = require('./api/global');



module.exports = function (app) {
  router.use('/global', glRouter.routes(), glRouter.allowedMethods());


  router.get('/',function * (){
    yield this.render('index');
  });
  app.use(router.routes());
};
