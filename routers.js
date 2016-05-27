const router = require('koa-router')();

const glRouter = require('./api/gl');
const userRouter = require('./api/user');


module.exports = function (app) {
  router.use('/global', glRouter.routes(), glRouter.allowedMethods());
  router.use('/user', userRouter.routes(), userRouter.allowedMethods());

  router.get('/',function * (){
    yield this.render('index');
  });
  app.use(router.routes());
};
