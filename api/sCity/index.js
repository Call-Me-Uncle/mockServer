const router = require('koa-router')();
let error = {
    error_id: 0,
    error_str: ''
}
router.post('/', function*() {
    let id = this.request.body.type;
    let info = this.request.body;
    info.query = info.query ? JSON.parse(info.query) : info.query;
    let res = dealApi[id].call(this, info);

    // info.query && info.query = JSON.parse(info.query);

    this.body = res;
});
module.exports = router;
const dealApi = {
    ssv001: function(info) {

    },
    ssv002: function(info) {
        let data = {
            imgPrefix: 'http://mioji-attr.kssws.ks-cdn.com',
            imgSuffix: '@base@tag=imgScale&r=0&c=1&q=80&w=360&h=270&rotate=0',
            list: [{
                select: 0,
                mode: 2,
                name: '巴黎圣母院',
                id: 'v204366',
                img: 'v204366_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '艾菲尔铁塔',
                id: 'v202283',
                img: 'v202283_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点1',
                id: 'v201045',
                img: 'v201045_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点2',
                id: 'v202466',
                img: 'v202466_2.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点3',
                id: 'v202698',
                img: 'v202698_2.jpg'
            }]
        };

        return {
            data: data,
            error: error
        }
    },
    ssv003: function(info) {


    },
    ssv004: function(info) {
        return {
            "data": {
                "filter": {
                    "typeList": [{
                        "mode": 2,
                        "tags": [{
                            "id": "TV0000",
                            "name": "\u81ea\u7136"
                        }, {
                            "id": "TV0001",
                            "name": "\u5efa\u7b51"
                        }, {
                            "id": "TV0002",
                            "name": "\u5386\u53f2"
                        }, {
                            "id": "TV0003",
                            "name": "\u535a\u7269\u9986"
                        }, {
                            "id": "TV0004",
                            "name": "\u5b97\u6559"
                        }, {
                            "id": "TV0005",
                            "name": "\u827a\u672f"
                        }, {
                            "id": "TV0006",
                            "name": "\u6587\u5316"
                        }, {
                            "id": "TV0007",
                            "name": "\u5a31\u4e50"
                        }, {
                            "id": "TV0008",
                            "name": "\u8fd0\u52a8"
                        }]
                    }]
                },
                "list": [{
                    "mode": 2,
                    "id": "v204366",
                    "lname": "Tour Eiffel",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 5436,
                    "score": "9.90",
                    "name": "\u57c3\u83f2\u5c14\u94c1\u5854",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v204366_1.jpg",
                    "tag": "\u73b0\u4ee3\u5efa\u7b51 \u5730\u6807 \u5854",
                    "dur": "3600",
                    "coord": "2.294458,48.858362",
                    "ename": "Tour Eiffel"
                }, {
                    "mode": 2,
                    "id": "v202283",
                    "lname": "Mus\u00e9e du Louvre",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 5128,
                    "score": "9.80",
                    "name": "\u5362\u6d6e\u5bab",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202283_1.jpg",
                    "tag": "\u7efc\u5408\u6027\u535a\u7269\u9986 \u5bab\u6bbf",
                    "dur": "10800",
                    "coord": "2.337655,48.860590",
                    "ename": "Mus\u00e9e du Louvre"
                }, {
                    "mode": 2,
                    "id": "v201045",
                    "lname": "Cath\u00e9drale Notre-Dame de Paris",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 4719,
                    "score": "9.70",
                    "name": "\u5df4\u9ece\u5723\u6bcd\u9662",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v201045_1.jpg",
                    "tag": "\u6559\u5802 \u5730\u6807\u4e8b\u7269",
                    "dur": "5400",
                    "coord": "2.349901,48.852969",
                    "ename": "Cath\u00e9drale Notre-Dame de Paris"
                }, {
                    "mode": 2,
                    "id": "v202466",
                    "lname": "Avenue des Champs-\u00c9lys\u00e9es",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 4996,
                    "score": "9.40",
                    "name": "\u9999\u69ad\u4e3d\u820d\u5927\u8857",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202466_2.jpg",
                    "tag": "\u8857\u533a \u8d2d\u7269\u8857 \u5546\u5708",
                    "dur": "5400",
                    "coord": "2.308266,48.869582",
                    "ename": "Avenue des Champs-\u00c9lys\u00e9es"
                }, {
                    "mode": 2,
                    "id": "v202698",
                    "lname": "Arc de Triomphe",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 5106,
                    "score": "9.12",
                    "name": "\u51ef\u65cb\u95e8",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202698_2.jpg",
                    "tag": "\u5730\u6807\u4e8b\u7269 \u7eaa\u5ff5\u7891",
                    "dur": "2700",
                    "coord": "2.295033,48.873788",
                    "ename": "Arc de Triomphe"
                }, {
                    "mode": 2,
                    "id": "v202290",
                    "lname": "Place de la Concorde",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 3814,
                    "score": "9.10",
                    "name": "\u534f\u548c\u5e7f\u573a",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202290_1.jpg",
                    "tag": "\u5e7f\u573a \u7eaa\u5ff5\u7891 \u96d5\u5851",
                    "dur": "1800",
                    "coord": "2.321098,48.865505",
                    "ename": "Place de la Concorde"
                }, {
                    "mode": 2,
                    "id": "v202284",
                    "lname": "Basilique du Sacr\u00e9 C\u0153ur de Montmartre",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 2664,
                    "score": "9.10",
                    "name": "\u5723\u5fc3\u5927\u6559\u5802",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202284_1.jpg",
                    "tag": "\u5730\u6807\u4e8b\u7269 \u6559\u5802",
                    "dur": "2700",
                    "coord": "2.343106,48.886262",
                    "ename": "Basilique du Sacr\u00e9 C\u0153ur de Montmartre"
                }, {
                    "mode": 2,
                    "id": "v202578",
                    "lname": "Mus\u00e9e d'Orsay",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 1398,
                    "score": "8.90",
                    "name": "\u5965\u8d5b\u535a\u7269\u9986",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202578_1.jpg",
                    "tag": "\u827a\u672f\u535a\u7269\u9986",
                    "dur": "10800",
                    "coord": "2.326561,48.859960",
                    "ename": "Mus\u00e9e d'Orsay"
                }, {
                    "mode": 2,
                    "id": "v201568",
                    "lname": "Op\u00e9ra de Paris",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 2291,
                    "score": "8.90",
                    "name": "\u5df4\u9ece\u6b4c\u5267\u9662",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v201568_1.jpg",
                    "tag": "\u5267\u9662",
                    "dur": "5400",
                    "coord": "2.331972,48.871344",
                    "ename": "Op\u00e9ra de Paris"
                }, {
                    "mode": 2,
                    "id": "v202302",
                    "lname": "\u00cele de la Cit\u00e9",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 1608,
                    "score": "8.80",
                    "name": "\u897f\u5cb1\u5c9b",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202302_2.jpg",
                    "tag": "\u8857\u533a \u5c9b\u5c7f",
                    "dur": "5400",
                    "coord": "2.347277,48.855556",
                    "ename": "\u00cele de la Cit\u00e9"
                }, {
                    "mode": 2,
                    "id": "v202285",
                    "lname": "Le Centre Pompidou",
                    "miojiTag": "",
                    "rec": "Hello PHP",
                    "recNum": 1735,
                    "score": "8.80",
                    "name": "\u84ec\u76ae\u675c\u4e2d\u5fc3",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202285_2.jpg",
                    "tag": "\u73b0\u4ee3\u5efa\u7b51 \u827a\u672f\u535a\u7269\u9986",
                    "dur": "5400",
                    "coord": "2.352254,48.860641",
                    "ename": "Le Centre Pompidou"
                }, {
                    "mode": 2,
                    "id": "v202152",
                    "lname": "Pont Alexandre III",
                    "miojiTag": "",
                    "rec": "Hello PHP",
                    "recNum": 1528,
                    "score": "8.70",
                    "name": "\u4e9a\u5386\u5c71\u5927\u4e09\u4e16\u6865",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v202152_1.jpg",
                    "tag": "\u6865\u6881",
                    "dur": "1800",
                    "coord": "2.313585,48.863869",
                    "ename": "Pont Alexandre III"
                }, {
                    "mode": 2,
                    "id": "v201855",
                    "lname": "Pont Neuf",
                    "miojiTag": "",
                    "rec": "Hello PHP",
                    "recNum": 1847,
                    "score": "8.60",
                    "name": "\u5df4\u9ece\u65b0\u6865",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v201855_1.jpg",
                    "tag": "\u6865\u6881",
                    "dur": "1800",
                    "coord": "2.341515,48.857357",
                    "ename": "Pont Neuf"
                }, {
                    "mode": 2,
                    "id": "v200813",
                    "lname": "Jardin des Tuileries",
                    "miojiTag": "",
                    "rec": "Hello PHP",
                    "recNum": 1257,
                    "score": "8.50",
                    "name": "\u675c\u4e50\u4e3d\u82b1\u56ed",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v200813_10.jpg",
                    "tag": "\u8857\u5fc3\u516c\u56ed",
                    "dur": "3600",
                    "coord": "2.330078,48.864254",
                    "ename": "Jardin des Tuileries"
                }, {
                    "mode": 2,
                    "id": "v200815",
                    "lname": "Parc du Champ de Mars",
                    "miojiTag": "\u5fc5\u53bb",
                    "rec": "Hello PHP",
                    "recNum": 1461,
                    "score": "8.50",
                    "name": "\u5df4\u9ece\u6218\u795e\u5e7f\u573a",
                    "img": "http:\/\/mioji-attr.kssws.ks-cdn.com\/v200815_1.jpg",
                    "tag": "\u7403\u8ff7\u533a",
                    "dur": "10800",
                    "coord": "2.298631,48.855644",
                    "ename": "Parc du Champ de Mars"
                }],
                "miojiSay": "",
                "total": 140,
                "imgPrefix": "",
                "imgSuffix": "@base@tag=imgScale&r=0&c=1&q=80&w=360&h=270&rotate=0"
            },
            "dbg": "",
            "error": {
                "error_id": 0,
                "error_reason": ""
            }
        }
    },
    ssv005: function(info) {
        var path = info.query.ridx;


        return {
            "data": {
                "miojiSay": "",
                "route": {
                    "diff": [{
                        "content": {
                            "arvPoi": "CDG",
                            "arvTime": "20160712_14:40",
                            "checkin": "20160712",
                            "checkout": "20160713",
                            "cid": "10001",
                            "cname": "\u5df4\u9ece",
                            "coord": "2.351492339147967,48.85746107178952",
                            "country": "\u6cd5\u56fd",
                            "deptPoi": "CDG",
                            "deptTime": "20160714_13:40",
                            "dur": 169200,
                            "dur_real": 75600,
                            "hotel": [{
                                "checkin": "20160712",
                                "checkout": "20160713",
                                "id": "ht20020024",
                                "lname": "Hotel Le Squara",
                                "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                "room": [{
                                    "id": "{\"checkin\":\"20160712\",\"checkout\":\"20160713\",\"md5\":\"74bbb41828b31690\",\"need\":1,\"norm_room\":\"\u53cc\u4eba\u623f\",\"occ\":2,\"source\":\"expedia\",\"uid\":\"ht20020024\"}",
                                    "num": 1,
                                    "occ": 2,
                                    "price": 769,
                                    "realPrice": {
                                        "ccy": "HKD",
                                        "val": 949.3
                                    },
                                    "type": "\u53cc\u4eba\u623f"
                                }],
                                "star": 4,
                                "totalPrice": 1537
                            }],
                            "plan": 4,
                            "prefer": {
                                "hotel": {
                                    "addition": [],
                                    "facilities": [],
                                    "position": 3,
                                    "star": [3, 4]
                                },
                                "intensity": 2,
                                "md5": "559fc12df5421438099039494be3b644",
                                "shopping": {
                                    "prefer": 0,
                                    "special": []
                                },
                                "timeRange": {
                                    "from": "09:00",
                                    "to": "20:00"
                                },
                                "trafficPrefer": [0, 1]
                            },
                            "traffic": {
                                "disable": 0,
                                "dur": 59100,
                                "id": "[{\"deptcity\":\"10001\",\"deptdate\":\"20160714\",\"deptid\":\"CDG\",\"destcity\":\"20001\",\"destid\":\"PEK\",\"md5\":\"2157da2820c29ca0\",\"mode\":\"flight\",\"source\":\"omega\"}]",
                                "pType": 0,
                                "price": 2738,
                                "priceTag": "",
                                "score": 9.5,
                                "stat": 0,
                                "ticketStat": 0,
                                "tickets": [{
                                    "mode": "flight",
                                    "noSell": 0,
                                    "price": 2738,
                                    "realPrice": {
                                        "ccy": "GBP",
                                        "val": 288.29998779297
                                    },
                                    "rest": -1,
                                    "section": [{
                                        "cls": "\u7ecf\u6d4e\u8231",
                                        "clsId": "1",
                                        "corp": "\u6d77\u5357\u822a\u7a7a",
                                        "corpId": "HU",
                                        "dept": {
                                            "cid": "10001",
                                            "city": "\u5df4\u9ece",
                                            "id": "CDG",
                                            "name": "\u5df4\u9ece\u6234\u9ad8\u4e50\u673a\u573a",
                                            "terminal": "",
                                            "terminalId": "",
                                            "time": "20160714_13:40"
                                        },
                                        "dest": {
                                            "cid": "20007",
                                            "city": "\u897f\u5b89",
                                            "id": "XIY",
                                            "name": "\u54b8\u9633\u56fd\u9645\u673a\u573a",
                                            "terminal": "",
                                            "terminalId": "",
                                            "time": "20160715_05:35"
                                        },
                                        "dur": 35700,
                                        "no": "HU7908",
                                        "size": "",
                                        "transTime": 16800,
                                        "type": "A330"
                                    }, {
                                        "cls": "\u7ecf\u6d4e\u8231",
                                        "clsId": "1",
                                        "corp": "\u6d77\u5357\u822a\u7a7a",
                                        "corpId": "HU",
                                        "dept": {
                                            "cid": "20007",
                                            "city": "\u897f\u5b89",
                                            "id": "XIY",
                                            "name": "\u54b8\u9633\u56fd\u9645\u673a\u573a",
                                            "terminal": "",
                                            "terminalId": "",
                                            "time": "20160715_10:15"
                                        },
                                        "dest": {
                                            "cid": "20001",
                                            "city": "\u5317\u4eac",
                                            "id": "PEK",
                                            "name": "\u9996\u90fd\u56fd\u9645\u673a\u573a",
                                            "terminal": "",
                                            "terminalId": "",
                                            "time": "20160715_12:05"
                                        },
                                        "dur": 6600,
                                        "no": "HU7138",
                                        "size": "\u5927\u578b\u5bbd\u4f53\u673a",
                                        "transTime": -1,
                                        "type": "AIRBUS INDUSTRIE A330-300"
                                    }],
                                    "src": "omega",
                                    "tType": 0,
                                    "tag": []
                                }]
                            },
                            "trafficRange": {
                                "from": "20160713_12:40",
                                "to": "20160716_06:00"
                            },
                            "tri_code": "PAR",
                            "view": {
                                "best": 1,
                                "day": [{
                                    "date": "20160712",
                                    "etime": "20160712_21:18",
                                    "rest": -4680,
                                    "stime": "20160712_16:10",
                                    "view": [{
                                        "coord": "2.5480544601440442, 49.009658378812105",
                                        "doWhat": "\u53d6\u884c\u674e",
                                        "dur": 5400,
                                        "etime": "20160712_16:10",
                                        "extra": 0,
                                        "id": "CDG",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Paris Charles de Gaulle Airport",
                                        "name": "\u5df4\u9ece\u6234\u9ad8\u4e50\u673a\u573a",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_14:40",
                                        "traffic": {
                                            "dist": 31490,
                                            "dur": 3774,
                                            "eval": 0,
                                            "id": "CDG_ht20020024_2_0_1_1_20160712",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 16
                                    }, {
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u529e\u7406\u5165\u4f4f",
                                        "dur": 1800,
                                        "etime": "20160712_17:42",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_17:12",
                                        "traffic": {
                                            "dist": 3740,
                                            "dur": 1250,
                                            "eval": 0,
                                            "id": "ht20020024_v202290_2_0_1_1_20160712",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 4
                                    }, {
                                        "coord": "2.321098,48.865505",
                                        "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                        "dur": 900,
                                        "etime": "20160712_18:18",
                                        "extra": 0,
                                        "id": "v202290",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Place de la Concorde",
                                        "name": "\u534f\u548c\u5e7f\u573a",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_18:03",
                                        "traffic": {
                                            "dist": 687,
                                            "dur": 549,
                                            "eval": 0,
                                            "id": "v202290_v202152_1_0_1_1_20160712",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 2
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.313585,48.863869",
                                        "doWhat": "\u968f\u4fbf\u770b\u770b",
                                        "dur": 1800,
                                        "etime": "20160712_18:57",
                                        "extra": 0,
                                        "id": "v202152",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Pont Alexandre III",
                                        "name": "\u4e9a\u5386\u5c71\u5927\u4e09\u4e16\u6865",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_18:27",
                                        "traffic": null,
                                        "type": 2
                                    }, {
                                        "coord": "0,0",
                                        "doWhat": "\u9644\u8fd1\u5c31\u9910",
                                        "dur": 2700,
                                        "etime": "20160712_19:42",
                                        "extra": 3,
                                        "id": "attach",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "",
                                        "name": "\u9644\u8fd1\u5c31\u9910",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 15,
                                        "stime": "20160712_18:57",
                                        "traffic": {
                                            "dist": 3051,
                                            "dur": 910,
                                            "eval": 0,
                                            "id": "v202152_v204366_2_0_1_1_20160712",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 0
                                    }, {
                                        "coord": "2.294458,48.858362",
                                        "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                        "dur": 2700,
                                        "etime": "20160712_20:43",
                                        "extra": 0,
                                        "id": "v204366",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Tour Eiffel",
                                        "name": "\u57c3\u83f2\u5c14\u94c1\u5854",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_19:58",
                                        "traffic": {
                                            "dist": 4775,
                                            "dur": 2133,
                                            "eval": 0,
                                            "id": "v204366_ht20020024_2_0_1_1_20160712",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u4f11\u606f",
                                        "dur": 45454,
                                        "etime": "20160713_09:00",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_21:18",
                                        "traffic": null,
                                        "type": 4
                                    }]
                                }, {
                                    "date": "20160713",
                                    "etime": "20160713_20:00",
                                    "rest": -2340,
                                    "stime": "20160713_09:00",
                                    "view": [{
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u51fa\u53d1\u6e38\u73a9",
                                        "dur": 45454,
                                        "etime": "20160713_09:00",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160712_21:18",
                                        "traffic": {
                                            "dist": 1560,
                                            "dur": 968,
                                            "eval": 0,
                                            "id": "ht20020024_v201568_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 4
                                    }, {
                                        "coord": "2.331972,48.871344",
                                        "doWhat": "\u968f\u4fbf\u770b\u770b",
                                        "dur": 5700,
                                        "etime": "20160713_10:55",
                                        "extra": 0,
                                        "id": "v201568",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Op\u00e9ra de Paris",
                                        "name": "\u5df4\u9ece\u6b4c\u5267\u9662",
                                        "price": 66.1095,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 66.1095
                                        },
                                        "restType": 0,
                                        "stime": "20160713_09:20",
                                        "traffic": {
                                            "dist": 2922,
                                            "dur": 1057,
                                            "eval": 0,
                                            "id": "v201568_r0046138_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.362795,48.871250",
                                        "doWhat": "\u5c31\u9910",
                                        "dur": 3600,
                                        "etime": "20160713_12:15",
                                        "extra": 2,
                                        "id": "r0046138",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Du Pain et des Idees",
                                        "name": "Du Pain et des Id\u00e9es",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 10,
                                        "stime": "20160713_11:15",
                                        "traffic": {
                                            "dist": 5328,
                                            "dur": 1435,
                                            "eval": 0,
                                            "id": "r0046138_v201045_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 8
                                    }, {
                                        "coord": "2.349901,48.852969",
                                        "doWhat": "\u6df1\u5ea6\u6e38\u89c8",
                                        "dur": 5400,
                                        "etime": "20160713_14:10",
                                        "extra": 0,
                                        "id": "v201045",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Cath\u00e9drale Notre-Dame de Paris",
                                        "name": "\u5df4\u9ece\u5723\u6bcd\u9662",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_12:40",
                                        "traffic": {
                                            "dist": 525,
                                            "dur": 393,
                                            "eval": 0,
                                            "id": "v201045_v202302_1_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 2
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.347277,48.855556",
                                        "doWhat": "\u968f\u4fbf\u770b\u770b",
                                        "dur": 5700,
                                        "etime": "20160713_15:55",
                                        "extra": 0,
                                        "id": "v202302",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "\u00cele de la Cit\u00e9",
                                        "name": "\u897f\u5cb1\u5c9b",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_14:20",
                                        "traffic": {
                                            "dist": 522,
                                            "dur": 399,
                                            "eval": 0,
                                            "id": "v202302_v201855_1_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 2
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.341515,48.857357",
                                        "doWhat": "\u968f\u4fbf\u770b\u770b",
                                        "dur": 1800,
                                        "etime": "20160713_16:35",
                                        "extra": 0,
                                        "id": "v201855",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Pont Neuf",
                                        "name": "\u5df4\u9ece\u65b0\u6865",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_16:05",
                                        "traffic": {
                                            "dist": 1469,
                                            "dur": 716,
                                            "eval": 0,
                                            "id": "v201855_v200813_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.330078,48.864254",
                                        "doWhat": "\u968f\u4fbf\u770b\u770b",
                                        "dur": 3774,
                                        "etime": "20160713_17:49",
                                        "extra": 0,
                                        "id": "v200813",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Jardin des Tuileries",
                                        "name": "\u675c\u4e50\u4e3d\u82b1\u56ed",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_16:46",
                                        "traffic": {
                                            "dist": 806,
                                            "dur": 610,
                                            "eval": 0,
                                            "id": "v200813_r0076489_1_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 2
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.328293,48.858299",
                                        "doWhat": "\u5c31\u9910",
                                        "dur": 2700,
                                        "etime": "20160713_18:45",
                                        "extra": 3,
                                        "id": "r0076489",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Eric Kayser Artisan Boulanger",
                                        "name": "Eric Kayser Artisan Boulanger",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 10,
                                        "stime": "20160713_18:00",
                                        "traffic": {
                                            "dist": 2356,
                                            "dur": 933,
                                            "eval": 0,
                                            "id": "r0076489_v202466_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 8
                                    }, {
                                        "coord": "2.308266,48.869582",
                                        "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                        "dur": 3600,
                                        "etime": "20160713_20:00",
                                        "extra": 0,
                                        "id": "v202466",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Avenue des Champs-\u00c9lys\u00e9es",
                                        "name": "\u9999\u69ad\u4e3d\u820d\u5927\u8857",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_19:00",
                                        "traffic": {
                                            "dist": 1765,
                                            "dur": 372,
                                            "eval": 0,
                                            "id": "v202466_v202698_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.295033,48.873788",
                                        "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                        "dur": 1800,
                                        "etime": "20160713_20:36",
                                        "extra": 0,
                                        "id": "v202698",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Arc de Triomphe",
                                        "name": "\u51ef\u65cb\u95e8",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_20:06",
                                        "traffic": {
                                            "dist": 3565,
                                            "dur": 999,
                                            "eval": 0,
                                            "id": "v202698_ht20020024_2_0_1_1_20160713",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u4f11\u606f",
                                        "dur": 39536,
                                        "etime": "20160714_08:42",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_20:00",
                                        "traffic": null,
                                        "type": 4
                                    }]
                                }, {
                                    "date": "20160714",
                                    "etime": "20160714_11:10",
                                    "rest": -1020,
                                    "stime": "20160714_08:42",
                                    "view": [{
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u51fa\u53d1\u6e38\u73a9",
                                        "dur": 39536,
                                        "etime": "20160714_08:42",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160713_20:00",
                                        "traffic": {
                                            "dist": 1433,
                                            "dur": 893,
                                            "eval": 0,
                                            "id": "ht20020024_v202284_2_0_1_1_20160714",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 4
                                    }, {
                                        "coord": "2.343106,48.886262",
                                        "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                        "dur": 1800,
                                        "etime": "20160714_09:27",
                                        "extra": 0,
                                        "id": "v202284",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Basilique du Sacr\u00e9 C\u0153ur de Montmartre",
                                        "name": "\u5723\u5fc3\u5927\u6559\u5802",
                                        "price": 58.764,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 58.764
                                        },
                                        "restType": 0,
                                        "stime": "20160714_08:57",
                                        "traffic": {
                                            "dist": 1401,
                                            "dur": 705,
                                            "eval": 0,
                                            "id": "v202284_ht20020024_2_0_1_1_20160714",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 2
                                    }, {
                                        "coord": "2.333004,48.884091",
                                        "doWhat": "\u8fd4\u56de\u53d6\u884c\u674e",
                                        "dur": 1800,
                                        "etime": "20160714_10:09",
                                        "extra": 0,
                                        "id": "ht20020024",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Hotel Le Squara",
                                        "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160714_09:39",
                                        "traffic": {
                                            "dist": 30865,
                                            "dur": 3655,
                                            "eval": 0,
                                            "id": "ht20020024_CDG_2_0_1_1_20160714",
                                            "price": 0,
                                            "realPrice": {
                                                "ccy": "",
                                                "var": 0
                                            },
                                            "show": "",
                                            "type": 3
                                        },
                                        "type": 4
                                    }, {
                                        "coord": "2.5480544601440442, 49.009658378812105",
                                        "doWhat": "\u529e\u7406\u767b\u673a",
                                        "dur": 9000,
                                        "etime": "20160714_13:40",
                                        "extra": 0,
                                        "id": "CDG",
                                        "idle": null,
                                        "isOpen": 1,
                                        "lname": "Paris Charles de Gaulle Airport",
                                        "name": "\u5df4\u9ece\u6234\u9ad8\u4e50\u673a\u573a",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "CNY",
                                            "val": 0
                                        },
                                        "restType": 0,
                                        "stime": "20160714_11:10",
                                        "traffic": null,
                                        "type": 16
                                    }]
                                }],
                                "expire": 0,
                                "lastDetail": {
                                    "dur": {
                                        "r0046138": 3600,
                                        "r0076489": 2700,
                                        "v200813": 3774,
                                        "v201045": 5400,
                                        "v201568": 5700,
                                        "v201855": 1800,
                                        "v202152": 1800,
                                        "v202284": 1800,
                                        "v202290": 900,
                                        "v202302": 5700,
                                        "v202466": 3600,
                                        "v202698": 1800,
                                        "v204366": 2700
                                    },
                                    "traffic": {
                                        "CDG_ht20020024_20160712": "CDG_ht20020024_2_0_1_1_20160712",
                                        "ht20020024_CDG_20160714": "ht20020024_CDG_2_0_1_1_20160714",
                                        "ht20020024_v201568_20160713": "ht20020024_v201568_2_0_1_1_20160713",
                                        "ht20020024_v202284_20160714": "ht20020024_v202284_2_0_1_1_20160714",
                                        "ht20020024_v202290_20160712": "ht20020024_v202290_2_0_1_1_20160712",
                                        "r0046138_v201045_20160713": "r0046138_v201045_2_0_1_1_20160713",
                                        "r0076489_v202466_20160713": "r0076489_v202466_2_0_1_1_20160713",
                                        "v200813_r0076489_20160713": "v200813_r0076489_1_0_1_1_20160713",
                                        "v201045_v202302_20160713": "v201045_v202302_1_0_1_1_20160713",
                                        "v201568_r0046138_20160713": "v201568_r0046138_2_0_1_1_20160713",
                                        "v201855_v200813_20160713": "v201855_v200813_2_0_1_1_20160713",
                                        "v202152_v204366_20160712": "v202152_v204366_2_0_1_1_20160712",
                                        "v202284_ht20020024_20160714": "v202284_ht20020024_2_0_1_1_20160714",
                                        "v202290_v202152_20160712": "v202290_v202152_1_0_1_1_20160712",
                                        "v202302_v201855_20160713": "v202302_v201855_1_0_1_1_20160713",
                                        "v202466_v202698_20160713": "v202466_v202698_2_0_1_1_20160713",
                                        "v202698_ht20020024_20160713": "v202698_ht20020024_2_0_1_1_20160713",
                                        "v204366_ht20020024_20160712": "v204366_ht20020024_2_0_1_1_20160712"
                                    }
                                },
                                "qid": "1466821788535",
                                "summary": {
                                    "closeNum": 0,
                                    "cross": 0,
                                    "days": 3,
                                    "dist": 98260,
                                    "intensity": 2,
                                    "num": 11,
                                    "playPer": 65,
                                    "playStat": 0,
                                    "price": 124,
                                    "rest": -8040,
                                    "tips": [],
                                    "trafficPer": 32
                                }
                            }
                        },
                        "path": [path]
                    }, {
                        "content": {
                            "best": 1,
                            "day": [{
                                "date": "20160712",
                                "etime": "20160712_21:18",
                                "rest": -4680,
                                "stime": "20160712_16:10",
                                "view": [{
                                    "coord": "2.5480544601440442, 49.009658378812105",
                                    "doWhat": "\u53d6\u884c\u674e",
                                    "dur": 5400,
                                    "etime": "20160712_16:10",
                                    "extra": 0,
                                    "id": "CDG",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Paris Charles de Gaulle Airport",
                                    "name": "\u5df4\u9ece\u6234\u9ad8\u4e50\u673a\u573a",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_14:40",
                                    "traffic": {
                                        "dist": 31490,
                                        "dur": 3774,
                                        "eval": 0,
                                        "id": "CDG_ht20020024_2_0_1_1_20160712",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 16
                                }, {
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u529e\u7406\u5165\u4f4f",
                                    "dur": 1800,
                                    "etime": "20160712_17:42",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_17:12",
                                    "traffic": {
                                        "dist": 3740,
                                        "dur": 1250,
                                        "eval": 0,
                                        "id": "ht20020024_v202290_2_0_1_1_20160712",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 4
                                }, {
                                    "coord": "2.321098,48.865505",
                                    "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                    "dur": 900,
                                    "etime": "20160712_18:18",
                                    "extra": 0,
                                    "id": "v202290",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Place de la Concorde",
                                    "name": "\u534f\u548c\u5e7f\u573a",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_18:03",
                                    "traffic": {
                                        "dist": 687,
                                        "dur": 549,
                                        "eval": 0,
                                        "id": "v202290_v202152_1_0_1_1_20160712",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 2
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.313585,48.863869",
                                    "doWhat": "\u968f\u4fbf\u770b\u770b",
                                    "dur": 1800,
                                    "etime": "20160712_18:57",
                                    "extra": 0,
                                    "id": "v202152",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Pont Alexandre III",
                                    "name": "\u4e9a\u5386\u5c71\u5927\u4e09\u4e16\u6865",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_18:27",
                                    "traffic": null,
                                    "type": 2
                                }, {
                                    "coord": "0,0",
                                    "doWhat": "\u9644\u8fd1\u5c31\u9910",
                                    "dur": 2700,
                                    "etime": "20160712_19:42",
                                    "extra": 3,
                                    "id": "attach",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "",
                                    "name": "\u9644\u8fd1\u5c31\u9910",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 15,
                                    "stime": "20160712_18:57",
                                    "traffic": {
                                        "dist": 3051,
                                        "dur": 910,
                                        "eval": 0,
                                        "id": "v202152_v204366_2_0_1_1_20160712",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 0
                                }, {
                                    "coord": "2.294458,48.858362",
                                    "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                    "dur": 2700,
                                    "etime": "20160712_20:43",
                                    "extra": 0,
                                    "id": "v204366",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Tour Eiffel",
                                    "name": "\u57c3\u83f2\u5c14\u94c1\u5854",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_19:58",
                                    "traffic": {
                                        "dist": 4775,
                                        "dur": 2133,
                                        "eval": 0,
                                        "id": "v204366_ht20020024_2_0_1_1_20160712",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u4f11\u606f",
                                    "dur": 45454,
                                    "etime": "20160713_09:00",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_21:18",
                                    "traffic": null,
                                    "type": 4
                                }]
                            }, {
                                "date": "20160713",
                                "etime": "20160713_20:00",
                                "rest": -2340,
                                "stime": "20160713_09:00",
                                "view": [{
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u51fa\u53d1\u6e38\u73a9",
                                    "dur": 45454,
                                    "etime": "20160713_09:00",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160712_21:18",
                                    "traffic": {
                                        "dist": 1560,
                                        "dur": 968,
                                        "eval": 0,
                                        "id": "ht20020024_v201568_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 4
                                }, {
                                    "coord": "2.331972,48.871344",
                                    "doWhat": "\u968f\u4fbf\u770b\u770b",
                                    "dur": 5700,
                                    "etime": "20160713_10:55",
                                    "extra": 0,
                                    "id": "v201568",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Op\u00e9ra de Paris",
                                    "name": "\u5df4\u9ece\u6b4c\u5267\u9662",
                                    "price": 66.1095,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 66.1095
                                    },
                                    "restType": 0,
                                    "stime": "20160713_09:20",
                                    "traffic": {
                                        "dist": 2922,
                                        "dur": 1057,
                                        "eval": 0,
                                        "id": "v201568_r0046138_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.362795,48.871250",
                                    "doWhat": "\u5c31\u9910",
                                    "dur": 3600,
                                    "etime": "20160713_12:15",
                                    "extra": 2,
                                    "id": "r0046138",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Du Pain et des Idees",
                                    "name": "Du Pain et des Id\u00e9es",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 10,
                                    "stime": "20160713_11:15",
                                    "traffic": {
                                        "dist": 5328,
                                        "dur": 1435,
                                        "eval": 0,
                                        "id": "r0046138_v201045_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 8
                                }, {
                                    "coord": "2.349901,48.852969",
                                    "doWhat": "\u6df1\u5ea6\u6e38\u89c8",
                                    "dur": 5400,
                                    "etime": "20160713_14:10",
                                    "extra": 0,
                                    "id": "v201045",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Cath\u00e9drale Notre-Dame de Paris",
                                    "name": "\u5df4\u9ece\u5723\u6bcd\u9662",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_12:40",
                                    "traffic": {
                                        "dist": 525,
                                        "dur": 393,
                                        "eval": 0,
                                        "id": "v201045_v202302_1_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 2
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.347277,48.855556",
                                    "doWhat": "\u968f\u4fbf\u770b\u770b",
                                    "dur": 5700,
                                    "etime": "20160713_15:55",
                                    "extra": 0,
                                    "id": "v202302",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "\u00cele de la Cit\u00e9",
                                    "name": "\u897f\u5cb1\u5c9b",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_14:20",
                                    "traffic": {
                                        "dist": 522,
                                        "dur": 399,
                                        "eval": 0,
                                        "id": "v202302_v201855_1_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 2
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.341515,48.857357",
                                    "doWhat": "\u968f\u4fbf\u770b\u770b",
                                    "dur": 1800,
                                    "etime": "20160713_16:35",
                                    "extra": 0,
                                    "id": "v201855",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Pont Neuf",
                                    "name": "\u5df4\u9ece\u65b0\u6865",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_16:05",
                                    "traffic": {
                                        "dist": 1469,
                                        "dur": 716,
                                        "eval": 0,
                                        "id": "v201855_v200813_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.330078,48.864254",
                                    "doWhat": "\u968f\u4fbf\u770b\u770b",
                                    "dur": 3774,
                                    "etime": "20160713_17:49",
                                    "extra": 0,
                                    "id": "v200813",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Jardin des Tuileries",
                                    "name": "\u675c\u4e50\u4e3d\u82b1\u56ed",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_16:46",
                                    "traffic": {
                                        "dist": 806,
                                        "dur": 610,
                                        "eval": 0,
                                        "id": "v200813_r0076489_1_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 2
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.328293,48.858299",
                                    "doWhat": "\u5c31\u9910",
                                    "dur": 2700,
                                    "etime": "20160713_18:45",
                                    "extra": 3,
                                    "id": "r0076489",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Eric Kayser Artisan Boulanger",
                                    "name": "Eric Kayser Artisan Boulanger",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 10,
                                    "stime": "20160713_18:00",
                                    "traffic": {
                                        "dist": 2356,
                                        "dur": 933,
                                        "eval": 0,
                                        "id": "r0076489_v202466_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 8
                                }, {
                                    "coord": "2.308266,48.869582",
                                    "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                    "dur": 3600,
                                    "etime": "20160713_20:00",
                                    "extra": 0,
                                    "id": "v202466",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Avenue des Champs-\u00c9lys\u00e9es",
                                    "name": "\u9999\u69ad\u4e3d\u820d\u5927\u8857",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_19:00",
                                    "traffic": {
                                        "dist": 1765,
                                        "dur": 372,
                                        "eval": 0,
                                        "id": "v202466_v202698_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.295033,48.873788",
                                    "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                    "dur": 1800,
                                    "etime": "20160713_20:36",
                                    "extra": 0,
                                    "id": "v202698",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Arc de Triomphe",
                                    "name": "\u51ef\u65cb\u95e8",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_20:06",
                                    "traffic": {
                                        "dist": 3565,
                                        "dur": 999,
                                        "eval": 0,
                                        "id": "v202698_ht20020024_2_0_1_1_20160713",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u4f11\u606f",
                                    "dur": 39536,
                                    "etime": "20160714_08:42",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_20:00",
                                    "traffic": null,
                                    "type": 4
                                }]
                            }, {
                                "date": "20160714",
                                "etime": "20160714_11:10",
                                "rest": -1020,
                                "stime": "20160714_08:42",
                                "view": [{
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u51fa\u53d1\u6e38\u73a9",
                                    "dur": 39536,
                                    "etime": "20160714_08:42",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160713_20:00",
                                    "traffic": {
                                        "dist": 1433,
                                        "dur": 893,
                                        "eval": 0,
                                        "id": "ht20020024_v202284_2_0_1_1_20160714",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 4
                                }, {
                                    "coord": "2.343106,48.886262",
                                    "doWhat": "\u5230\u6b64\u4e00\u6e38",
                                    "dur": 1800,
                                    "etime": "20160714_09:27",
                                    "extra": 0,
                                    "id": "v202284",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Basilique du Sacr\u00e9 C\u0153ur de Montmartre",
                                    "name": "\u5723\u5fc3\u5927\u6559\u5802",
                                    "price": 58.764,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 58.764
                                    },
                                    "restType": 0,
                                    "stime": "20160714_08:57",
                                    "traffic": {
                                        "dist": 1401,
                                        "dur": 705,
                                        "eval": 0,
                                        "id": "v202284_ht20020024_2_0_1_1_20160714",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 2
                                }, {
                                    "coord": "2.333004,48.884091",
                                    "doWhat": "\u8fd4\u56de\u53d6\u884c\u674e",
                                    "dur": 1800,
                                    "etime": "20160714_10:09",
                                    "extra": 0,
                                    "id": "ht20020024",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Hotel Le Squara",
                                    "name": "\u65af\u5361\u62c9\u9152\u5e97",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160714_09:39",
                                    "traffic": {
                                        "dist": 30865,
                                        "dur": 3655,
                                        "eval": 0,
                                        "id": "ht20020024_CDG_2_0_1_1_20160714",
                                        "price": 0,
                                        "realPrice": {
                                            "ccy": "",
                                            "var": 0
                                        },
                                        "show": "",
                                        "type": 3
                                    },
                                    "type": 4
                                }, {
                                    "coord": "2.5480544601440442, 49.009658378812105",
                                    "doWhat": "\u529e\u7406\u767b\u673a",
                                    "dur": 9000,
                                    "etime": "20160714_13:40",
                                    "extra": 0,
                                    "id": "CDG",
                                    "idle": null,
                                    "isOpen": 1,
                                    "lname": "Paris Charles de Gaulle Airport",
                                    "name": "\u5df4\u9ece\u6234\u9ad8\u4e50\u673a\u573a",
                                    "price": 0,
                                    "realPrice": {
                                        "ccy": "CNY",
                                        "val": 0
                                    },
                                    "restType": 0,
                                    "stime": "20160714_11:10",
                                    "traffic": null,
                                    "type": 16
                                }]
                            }],
                            "expire": 0,
                            "lastDetail": {
                                "dur": {
                                    "r0046138": 3600,
                                    "r0076489": 2700,
                                    "v200813": 3774,
                                    "v201045": 5400,
                                    "v201568": 5700,
                                    "v201855": 1800,
                                    "v202152": 1800,
                                    "v202284": 1800,
                                    "v202290": 900,
                                    "v202302": 5700,
                                    "v202466": 3600,
                                    "v202698": 1800,
                                    "v204366": 2700
                                },
                                "traffic": {
                                    "CDG_ht20020024_20160712": "CDG_ht20020024_2_0_1_1_20160712",
                                    "ht20020024_CDG_20160714": "ht20020024_CDG_2_0_1_1_20160714",
                                    "ht20020024_v201568_20160713": "ht20020024_v201568_2_0_1_1_20160713",
                                    "ht20020024_v202284_20160714": "ht20020024_v202284_2_0_1_1_20160714",
                                    "ht20020024_v202290_20160712": "ht20020024_v202290_2_0_1_1_20160712",
                                    "r0046138_v201045_20160713": "r0046138_v201045_2_0_1_1_20160713",
                                    "r0076489_v202466_20160713": "r0076489_v202466_2_0_1_1_20160713",
                                    "v200813_r0076489_20160713": "v200813_r0076489_1_0_1_1_20160713",
                                    "v201045_v202302_20160713": "v201045_v202302_1_0_1_1_20160713",
                                    "v201568_r0046138_20160713": "v201568_r0046138_2_0_1_1_20160713",
                                    "v201855_v200813_20160713": "v201855_v200813_2_0_1_1_20160713",
                                    "v202152_v204366_20160712": "v202152_v204366_2_0_1_1_20160712",
                                    "v202284_ht20020024_20160714": "v202284_ht20020024_2_0_1_1_20160714",
                                    "v202290_v202152_20160712": "v202290_v202152_1_0_1_1_20160712",
                                    "v202302_v201855_20160713": "v202302_v201855_1_0_1_1_20160713",
                                    "v202466_v202698_20160713": "v202466_v202698_2_0_1_1_20160713",
                                    "v202698_ht20020024_20160713": "v202698_ht20020024_2_0_1_1_20160713",
                                    "v204366_ht20020024_20160712": "v204366_ht20020024_2_0_1_1_20160712"
                                }
                            },
                            "qid": "1466821788535",
                            "summary": {
                                "closeNum": 0,
                                "cross": 0,
                                "days": 3,
                                "dist": 98260,
                                "intensity": 2,
                                "num": 11,
                                "playPer": 65,
                                "playStat": 0,
                                "price": 124,
                                "rest": -8040,
                                "tips": [],
                                "trafficPer": 32
                            }
                        },
                        "path": [path, "view"]
                    }]
                },
                "trafficTips": "",
                "utime": "1466821793",
                "summary": {
                    "adults": 2,
                    "avgCost": 6629,
                    "bacTime": "20160715_12:05",
                    "backDate": "20160715",
                    "badTime": 0,
                    "city": [{
                        "cid": "20001",
                        "day": 0,
                        "name": "\u5317\u4eac"
                    }, {
                        "cid": "10001",
                        "day": 4,
                        "name": "\u5df4\u9ece(\u542b\u5723\u4e39\u5c3c)"
                    }, {
                        "cid": "20001",
                        "day": 0,
                        "name": "\u5317\u4eac"
                    }],
                    "comfort": "\u8212\u9002",
                    "complete": 0,
                    "country": [{
                        "name": "\u6cd5\u56fd"
                    }],
                    "currency": "CNY",
                    "deptDate": "20160712",
                    "deptTime": "20160712_05:50",
                    "dur": 4,
                    "icon": "http:\/\/mioji-mbcountry.kssws.ks-cdn.com\/201.jpg",
                    "img": "http:\/\/mioji.mcity.kssws.ks-cdn.com\/10001_1.jpg@base@tag=imgScale&r=0&c=1&q=52&w=1035&h=600&rotate=0",
                    "lang": "zh_cn",
                    "planMatch": 100,
                    "playTime": 169200,
                    "preferMatch": 68.928571428571,
                    "rooms": 1,
                    "stat": 0,
                    "title": "\u6cd5\u56fd4\u65e5\u5306\u5306\u884c",
                    "totalPrice": 13257,
                    "trafficTime": 112500,
                    "trafficTimePer": 32.552083333333,
                    "transit": 4,
                    "utime": 1466821793
                }
            },
            "dbg": "",
            "error": {
                "error_id": 0,
                "error_reason": ""
            }
        }
    },
    ssv007: function(info) {
        let data = {
            imgPrefix: 'http://mioji-attr.kssws.ks-cdn.com',
            imgSuffix: '@base@tag=imgScale&r=0&c=1&q=80&w=360&h=270&rotate=0',
            list: [{
                select: 0,
                mode: 2,
                name: '巴黎圣母院',
                id: 'v204366',
                img: 'v204366_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '艾菲尔铁塔',
                id: 'v202283',
                img: 'v202283_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点1',
                id: 'v201045',
                img: 'v201045_1.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点2',
                id: 'v202466',
                img: 'v202466_2.jpg'
            }, {
                select: 0,
                mode: 2,
                name: '景点3',
                id: 'v202698',
                img: 'v202698_2.jpg'
            }]
        };

        return {
            data: data,
            error: error
        }
    }
}
