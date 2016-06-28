// mysql
const mysql = require('mysql');
const config = require('../../config').mysqlConfig;
const testConfig = require('../../config').testMysqlConfig;
const pool = mysql.createPool(config);
const testPool = mysql.createPool(testConfig);
pool.getConnection(function(err, connection) {
  console.log('connected dev! (unless `err` is set)');
});
testPool.getConnection(function(err, connection) {
  console.log('connected test! (unless `err` is set)');
});
exports.pool = pool;
exports.testPool = testPool;
