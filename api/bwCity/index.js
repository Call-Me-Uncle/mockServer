const router = require('koa-router')();
let error = {
  error_id: 0,
  error_str: ''
}
router.post('/', function * () {
  let id =this.request.body.type;
  let info = this.request.body;
  let res = dealApi[id].call(this,info);

  this.body = res;
});
module.exports = router;
const dealApi = {
  'csv001': function (info){

  },
  'csv002': function (info){
    let data = {
      tag: '经典',
      country: [501, 503, 502],
      title: '德意法3国15日深度游',
      img: '',
      cicon: {
        img: '',
        score: 9.5
      },
      dest: [
        {
          place: 10029,
          dur: 5
        },
        {
          place: 10028,
          dur: 5
        },
        {
          place: 10001,
          dur: 5
        },
      ],
      say: 'javascript是世界上最好的服务器'
    };
    return {
      data: {
        list: [data, data, data]
      },
      error: error
    }
  },
  'csv003': function (info){

  },
}
