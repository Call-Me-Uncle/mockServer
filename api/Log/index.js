const _ = require('lodash');
const router = require('koa-router')();
const sql = require('../../model/common/promisifySql');

let error = {
    error_id: 0,
    error_str: ''
}
router.post('/', function*() {

    let reqData = this.request.body;

    let whereStr = '';
    let sqlStart = 0;
    let env;
    let listLen = 30;
    _.each(reqData, function(val, key) {

        if (key === 'page') {
            sqlStart = (parseInt(val) - 1) * 30;
        } else if (key === 'env') {
          env = val;
        } else {
            if (key === 'utype') {
                val = parseInt(val);
            } else {
                val = `'${val}'`;
            }
            whereStr += `${key}=${val} and `;
        }
        key === 'type' && val === `'gsv007'` && (listLen = 2)
    });
    whereStr && (whereStr = `where ${whereStr.substring(0,whereStr.length-5)}`);
    let str = `select qid, utype, type, category, cmuid, cmuuid, ctime, message from log_api ${whereStr} order by log_time desc limit ${sqlStart},${listLen}`;
    let lenStr = `select count(id) from log_api ${whereStr}`;

// log_api
    let total = (yield sql.query(lenStr, env))[0][`count(id)`];
    let res = yield sql.query(str, env);
    if (res.length) {
        _.each(res, function(val, key) {
            // val.message = JSON.parse(val.message);
        });
        this.body = {
            data: res,
            total: total,
            error: {
                error_id: 0,
                error_str: ''
            }
        }
    } else {
        this.body = {
            data: null,
            error: {
                error_id: 1,
                error_str: '没有此条数据'
            }
        }
    }
});
module.exports = router;
