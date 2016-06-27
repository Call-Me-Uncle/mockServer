const _ = require('lodash');
const router = require('koa-router')();
const sql = require('../../model/common/promisifySql');
console.log(sql);
let error = {
    error_id: 0,
    error_str: ''
}
router.post('/', function*() {

    let reqData = this.request.body;
    console.log(reqData);

    let whereStr = '';
    let sqlStart = 0;
    _.each(reqData, function(val, key) {

        if (key === 'page') {
            sqlStart = (parseInt(val) - 1) * 30;
        } else if (key === 'env') {} else {
            if (key === 'utype') {
                val = parseInt(val);
            } else {
                val = `'${val}'`;
            }
            whereStr += `${key}=${val} and `;
        }

    });
    console.log(sqlStart);
    whereStr && (whereStr = `where ${whereStr.substring(0,whereStr.length-5)}`);
    console.log(whereStr);
    let str = `select qid, utype, type, category, cmuid, cmuuid, ctime, message from log_api ${whereStr} order by log_time desc limit ${sqlStart},30`;
    // log_api
    let lenStr = `select count(id) from log_api ${whereStr}`;
    let total = (yield sql.query(lenStr))[0][`count(id)`];
    let res = yield sql.query(str);
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
