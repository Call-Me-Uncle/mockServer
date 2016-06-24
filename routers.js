const router = require('koa-router')();

const buLog = require('./log');
const glRouter = require('./api/gl');
const userRouter = require('./api/user');
const cityRouter = require('./api/bwCity');
const scityRouter = require('./api/sCity');
const LogRouter = require('./api/Log');
module.exports = function (app) {
  router.use(function * (next) {
    this.method !== 'GET' && buLog.info({req: this.req},{body: this.request.body});
    yield next;
  });
  router.use('/Log', LogRouter.routes(), LogRouter.allowedMethods());
  router.use('/global', glRouter.routes(), glRouter.allowedMethods());
  router.use('/user', userRouter.routes(), userRouter.allowedMethods());
  router.use('/city', cityRouter.routes(), cityRouter.allowedMethods());
  router.use('/scity', scityRouter.routes(), scityRouter.allowedMethods());
  router.get('/',function * (){
    yield this.render('index');
  });
  router.get('/showlog',function *(){
    yield this.render('log');
  });
  app.use(router.routes());
};
