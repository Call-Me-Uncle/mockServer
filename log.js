const bunyan = require('bunyan');
let buLog = bunyan.createLogger({
  name: 'http',
  serializers: bunyan.stdSerializers,
  // src: true,
  time: new Date().toLocaleString(),
  streams: [
    {
      level: 'info',
      stream:process.stdout,
      // path: `./logs/http.log`,  ？ 2选1

    }
  ]
});
module.exports = buLog;
