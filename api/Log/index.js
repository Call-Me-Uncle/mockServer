const _ = require('lodash');
const router = require('koa-router')();
const sql = require('../../model/common/promisifySql');
console.log(sql);
let error = {
    error_id: 0,
    error_str: ''
}
router.post('/', function*() {
  let str = `select qid, utype, category, cmuid, cmuuid, ctime, message from log_api where qid='1466737980681'`;
  // log_api
  let res = yield sql.query(str);
  if(res.length){
    _.each(res,function (val, key) {
      // val.message = JSON.parse(val.message);
    });
    this.body = {
      data: res,
      error:{
        error_id: 0,
        error_str: ''
      }
    }
  }else{
    this.body = {
      data: null,
      error:{
        error_id: 1,
        error_str: '没有此条数据'
      }
    }
  }
});
module.exports = router;
