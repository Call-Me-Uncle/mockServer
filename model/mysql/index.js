// mysql
const mysql = require('mysql');
const config = require('../../config').mysqlConfig;
const pool = mysql.createPool(config);

pool.getConnection(function(err, connection) {
  console.log('connected! (unless `err` is set)');
});
module.exports = pool;
