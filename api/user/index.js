const router = require('koa-router')();

router.post('/', function * () {

  var id =this.query.type;
  var info = this.request.body;
  if (id =='ucm001') {

  	 this.body = {
  	    error:{
  		    err_id : 0,
  		    error_str : ''
  	          },
  	    data: {
               code :'1234'
              }
  	      };
  }
  else if(id =='ucm002'){
    var vcode = info.query.vcode;
    if(vcode =='1234'){
  	this.body = {
  		error:{
  			err_id :0,
  			error_str: ''
  		},
  		data: {
  			uid:'s1',
  			token:'helloworld',
        jid:'s1@120.132.66.186/user',
        jwd:'125091'
  		}
  	};
  }
  else{
    this.body = {
      error:{
        err_id :1,
        error_str: 'vcode is wrong'
      },
      data: {

      }
    };
  }
  }
  else if(id == 'usv002')
  {
      var username = info.query.account;
      this.body = {
      error:{
        err_id :0,
        error_str: ''
      },
      data: {
        uid: username,
        token:'helloworld',
        avator:'',
        nickname:'guangyu',
        jid:`${username}@120.132.66.186/service`,
        jwd:'123456'
      }
    };
  }
  else if(id =='usv003')
  {
    this.body = {
      error:{
        err_id :0,
        error_str: ''
      },
      data: {
        tripInfo:{},
        session:{}
      }
    };
  }
});
module.exports = router;
