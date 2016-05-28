const router = require('koa-router')();

router.post('/', function * () {

  let id =this.query.type;
  let info = this.request.body;
  let res = dealApi[id].call(this,info);
  this.body = res;
});
module.exports = router;
const dealApi = {
  'csv001': function (info){

  },
  'csv002': function (info){

  },
  'csv003': function (info){

  },
}
