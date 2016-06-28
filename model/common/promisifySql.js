/*
use : x.create(qStr); x.query(qStr);
如果需要扩展sql操作，写在setActions中
 */


const pool = require(`../mysql`).pool;
const testPool = require('../mysql').testPool;
const _ = require('lodash');
let sqlPool = pool;
const promisify = function (fn, qStr) {
  const promise = new Promise((resolve, reject) => {
    fn(resolve, reject, qStr);
  });
  return promise;
};

// 扩展方法在下面对象中填写 ,此处的方法暴露给promisefy 函数
const setActions = {
  query: function (resolve, reject, qStr) {
            sqlPool.query(qStr, (err, rows) => {
              if (err) { throw err; }
              resolve(rows);
            });
  },
  insert: function (resolve, reject, qStr) {
            sqlPool.query(qStr, (err, result) => {
              console.log(21313123);
              if (err) { throw err; }
              resolve(result);
            });
  },
};

// 组装 promisefy的方法，并绑定到 sqlActions 上；
const sqlActions = {};
_.each(setActions, function (fn, action) {
  sqlActions[action] = function (qStr, env) {
    setSqlEnv(env);
    return promisify(fn, qStr);
  };
});
function setSqlEnv(env) {
  console.log('env', env);
  sqlPool = env === 'test' ? testPool : pool;
}
module.exports = sqlActions;
