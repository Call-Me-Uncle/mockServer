const router = require('koa-router')();
let error = {
    error_id: 0,
    error_str: ''
}
router.post('/', function*() {
    let id = this.request.body.type;
    let info = this.request.body;
    let res = dealApi[id].call(this, info);
    // info.query && info.query = JSON.parse(info.query);
    info.query = info.query ? JSON.parse(info.query) : info.query;
    this.body = res;
});
module.exports = router;
const dealApi = {
    'ssv001': function(info) {

    },
    'ssv002': function(info) {
        let data = {
            imgPrefix: 'http://mioji-attr.kssws.ks-cdn.com',
            imgSuffix: '@base@tag=imgScale&r=0&c=1&q=80&w=360&h=270&rotate=0',
            list: [{
                select: 0,
                mode: 2,
                id: 'v204366',
                img: 'v204366_1.jpg'
            }, {
                select: 0,
                mode: 2,
                id: 'v202283',
                img: 'v202283_1.jpg'
            }, {
                select: 0,
                mode: 2,
                id: 'v201045',
                img: 'v201045_1.jpg'
            }, {
                select: 0,
                mode: 2,
                id: 'v202466',
                img: 'v202466_2.jpg'
            }, {
                select: 0,
                mode: 2,
                id: 'v202698',
                img: 'v202698_2.jpg'
            }]
        };

        return {
            data: data,
            error: error
        }
    },
    'ssv003': function(info) {


    },
}
