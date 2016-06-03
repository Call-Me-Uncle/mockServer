const router = require('koa-router')();

router.post('/', function * () {

  var info = this.request.body;
  var id = this.query.type;
  var cmuuid = info.cmuuid;
  var username = info.cmuid;
  if (id =='gcm001') {

  if(username == 'visitor')
    {var jwd = 'visitor'}
  else{
    var jwd = '123456'
  }
  	 this.body = {
  	    error:{
  		    error_id : 0,
  		    error_str : ''
  	          },
  	    data: {
            update: 1,
            md5 : 'abcdefg',
            place:{"10":"亚洲","20":"欧洲","30":"大洋洲","40":"非洲","50":"北美洲","60":"南美洲","101":"中国","102":"阿拉伯联合酋长国","103":"阿曼","104":"阿塞拜疆","105":"巴基斯坦","106":"巴林","107":"菲律宾","108":"哈萨克斯坦","109":"韩国","110":"柬埔寨","111":"卡塔尔","112":"科威特","113":"老挝","114":"黎巴嫩","115":"马尔代夫","116":"马来西亚","117":"蒙古","118":"孟加拉国","119":"缅甸","120":"尼泊尔","121":"日本","122":"沙特阿拉伯","123":"斯里兰卡","124":"中国台湾","125":"泰国","126":"突尼斯","127":"文莱","128":"新加坡","129":"也门","130":"伊朗","131":"以色列","132":"印度","133":"印度尼西亚","134":"约旦","135":"越南","201":"法国","202":"德国","203":"英国","204":"西班牙","205":"意大利","206":"瑞士","207":"荷兰","208":"比利时","209":"捷克","210":"奥地利","211":"匈牙利","212":"挪威","213":"瑞典","214":"芬兰","215":"丹麦","216":"葡萄牙","217":"卢森堡","218":"波兰","219":"希腊","220":"冰岛","221":"摩纳哥","222":"土耳其","223":"安道尔","224":"阿尔巴尼亚","225":"爱尔兰","226":"爱沙尼亚","227":"白俄罗斯","228":"保加利亚","229":"波黑","230":"俄罗斯","231":"格鲁吉亚","232":"根西岛","233":"黑山","234":"科索沃","235":"克罗地亚","236":"拉脱维亚","237":"立陶宛","238":"罗马尼亚","239":"马耳他","240":"马其顿共和国","241":"摩尔多瓦","242":"塞尔维亚","243":"塞浦路斯","244":"斯洛文尼亚","245":"乌克兰","246":"乌兹别克斯坦","247":"中国香港","248":"中国澳门","249":"塞班岛","301":"澳大利亚","302":"新西兰","401":"阿尔及利亚","402":"埃及","403":"埃塞俄比亚","404":"安哥拉","405":"刚果民主共和国","406":"肯尼亚","407":"马达加斯加","408":"马拉维","409":"毛里求斯","410":"摩洛哥","411":"南非","501":"美国","502":"加拿大","503":"墨西哥","504":"开曼群岛","505":"萨尔瓦多","506":"巴哈马","507":"巴拿马","508":"哥斯达黎加","509":"波多黎各","510":"特立尼达和多巴哥","511":"牙买加","601":"巴西","10001":"巴黎","10002":"罗马","10003":"威尼斯","10004":"佛罗伦萨","10005":"米兰","10006":"巴塞罗那","10007":"阿姆斯特丹","10008":"慕尼黑","10009":"伦敦","10010":"维也纳","10011":"布拉格","10012":"柏林","10013":"法兰克福","10014":"尼斯","10015":"布鲁塞尔","10016":"卢塞恩","10017":"马德里","10018":"比萨","10019":"苏黎世","10020":"日内瓦","10021":"因特拉肯","10022":"科隆","10024":"萨尔茨堡","10025":"斯德哥尔摩","10026":"爱丁堡","10027":"布达佩斯","10028":"哥本哈根","10029":"剑桥","10030":"海德堡","10031":"牛津","10032":"伯尔尼","10033":"戛纳","10034":"卢森堡","10035":"塞维利亚","10036":"洛桑","10037":"阿维尼翁","10038":"汉堡","10039":"福森","10040":"巴斯","10041":"布鲁日","10042":"鹿特丹","10043":"里斯本","10045":"海牙","10046":"马赛","10047":"赫尔辛基","10048":"里昂","10050":"约克","10051":"奥斯陆","10052":"维罗纳","10053":"杜塞尔多夫","10054":"那不勒斯","10056":"因斯布鲁克","10057":"斯图加特","10061":"伯明翰","10062":"锡耶纳","10063":"安特卫普","10065":"格拉斯哥","10068":"巴塞尔","10070":"波恩","10071":"卑尔根","10072":"利物浦","10073":"德累斯顿","10078":"纽伦堡","10079":"贝希特斯加登","10083":"巴登巴登","10086":"斯特拉斯堡","10088":"波尔图","10089":"波茨坦","10090":"根特","10091":"瓦伦西亚","10092":"华沙","10095":"波尔多","10099":"汉诺威","10100":"第戎","10101":"热那亚","10102":"博洛尼亚","10103":"不来梅","10104":"哥德堡","10105":"利兹","10106":"布里斯托尔","10107":"亚琛","10115":"马尔默","10116":"马拉加","10118":"卢加诺","10121":"诺丁汉","10122":"尼姆","10127":"莱比锡","10128":"都灵","10131":"纽卡斯尔","10132":"贝尔法斯特","10149":"里尔","10168":"蒙彼利埃","10189":"兰斯","10261":"维琴察","10283":"索尔兹伯里","10293":"波鸿","10605":"伊斯坦布尔","10621":"雅典","11095":"雷克雅未克","11097":"费拉","11103":"普罗旺斯地区艾克斯","20001":"北京","20002":"天津","20003":"上海","20004":"重庆","20005":"石家庄","20006":"太原","20007":"西安","20008":"济南","20009":"郑州","20010":"沈阳","20011":"长春","20012":"哈尔滨","20013":"南京","20014":"杭州","20015":"合肥","20016":"南昌","20017":"福州","20018":"武汉","20019":"长沙","20020":"成都","20021":"贵阳","20022":"昆明","20023":"广州","20024":"海口","20025":"兰州","20026":"西宁","20027":"呼和浩特","20028":"乌鲁木齐","20029":"拉萨","20030":"南宁","20031":"银川","20032":"唐山","20033":"大同","20034":"青岛","20035":"大连","20036":"吉林","20037":"苏州","20038":"宁波","20039":"厦门","20040":"深圳","20041":"三亚","20042":"无锡","20070":"大阪","20071":"东京","20072":"名古屋","20073":"福冈","20078":"台北","20154":"广岛","20166":"札幌","20180":"那霸","30010":"悉尼","30018":"布里斯班","30019":"黄金海岸","30020":"凯恩斯","30025":"达尔文","30027":"爱丽丝泉","30030":"阿德雷德","30032":"珀斯","30035":"布鲁姆","30039":"霍巴特","30041":"堪培拉","30042":"墨尔本","50001":"蒙特利尔","50002":"多伦多","50003":"温哥华","50004":"迈阿密","50005":"华盛顿","50006":"费城","50007":"底特律","50010":"芝加哥","50012":"纽约","50013":"波士顿","50014":"旧金山","50016":"洛杉矶","50017":"拉斯维加斯","50019":"西雅图","50021":"奥兰多","50026":"檀香山","50027":"巴尔的摩","50029":"水牛城","50030":"圣巴巴拉","50031":"圣地亚哥","50032":"盐湖城","50034":"罗德岱尔堡","50036":"休斯敦","50037":"圣荷西","50038":"丹佛","50039":"波特兰","50040":"凤凰城","50041":"渥太华","50044":"金斯顿","50045":"魁北克市","50046":"维多利亚市","50047":"卡尔加里","50048":"埃德蒙顿","50050":"哈利法克斯","50055":"黄刀镇","50056":"加斯佩","n_100":"中国大陆","n_101":"中国香港","n_102":"中国澳门","n_103":"中国台湾","n_104":"法国","n_105":"德国","n_106":"英国","n_107":"美国","n_108":"俄罗斯","n_109":"加拿大","n_110":"日本","n_111":"韩国","n_112":"澳大利亚","n_113":"新西兰","n_114":"爱尔兰","n_115":"西班牙","n_116":"意大利","n_117":"瑞士","n_118":"荷兰","n_119":"比利时","n_120":"捷克","n_121":"罗马尼亚","n_122":"奥地利","n_123":"匈牙利","n_124":"挪威","n_125":"瑞典","n_126":"芬兰","n_127":"丹麦","n_128":"葡萄牙","n_129":"波兰","n_130":"土耳其","n_131":"希腊","n_132":"冰岛","n_133":"摩纳哥","n_134":"卢森堡","n_135":"安道尔","n_136":"阿联酋","n_137":"阿富汗","n_138":"安提瓜和巴布达","n_139":"安圭拉","n_140":"阿尔巴尼亚","n_141":"亚美尼亚","n_142":"安哥拉","n_143":"南极洲","n_144":"阿根廷","n_145":"美属萨摩亚","n_146":"阿鲁巴","n_147":"奥兰群岛","n_148":"阿塞拜疆","n_149":"波黑","n_150":"巴巴多斯","n_151":"孟加拉国","n_152":"布基纳法索","n_153":"保加利亚","n_154":"巴林","n_155":"布隆迪","n_156":"贝宁","n_157":"圣巴泰勒米岛","n_158":"百慕大","n_159":"文莱","n_160":"玻利维亚","n_161":"荷兰加勒比区","n_162":"巴西","n_163":"巴哈马","n_164":"不丹","n_165":"布韦岛","n_166":"博茨瓦纳","n_167":"白俄罗斯","n_168":"伯利兹","n_169":"科科斯群岛","n_170":"刚果（金）","n_171":"中非","n_172":"刚果（布）","n_173":"科特迪瓦","n_174":"库克群岛","n_175":"智利","n_176":"喀麦隆","n_177":"哥伦比亚","n_178":"哥斯达黎加","n_179":"古巴","n_180":"佛得角","n_181":"库拉索","n_182":"圣诞岛","n_183":"塞浦路斯","n_184":"吉布提","n_185":"多米尼克","n_186":"多米尼加","n_187":"阿尔及利亚","n_188":"厄瓜多尔","n_189":"爱沙尼亚","n_190":"埃及","n_191":"西撒哈拉","n_192":"厄立特里亚","n_193":"埃塞俄比亚","n_194":"斐济群岛","n_195":"马尔维纳斯群岛（福克兰）","n_196":"密克罗尼西亚联邦","n_197":"法罗群岛","n_198":"加蓬","n_199":"格林纳达","n_200":"格鲁吉亚","n_201":"法属圭亚那","n_202":"根西岛","n_203":"加纳","n_204":"直布罗陀","n_205":"格陵兰","n_206":"冈比亚","n_207":"几内亚","n_208":"瓜德罗普","n_209":"赤道几内亚","n_210":"南乔治亚岛和南桑威奇群岛","n_211":"危地马拉","n_212":"关岛","n_213":"几内亚比绍","n_214":"圭亚那","n_215":"赫德岛和麦克唐纳群岛","n_216":"洪都拉斯","n_217":"克罗地亚","n_218":"海地","n_219":"印尼","n_220":"以色列","n_221":"马恩岛","n_222":"印度","n_223":"英属印度洋领地","n_224":"伊拉克","n_225":"伊朗","n_226":"泽西岛","n_227":"牙买加","n_228":"约旦","n_229":"肯尼亚","n_230":"吉尔吉斯斯坦","n_231":"柬埔寨","n_232":"基里巴斯","n_233":"科摩罗","n_234":"圣基茨和尼维斯","n_235":"朝鲜","n_236":"科威特","n_237":"开曼群岛","n_238":"哈萨克斯坦","n_239":"老挝","n_240":"黎巴嫩","n_241":"圣卢西亚","n_242":"列支敦士登","n_243":"斯里兰卡","n_244":"利比里亚","n_245":"莱索托","n_246":"立陶宛","n_247":"拉脱维亚","n_248":"利比亚","n_249":"摩洛哥","n_250":"摩尔多瓦","n_251":"黑山","n_252":"法属圣马丁","n_253":"马达加斯加","n_254":"马绍尔群岛","n_255":"马其顿","n_256":"马里","n_257":"缅甸","n_258":"蒙古国；蒙古","n_259":"北马里亚纳群岛","n_260":"马提尼克","n_261":"毛里塔尼亚","n_262":"蒙塞拉特岛","n_263":"马耳他","n_264":"毛里求斯","n_265":"马尔代夫","n_266":"马拉维","n_267":"墨西哥","n_268":"马来西亚","n_269":"莫桑比克","n_270":"纳米比亚","n_271":"新喀里多尼亚","n_272":"尼日尔","n_273":"诺福克岛","n_274":"尼日利亚","n_275":"尼加拉瓜","n_276":"纳戈尔诺-卡拉巴赫","n_277":"尼泊尔","n_278":"瑙鲁","n_279":"纽埃","n_280":"阿曼","n_281":"巴拿马","n_282":"秘鲁","n_283":"法属波利尼西亚","n_284":"巴布亚新几内亚","n_285":"菲律宾","n_286":"巴基斯坦","n_287":"圣皮埃尔和密克隆","n_288":"皮特凯恩群岛","n_289":"波多黎各","n_290":"巴勒斯坦","n_291":"帕劳","n_292":"巴拉圭","n_293":"卡塔尔","n_294":"留尼汪","n_295":"塞尔维亚","n_296":"卢旺达","n_297":"沙特阿拉伯","n_298":"所罗门群岛","n_299":"塞舌尔","n_300":"苏丹","n_301":"新加坡","n_302":"圣赫勒拿","n_303":"斯洛文尼亚","n_304":"斯瓦尔巴群岛和扬马延岛","n_305":"斯洛伐克","n_306":"塞拉利昂","n_307":"圣马力诺","n_308":"塞内加尔","n_309":"索马里","n_310":"苏里南","n_311":"南苏丹","n_312":"圣多美和普林西比","n_313":"萨尔瓦多","n_314":"荷属圣马丁","n_315":"叙利亚","n_316":"斯威士兰","n_317":"特克斯和凯科斯群岛","n_318":"乍得","n_319":"法属南部领地","n_320":"多哥","n_321":"泰国","n_322":"塔吉克斯坦","n_323":"托克劳","n_324":"东帝汶","n_325":"土库曼斯坦","n_326":"突尼斯","n_327":"汤加","n_328":"特立尼达和多巴哥","n_329":"图瓦卢","n_330":"坦桑尼亚","n_331":"乌克兰","n_332":"乌干达","n_333":"美国本土外小岛屿","n_334":"乌拉圭","n_335":"乌兹别克斯坦","n_336":"梵蒂冈","n_337":"圣文森特和格林纳丁斯","n_338":"委内瑞拉","n_339":"英属维尔京群岛","n_340":"美属维尔京群岛","n_341":"越南","n_342":"瓦努阿图","n_343":"瓦利斯和富图纳","n_344":"萨摩亚","n_345":"也门","n_346":"马约特","n_347":"南非","n_348":"赞比亚","n_349":"津巴布韦"},
            dest:[{"id":"20","country":[{"id":"201","city":[{"id":"10001","dur":6,"ename":"Paris","rec":"全年","tag":["浪漫之都","花城","艺术之都","文化之都","时尚之都"],"img":"10001","coord":"2.351492339147967,48.85746107178952","xr":"0.07973","yr":"0.07285","sc":"1"},{"id":"10014","dur":6,"ename":"Nice","rec":"5月－10月","tag":["蓝色海岸","富人天堂","尼斯狂欢节","尼斯鲜花节","天使湾"],"img":"10014","coord":"7.26559199999997,43.696036","xr":"0.06551","yr":"0.05345","sc":"1"},{"id":"10033","dur":6,"ename":"Cannes","rec":"5月－10月","tag":["戛纳电影节","蓝色海岸","戛纳广告节"],"img":"10033","coord":"7.017319,43.555764","xr":"0.064695","yr":"0.0551","sc":"1"},{"id":"10037","dur":6,"ename":"Avignon","rec":"5月－10月","tag":["文化遗产","阿维尼翁戏剧节","阿维尼翁桥","教皇宫"],"img":"10037","coord":"4.806122,43.955754","xr":"0.07865","yr":"0.06615","sc":"1"},{"id":"10048","dur":6,"ename":"Lyon","rec":"5月－10月、12月","tag":["美食之都","里昂灯节","文化遗产","壁画之都","欧洲丝绸之都"],"img":"10048","coord":"4.835658999999964,45.764043","xr":"0.076935","yr":"0.0775","sc":"1"},{"id":"10046","dur":6,"ename":"Marseille","rec":"5月－10月","tag":["优良海港","普罗旺斯","基督山伯爵","马赛曲","马赛鱼汤"],"img":"10046","coord":"5.370337899475089,43.296825577710045","xr":"0.07841","yr":"0.0404","sc":"1"},{"id":"10086","dur":6,"ename":"Strasbourg","rec":"6月－12月","tag":["小法兰西","德法交界","圣诞集市","马赛曲"],"img":"10086","coord":"7.747924915344242,48.583318339072825","xr":"0.065205","yr":"0.07035","sc":"1"},{"id":"10095","dur":6,"ename":"Bordeaux","rec":"5月－10月","tag":["世界葡萄酒中心","吉伦特派","小巴黎","孟德斯鸠"],"img":"10095","coord":"-0.5792658306884277,44.837728136924895","xr":"0.07868","yr":"0.067","sc":"1"},{"id":"10100","dur":6,"ename":"Dijon","rec":"5月－10月","tag":["\b美食之都","第戎芥末","勃艮第葡萄酒","艺术城","蜗牛"],"img":"10100","coord":"5.042671,47.324861","xr":"0.07002","yr":"0.05595","sc":"1"},{"id":"11103","dur":6,"ename":"Aix-en-Provence","rec":"6月－8月","tag":["普罗旺斯","薰衣草","水城","大学城","塞尚"],"img":"11103","coord":"5.447317,43.531687","xr":"0.07654","yr":"0.0684","sc":"1"},{"id":"10122","dur":6,"ename":"Nimes","rec":"5月－10月","tag":["泉水精灵","艺术之都","加尔桥","牛仔布"],"img":"10122","coord":"4.360053999999991,43.836699","xr":"0.07491","yr":"0.0639","sc":"1"},{"id":"10149","dur":6,"ename":"Lille","rec":"5月－10月","tag":["北方门户","欧洲文化城市","北方首都","欧洲建筑活化石","戴高乐"],"img":"10149","coord":"3.056919,50.63226","xr":"0.07769","yr":"0.0653","sc":"1"},{"id":"10168","dur":6,"ename":"Montpellier","rec":"4月－8月","tag":["阳光之城","新兴工业城市","酒类贸易中心"],"img":"10168","coord":"3.877117,43.613832","xr":"0.07163","yr":"0.068","sc":"1"},{"id":"10189","dur":6,"ename":"Reims","rec":"5月－10月","tag":["王者之城","加冕之都","圣城","香槟","兰斯圣母院"],"img":"10189","coord":"4.031797,49.259627","xr":"0.07252","yr":"0.076","sc":"1"}],"visa":{"dc":"较难","time":"2个工作日"},"ename":"France","tag":["浪漫","法式大餐","时尚文艺","塞纳河","博物馆"],"img":"201"},{"id":"202","city":[{"id":"10008","dur":6,"ename":"Munich","rec":"4月－10月","tag":["啤酒之都","宝马故乡","足球","烤猪肘","香肠"],"img":"10008","coord":"11.581980599999952,48.1351253","xr":"0.0718","yr":"0.07035","sc":"1"},{"id":"10013","dur":6,"ename":"Frankfurt","rec":"全年","tag":["金融城","德国曼哈顿","购物","交通中心"],"img":"10013","coord":"8.682126700000026,50.1109221","xr":"0.07905","yr":"0.0564","sc":"1"},{"id":"10012","dur":6,"ename":"Berlin","rec":"全年","tag":["柏林熊","柏林墙","勃兰登堡门","博物馆","音乐"],"img":"10012","coord":"13.404954,52.5200066","xr":"0.0756","yr":"0.07215","sc":"1"},{"id":"10022","dur":6,"ename":"Cologne","rec":"5月－10月","tag":["科隆大教堂","古龙水"],"img":"10022","coord":"6.960149853967323,50.937368736629246","xr":"0.068865","yr":"0.0623","sc":"1"},{"id":"10039","dur":6,"ename":"Fussen","rec":"5月－10月","tag":["新天鹅堡","小提琴之乡","浪漫之路","阿尔卑斯"],"img":"10039","coord":"10.69152269999995,47.5720779","xr":"0.0797","yr":"0.0508","sc":"1"},{"id":"10030","dur":6,"ename":"Heidelberg","rec":"5月－10月","tag":["歌德之心","海德堡城堡","海德堡大学"],"img":"10030","coord":"8.672433500000011,49.3987524","xr":"0.06518","yr":"0.0697","sc":"1"},{"id":"10038","dur":6,"ename":"Hamburg","rec":"5月－10月","tag":["汉堡港","世界桥城"],"img":"10038","coord":"9.993553053967275,53.55070215442479","xr":"0.072915","yr":"0.07275","sc":"1"},{"id":"10057","dur":6,"ename":"Stuttgart","rec":"5月－10月","tag":["奔驰故乡","王宫","购物"],"img":"10057","coord":"9.181758800000011,48.7754181","xr":"0.062845","yr":"0.06655","sc":"1"},{"id":"10053","dur":6,"ename":"Dusseldorf","rec":"5月－10月","tag":["莱茵河畔","文化名城","海涅"],"img":"10053","coord":"6.773455600000034,51.2277411","xr":"0.07263","yr":"0.06","sc":"1"},{"id":"10073","dur":6,"ename":"Dresden","rec":"5月－10月","tag":["易北河上的佛罗伦萨"],"img":"10073","coord":"13.736236,51.059092","xr":"0.06425","yr":"0.05105","sc":"1"},{"id":"10070","dur":6,"ename":"Bonn","rec":"4月－10月","tag":["樱花大道"],"img":"10070","coord":"7.098378461377024,50.73751148010107","xr":"0.0703","yr":"0.061","sc":"1"},{"id":"10078","dur":6,"ename":"Nuremberg","rec":"5月－10月","tag":["纽伦堡审判","玩具之都","西门子"],"img":"10078","coord":"11.076707084655709,49.45225318827854","xr":"0.0732","yr":"0.0607","sc":"1"},{"id":"10079","dur":6,"ename":"Berchtesgaden","rec":"全年","tag":["国王湖","鹰巢","阿尔卑斯山"],"img":"10079","coord":"13.000074199999972,47.6301796","xr":"0.07585","yr":"0.0741","sc":"1"},{"id":"10083","dur":6,"ename":"Baden-Baden","rec":"5月－10月","tag":["温泉","赌场","黑森林"],"img":"10083","coord":"8.228661,48.766995","xr":"0.066535","yr":"0.06315","sc":"1"},{"id":"10089","dur":6,"ename":"Potsdam","rec":"5月－10月","tag":["无忧宫"],"img":"10089","coord":"13.064777,52.394039","xr":"0.05925","yr":"0.0373","sc":"1"},{"id":"10099","dur":6,"ename":"Hannover","rec":"5月－10月","tag":["展览中心"],"img":"10099","coord":"9.732010400000036,52.3758916","xr":"0.07851","yr":"0.06925","sc":"1"},{"id":"10103","dur":6,"ename":"Bremen","rec":"5月－10月","tag":["科学城","港口"],"img":"10103","coord":"8.801693699999987,53.0792962","xr":"0.05891","yr":"0.0361","sc":"1"},{"id":"10107","dur":6,"ename":"Aachen","rec":"5月－10月","tag":["温泉","古城"],"img":"10107","coord":"6.083886799999959,50.7753455","xr":"0.078915","yr":"0.0712","sc":"1"},{"id":"10127","dur":6,"ename":"Leipzig","rec":"5月－10月","tag":["博览会之母","音乐","小巴黎","古城"],"img":"10127","coord":"12.373074699999961,51.3396955","xr":"0.07585","yr":"0.0619","sc":"1"},{"id":"10293","dur":6,"ename":"Bochum","rec":"5月－10月","tag":["工业时代"],"img":"10293","coord":"7.217304,51.484269","xr":"0.07303","yr":"0.0526","sc":"1"}],"visa":{"dc":"较难","time":"2－3个工作日"},"ename":"Germany","tag":["新天鹅堡","古典","汽车","猪肘","啤酒"],"img":"202"},{"id":"203","city":[{"id":"10009","dur":6,"ename":"London","rec":"\b全年","tag":["\b雾都","\b金融中心","\b艺术之城","\b音乐剧","足球"],"img":"10009","coord":"-0.12759207730709932,51.50776832728631","xr":"0.0794597","yr":"0.07935","sc":"1"},{"id":"10026","dur":6,"ename":"Edinburgh","rec":"\b全年","tag":["北方雅典"],"img":"10026","coord":"-3.188266999999996,55.953252","xr":"0.077595","yr":"0.0726","sc":"1"},{"id":"10029","dur":6,"ename":"Cambridge","rec":"4月－10月","tag":["康桥","剑桥大学","\b徐志摩"],"img":"10029","coord":"0.12181699999996454,52.205337","xr":"0.0787427","yr":"0.075","sc":"1"},{"id":"10031","dur":6,"ename":"Oxford","rec":"4月－10月","tag":["\b牛津大学","购物"],"img":"10031","coord":"-1.2577263000000585,51.7520209","xr":"0.079385","yr":"0.0676","sc":"1"},{"id":"10040","dur":6,"ename":"Bath","rec":"4月－10月","tag":["\b罗马浴场"],"img":"10040","coord":"-2.360186,51.377192","xr":"0.07092","yr":"0.0709","sc":"1"},{"id":"10050","dur":6,"ename":"York","rec":"\b全年","tag":["诺曼教堂","贝蒂茶屋","对角巷"],"img":"10050","coord":"-1.086987,53.962145","xr":"0.07892","yr":"0.07315","sc":"1"},{"id":"10061","dur":6,"ename":"Birmingham","rec":"\b全年","tag":["购物","夜生活"],"img":"10061","coord":"-1.890701407409665,52.486347533397364","xr":"0.078115","yr":"0.0616","sc":"1"},{"id":"10065","dur":6,"ename":"Glasgow","rec":"\b全年","tag":["购物之都"],"img":"10065","coord":"-4.251805999999988,55.864237","xr":"0.077925","yr":"0.07705","sc":"1"},{"id":"10072","dur":6,"ename":"Liverpool","rec":"\b全年","tag":["披头士","\b安菲尔德","\b港口"],"img":"10072","coord":"-2.9916155153442787,53.40824348899981","xr":"0.07865","yr":"0.07055","sc":"1"},{"id":"10105","dur":6,"ename":"Leeds","rec":"\b全年","tag":["购物"],"img":"10105","coord":"-1.5485670000000482,53.801279","xr":"0.07715","yr":"0.0693","sc":"1"},{"id":"10106","dur":6,"ename":"Bristol","rec":"\b全年","tag":["热气球节"],"img":"10106","coord":"-2.5879099999999653,51.454513","xr":"0.069485","yr":"0.06825","sc":"1"},{"id":"10131","dur":6,"ename":"Newcastle","rec":"\b全年","tag":["\b北方天使"],"img":"10131","coord":"-1.6146900952148826,54.9770698111376","xr":"0.077825","yr":"0.07","sc":"1"},{"id":"10132","dur":6,"ename":"Belfast","rec":"\b全年","tag":["北爱尔兰首府"],"img":"10132","coord":"-5.930119999999988,54.597285","xr":"0.065835","yr":"0.0692","sc":"1"},{"id":"10121","dur":6,"ename":"Nottingham","rec":"\b全年","tag":["罗宾汉"],"img":"10121","coord":"-1.1581085999999914,52.9547832","xr":"0.079175","yr":"0.07575","sc":"1"},{"id":"10283","dur":6,"ename":"Salisbury","rec":"4月－10月","tag":["\b教堂","巨石阵","罗马浴场"],"img":"10283","coord":"-1.794747,51.071174","xr":"0.070245","yr":"0.07075","sc":"1"}],"visa":{"dc":"困难","time":"15个工作日"},"ename":"UK","tag":["炸鱼和薯条","歌剧魅影","巨石阵","足球"],"img":"203"},{"id":"205","city":[{"id":"10002","dur":6,"ename":"Rome","rec":"全年","tag":["永恒之城","七丘之城","天主教中心","文化遗产","罗马德比"],"img":"10002","coord":"12.481919085180607,41.893555215391714","xr":"0.07995","yr":"0.0703","sc":"1"},{"id":"10003","dur":6,"ename":"Venice","rec":"2月、5月－10月","tag":["水城","威尼斯电影节","威尼斯狂欢节","贡多拉","百岛城"],"img":"10003","coord":"12.31551509999997,45.4408474","xr":"0.07915","yr":"0.0789","sc":"1"},{"id":"10004","dur":6,"ename":"Florence","rec":"全年","tag":["文艺复兴之都","托斯卡纳","欧洲文化中心","米开朗基罗","美第奇家族"],"img":"10004","coord":"11.248000600000069,43.7710332","xr":"0.0779","yr":"0.0737","sc":"1"},{"id":"10005","dur":6,"ename":"Milan","rec":"5月－10月","tag":["时尚之都","金融中心","会展中心","足球之城","米兰大教堂"],"img":"10005","coord":"9.186515999999983,45.4654542","xr":"0.079095","yr":"0.06795","sc":"1"},{"id":"10018","dur":6,"ename":"Pisa","rec":"5月－10月","tag":["比萨斜塔","托斯卡纳","大学城"],"img":"10018","coord":"10.401688799999988,43.7228386","xr":"0.07295","yr":"0.07315","sc":"1"},{"id":"10054","dur":6,"ename":"Naples","rec":"5月－10月","tag":["世界遗产城市","披萨发源地","维苏威火山","庞贝古城","地中海"],"img":"10054","coord":"14.268124400000033,40.8517746","xr":"0.07755","yr":"0.06195","sc":"1"},{"id":"10052","dur":6,"ename":"Verona","rec":"5月－10月","tag":["爱情之城","罗密欧与朱丽叶","维罗纳歌剧节","世界遗产城市","优雅之城"],"img":"10052","coord":"10.991657799999984,45.4383563","xr":"0.07915","yr":"0.06985","sc":"1"},{"id":"10062","dur":6,"ename":"Siena","rec":"5月－10月","tag":["小罗马","赛马节","托斯卡纳","文艺复兴"],"img":"10062","coord":"11.330654,43.321681","xr":"0.07965","yr":"0.07495","sc":"1"},{"id":"10102","dur":6,"ename":"Bologna","rec":"5月－10月","tag":["大学城","美食之都","姐妹塔楼","红色之都","音乐之都"],"img":"10102","coord":"11.342616300000032,44.494887","xr":"0.07945","yr":"0.0699","sc":"1"},{"id":"10101","dur":6,"ename":"Genova","rec":"5月－10月","tag":["海港城市","足球","哥伦布","帕格尼尼","美食之都"],"img":"10101","coord":"8.946255999999948,44.4056499","xr":"0.079615","yr":"0.0452","sc":"1"},{"id":"10128","dur":6,"ename":"Turin","rec":"5月－10月","tag":["甜蜜之都","工业之都","菲亚特","巧克力之都","都灵裹尸布"],"img":"10128","coord":"7.685676000000058,45.070982","xr":"0.07575","yr":"0.07635","sc":"1"},{"id":"10261","dur":6,"ename":"Vicenza","rec":"5月－10月","tag":["帕拉第奥","圆厅别墅"],"img":"10261","coord":"11.535934,45.551083","xr":"0.0781","yr":"0.0694","sc":"1"}],"visa":{"dc":"较难","time":"2个工作日"},"ename":"Italy","tag":["历史遗迹","文艺复兴","艺术","美食","时尚"],"img":"205"},{"id":"204","city":[{"id":"10006","dur":6,"ename":"Barcelona","rec":"5月－6月 9月－10月","tag":["高迪之都","先锋艺术","加泰罗尼亚","哥特","工业之都"],"img":"10006","coord":"2.1734034999999494,41.3850639","xr":"0.075435","yr":"0.0557","sc":"1"},{"id":"10017","dur":6,"ename":"Madrid","rec":"3月－5月 9月－11月","tag":["足球","时尚之都","艺术"],"img":"10017","coord":"-3.7037901999999576,40.4167754","xr":"0.07566","yr":"0.07815","sc":"1"},{"id":"10035","dur":6,"ename":"Seville","rec":"3月－5月","tag":["弗拉明戈","圣周","Tapas"],"img":"10035","coord":"-5.982801968786589,37.38830068767074","xr":"0.067485","yr":"0.04765","sc":"1"},{"id":"10091","dur":6,"ename":"Valencia","rec":"4月－5月","tag":["海鲜饭","法雅节"],"img":"10091","coord":"-0.37611643862305755,39.470006886530214","xr":"0.0529475","yr":"0.0757","sc":"1"},{"id":"10116","dur":6,"ename":"Malaga","rec":"5月－8月","tag":["毕加索出生地","文艺之城"],"img":"10116","coord":"-4.421265500000004,36.721261","xr":"0.079475","yr":"0.0582","sc":"1"}],"visa":{"dc":"较难","time":"5－15个工作日"},"ename":"Spain","tag":["艺术气息","斗牛","弗拉明戈","高迪","毕加索和达利"],"img":"204"},{"id":"206","city":[{"id":"10016","dur":6,"ename":"Lucerne","rec":"全年","tag":["廊桥","濒死的狮子","中世纪古城"],"img":"10016","coord":"8.308899,47.052932","xr":"0.0737","yr":"0.0785","sc":"1"},{"id":"10019","dur":6,"ename":"Zurich","rec":"4月－9月","tag":["教堂","金融之都","昂贵","巧克力"],"img":"10019","coord":"8.539311246032753,47.36891139016294","xr":"0.077995","yr":"0.07675","sc":"1"},{"id":"10021","dur":6,"ename":"Interlaken","rec":"全年","tag":["两湖之城","少女峰","滑翔","滑雪"],"img":"10021","coord":"7.870065484130919,46.686912673829795","xr":"0.078475","yr":"0.0782","sc":"1"},{"id":"10020","dur":6,"ename":"Geneva","rec":"4月－9月","tag":["日内瓦湖","联合国","钟表"],"img":"10020","coord":"6.1422961,46.1983922","xr":"0.07323","yr":"0.0541","sc":"1"},{"id":"10032","dur":6,"ename":"Bern","rec":"4月－9月","tag":["熊城","老城","瑞士首都"],"img":"10032","coord":"7.445244,46.952371","xr":"0.074795","yr":"0.0745","sc":"1"},{"id":"10036","dur":6,"ename":"Lausanne","rec":"4月－9月","tag":["国际奥委会总部","会议中心","古城"],"img":"10036","coord":"6.633629,46.524855","xr":"0.07669","yr":"0.06815","sc":"1"},{"id":"10068","dur":6,"ename":"Basel","rec":"4月－9月","tag":["三国交界"],"img":"10068","coord":"7.598752509570318,47.569467583105435","xr":"0.07791","yr":"0.06015","sc":"1"},{"id":"10118","dur":6,"ename":"Lugano","rec":"全年","tag":["湖光山色","阳光","意大利风情"],"img":"10118","coord":"8.952312099999972,46.0065117","xr":"0.078595","yr":"0.0624","sc":"1"}],"visa":{"dc":"较难","time":"2个工作日"},"ename":"Switzerland","tag":["阿尔卑斯山","户外运动","巧克力","手表","军刀"],"img":"206"},{"id":"210","city":[{"id":"10010","dur":6,"ename":"Vienna","rec":"5月－10月","tag":["音乐之都","炸猪排 "," 多瑙河  ","浪漫  ","茜茜公主"],"img":"10010","coord":"16.37381890000006,48.2081743","xr":"0.05425","yr":"0.05375","sc":"1"},{"id":"10024","dur":6,"ename":"Salzburg","rec":"4月－10月","tag":["盐城  ","城堡   ","莫扎特故乡 ","音乐之声        "],"img":"10024","coord":"13.055010000000038,47.80949","xr":"0.07545","yr":"0.0597","sc":"1"},{"id":"10056","dur":6,"ename":"Innsbruck","rec":"全年  ","tag":["施华洛世奇","阿尔卑斯山  ","滑雪    "],"img":"10056","coord":"11.404102400000056,47.2692124","xr":"0.07885","yr":"0.06655","sc":"1"}],"visa":{"dc":"较难","time":"5－11个工作日"},"ename":"Austria","tag":["金色大厅","莫扎特","卡夫卡","施华洛世奇","蓝色多瑙河"],"img":"210"},{"id":"207","city":[{"id":"10007","dur":6,"ename":"Amsterdam","rec":"3月－9月","tag":["\b郁金香","\b北方威尼斯","\b\b钻石之都"],"img":"10007","coord":"4.895167899999933,52.3702157","xr":"0.07691","yr":"0.06515","sc":"1"},{"id":"10042","dur":6,"ename":"Rotterdam","rec":"3月－9月","tag":["港口之城","\b风车"],"img":"10042","coord":"4.481776,51.924216","xr":"0.078785","yr":"0.0664","sc":"1"},{"id":"10045","dur":6,"ename":"The Hague","rec":"3月－9月","tag":["\b\b艺术之都","\b"],"img":"10045","coord":"4.301094,52.075497","xr":"0.04818","yr":"0.03215","sc":"1"}],"visa":{"dc":"较难","time":"2个工作日"},"ename":"Netherlands","tag":["郁金香","橙色军团","自行车","现代建筑","梵高"],"img":"207"},{"id":"208","city":[{"id":"10015","dur":6,"ename":"Brussels","rec":"全年","tag":["撒尿小童","欧盟总部","丁丁历险记","漫画之都","巧克力"],"img":"10015","coord":"4.351710300000036,50.84860551814943","xr":"0.076235","yr":"0.0761","sc":"1"},{"id":"10041","dur":6,"ename":"Brugge","rec":"全年","tag":["小威尼斯"],"img":"10041","coord":"3.225753,51.218927","xr":"0.07175","yr":"0.06655","sc":"1"},{"id":"10063","dur":6,"ename":"Antwerp","rec":"全年","tag":["钻石之都","港口之城","世界书都","文化古城"],"img":"10063","coord":"4.40246430000002,51.2194475","xr":"0.06261","yr":"0.05695","sc":"1"},{"id":"10090","dur":6,"ename":"Ghent","rec":"全年","tag":["足球"],"img":"10090","coord":"3.718765,51.06427","xr":"0.07414","yr":"0.06255","sc":"1"}],"visa":{"dc":"较难","time":"15个工作日"},"ename":"Belgium","tag":["巧克力","红魔","丁丁历险记","撒尿小童","滑铁卢"],"img":"208"},{"id":"209","city":[{"id":"10011","dur":6,"ename":"Prague","rec":"5月－10月","tag":["东欧童话","百塔之城","城堡","木偶","音乐"],"img":"10011","coord":"14.43780049999998,50.0755381","xr":"0.0767","yr":"0.07245","sc":"1"}],"visa":{"dc":"较难","time":"5个工作日"},"ename":"Czech","tag":["米兰昆德拉","波西米亚","啤酒","木偶","城堡"],"img":"209"},{"id":"213","city":[{"id":"10025","dur":6,"ename":"Stockholm","rec":"6月－9月","tag":["北方威尼斯","肉丸","诺贝尔奖","西斯塔卫星城"],"img":"10025","coord":"18.06426626983648,59.32903945727452","xr":"0.0799","yr":"0.0799","sc":"1"},{"id":"10104","dur":6,"ename":"Goteborg","rec":"6月－9月","tag":["小伦敦","北欧工业中心","沃尔沃","\b海港城市","\b肉丸"],"img":"10104","coord":"11.974559999999997,57.70887","xr":"0.073","yr":"0.0576","sc":"1"},{"id":"10115","dur":6,"ename":"Malmo","rec":"6月－9月","tag":["厄勒海峡","贸易中心","旋转大厦","肉丸"],"img":"10115","coord":"13.003822000000014,55.604981","xr":"0.05235","yr":"0.0466","sc":"1"}],"visa":{"dc":"较难","time":"15个工作日"},"ename":"Sweden","tag":["自然户外","肉丸","诺贝尔颁奖礼","极光"],"img":"213"},{"id":"212","city":[{"id":"10051","dur":6,"ename":"Oslo","rec":"6月－9月","tag":["上帝的山谷","维京海盗","维格兰雕塑","三文鱼"],"img":"10051","coord":"10.752245399999993,59.9138688","xr":"0.0743","yr":"0.06945","sc":"1"},{"id":"10071","dur":6,"ename":"Bergen","rec":"6月－9月","tag":["港湾之城","鱼市","文化城市","木屋","峡湾"],"img":"10071","coord":"5.32205440000007,60.3912628","xr":"0.0431","yr":"0.07225","sc":"1"}],"visa":{"dc":"较难","time":"7－10个工作日"},"ename":"Norway","tag":["极光","峡湾","三文鱼","\b\b恶魔之舌","北角"],"img":"212"},{"id":"216","city":[{"id":"10043","dur":6,"ename":"Lisbon","rec":"3月－5月 9月－11月","tag":["七丘之城","最美港口","工业城市"],"img":"10043","coord":"-9.139565056005836,38.72114758644618","xr":"0.06901","yr":"0.06695","sc":"1"},{"id":"10088","dur":6,"ename":"Porto","rec":"5月－9月","tag":["酒庄","波旁酒"],"img":"10088","coord":"-8.623925399999962,41.1566892","xr":"0.05309","yr":"0.0799","sc":"1"}],"visa":{"dc":"较难","time":"6个工作日"},"ename":"Portugal","tag":["大陆尽头","蛋挞","伊比利亚半岛"],"img":"216"},{"id":"215","city":[{"id":"10028","dur":6,"ename":"Copenhagen","rec":"6月－10月","tag":["童话王国","自行车王国","猪排","能源环保"," 小美人鱼"],"img":"10028","coord":"12.568337100000008,55.6760968","xr":"0.04885","yr":"0.05545","sc":"1"}],"visa":{"dc":"较难","time":"5－11个工作日"},"ename":"Denmark","tag":["安徒生童话","小美人鱼","田园风光","猪排","环保"],"img":"215"},{"id":"219","city":[{"id":"10621","dur":6,"ename":"Athens","rec":"全年","tag":["希腊神话","欧洲文明摇篮","文化之城","历史之城","现代奥运"],"img":"10621","coord":"23.729585,37.984478","xr":"0.0712","yr":"0.06425","sc":"1"},{"id":"11097","dur":6,"ename":"Fira","rec":"4月－10月","tag":["蓝色爱情海","蜜月圣地"],"img":"11097","coord":"25.431699,36.420190","xr":"0.02255","yr":"0.0398","sc":"1"}],"visa":{"dc":"较难","time":"5个工作日"},"ename":"Greece","tag":["神话","爱情海","卫城","奥运会"],"img":"219"},{"id":"222","city":[{"id":"10605","dur":6,"ename":"İstanbul","rec":"4月－5\b月，9月－10月","tag":["清真寺","土耳其烤肉","亚欧分界线","千年古都"],"img":"10605","coord":"28.979221,41.010503","xr":"0.07925","yr":"0.0603","sc":"1"}],"visa":{"dc":"容易","time":"1个工作日"},"ename":"Turkey","tag":["土耳其烤肉","热气球","棉花堡","清真寺","横跨亚欧"],"img":"222"},{"id":"211","city":[{"id":"10027","dur":6,"ename":"Budapest","rec":"4月－10月","tag":["多瑙河明珠","双子城市","城堡"],"img":"10027","coord":"19.03924794708246,47.49788300565263","xr":"0.06955","yr":"0.05855","sc":"1"}],"visa":{"dc":"较难","time":"3－4个工作日"},"ename":"Hungary","tag":["东欧","游牧文化","英雄主义"],"img":"211"},{"id":"214","city":[{"id":"10047","dur":6,"ename":"Helsinki","rec":"6月－9月 ","tag":["北方洁白城市","波罗的海","\b驯鹿","\b芬兰浴"],"img":"10047","coord":"24.941024800000037,60.1733244","xr":"0.05845","yr":"0.0394","sc":"1"}],"visa":{"dc":"较难","time":"4－7个工作日"},"ename":"Finland","tag":["极光","圣诞老人","驯鹿","\b芬兰浴","诺基亚"],"img":"214"},{"id":"218","city":[{"id":"10092","dur":6,"ename":"Warsaw","rec":"5月－10月","tag":["英雄城","肖邦故乡","涅槃古城","绿都"],"img":"10092","coord":"21.012228700000037,52.2296756","xr":"0.0752","yr":"0.04205","sc":"1"}],"visa":{"dc":"较难","time":"15个工作日"},"ename":"Poland","tag":["二战","奥斯维辛","肖邦","居里夫人"],"img":"218"},{"id":"220","city":[{"id":"11095","dur":6,"ename":"Reykjavik","rec":"1月－3月 6月－9月","tag":["冰的陆地","地热温泉","火山","黄金圈","极光之城"],"img":"11095","coord":"-21.933121,64.132442","xr":"0.041","yr":"0.03615","sc":"1"}],"visa":{"dc":"较难","time":"5－10个工作日"},"ename":"Iceland","tag":["蓝湖温泉","极光","火山","冰川","能源"],"img":"220"},{"id":"217","city":[{"id":"10034","dur":6,"ename":"Luxembourg City","rec":"4月10月","tag":["袖珍国度","大公国"],"img":"10034","coord":"6.131762938623069,49.61162099999999","xr":"0.077965","yr":"0.0764","sc":"1"}],"visa":{"dc":"较难","time":"10个工作日"},"ename":"Luxembourg","tag":["袖珍国度","欧洲十字路口"],"img":"217"}]},{"id":"50","country":[{"id":"501","city":[{"id":"50016","dur":6,"ename":"Los Angeles","rec":"全年","tag":["娱乐之都","好莱坞","天使之城"],"img":"50016","coord":"-118.235951,34.066585","xr":"0.077","yr":"0.0718","sc":"1"},{"id":"50012","dur":6,"ename":"New York","rec":"全年","tag":["大苹果","世界之都","高谭市","不夜城"],"img":"50012","coord":"-73.955648,40.790187","xr":"0.07955","yr":"0.07035","sc":"1"},{"id":"50014","dur":6,"ename":"San Francisco","rec":"4月－10月","tag":["金门大桥","雾城","湾边之城"],"img":"50014","coord":"-122.427129,37.768624","xr":"0.054","yr":"0.07055","sc":"1"},{"id":"50017","dur":6,"ename":"Las Vegas","rec":"全年","tag":["赌城","不夜城","罪恶之城"],"img":"50017","coord":"-115.145474,36.175732","xr":"0.0665","yr":"0.0581","sc":"1"},{"id":"50005","dur":6,"ename":"Washington","rec":"5月－9月","tag":["联邦城","雪城"],"img":"50005","coord":"-77.045122,38.900284","xr":"0.07265","yr":"0.06535","sc":"1"},{"id":"50013","dur":6,"ename":"Boston","rec":"5月－9月","tag":["豆豆城","清教徒","宇宙中心","哈佛"],"img":"50013","coord":"-71.077070,42.350809","xr":"0.0626","yr":"0.0668","sc":"1"},{"id":"50010","dur":6,"ename":"Chicago","rec":"5月－9月","tag":["风城","迈克·乔丹之城","摩天大楼","芝城"],"img":"50010","coord":"-87.630532,41.876949","xr":"0.0617","yr":"0.0753","sc":"1"},{"id":"50006","dur":6,"ename":"Philadelphia","rec":"NULL","tag":["自由钟","美国历史","特拉华河","国家独立公园"],"img":"50006","coord":"-75.174338,39.949241","xr":"0","yr":"0","sc":"1"},{"id":"50031","dur":6,"ename":"San Diego","rec":"NULL","tag":["海洋世界","海军港","好气候","动物园","南加州"],"img":"50031","coord":"-117.141855,32.731605","xr":"0","yr":"0","sc":"1"},{"id":"50019","dur":6,"ename":"Seattle","rec":"5月－9月","tag":["星巴克故乡","雨城","波音工厂","微软公司"],"img":"50019","coord":"-122.323546,47.611839","xr":"0.075","yr":"0.0738","sc":"1"},{"id":"50004","dur":6,"ename":"Miami","rec":"全年","tag":["阳光之城","南海滩","拉美风情"],"img":"50004","coord":"-80.202584,25.761841","xr":"0.0365","yr":"0.06445","sc":"1"},{"id":"50030","dur":6,"ename":"Santa Barbara","rec":"NULL","tag":["度假胜地","富人区","太平洋沿岸"],"img":"50030","coord":"-119.700179,34.420229","xr":"0","yr":"0","sc":"1"},{"id":"50032","dur":6,"ename":"Salt Lake City","rec":"NULL","tag":["大盐湖","雪山","摩门教","国家公园"],"img":"50032","coord":"-111.875166,40.774138","xr":"0","yr":"0","sc":"1"},{"id":"50029","dur":6,"ename":"Buffalo","rec":"NULL","tag":["大瀑布","辣鸡翅","伊利湖"],"img":"50029","coord":"-78.873585,42.886303","xr":"0","yr":"0","sc":"1"},{"id":"50026","dur":6,"ename":"Honolulu","rec":"NULL","tag":["夏威夷","珍珠港","威基基海滩","热带沙滩"],"img":"50026","coord":"-157.857850,21.304320","xr":"0","yr":"0","sc":"1"},{"id":"50027","dur":6,"ename":"Baltimore","rec":"NULL","tag":["海鲜","约翰霍普斯","早期美国历史","内港","音乐和艺术"],"img":"50027","coord":"-76.619113,39.293342","xr":"0","yr":"0","sc":"1"},{"id":"50036","dur":6,"ename":"Houston","rec":"NULL","tag":["火箭队","太空中心","美国南方"],"img":"50036","coord":"-95.361466,29.764143","xr":"0","yr":"0","sc":"1"},{"id":"50007","dur":6,"ename":"Detroit","rec":"5月－9月","tag":["汽车城","破产城市"],"img":"50007","coord":"-83.047363,42.345987","xr":"0.05925","yr":"0.06475","sc":"1"},{"id":"50038","dur":6,"ename":"Denver","rec":"NULL","tag":["麋鹿","里高城","落基山","农业","滑雪"],"img":"50038","coord":"-104.985574,39.744015","xr":"0","yr":"0","sc":"1"},{"id":"50039","dur":6,"ename":"Portland","rec":"5月－9月","tag":["免税天堂","玫瑰之城"],"img":"50039","coord":"-122.676051,45.521393","xr":"0","yr":"0","sc":"1"},{"id":"50040","dur":6,"ename":"Phoenix","rec":"NULL","tag":["沙漠","仙人掌","暴晒"],"img":"50040","coord":"-112.063253,33.456024","xr":"0","yr":"0","sc":"1"},{"id":"50034","dur":6,"ename":"Fort Lauderdale","rec":"NULL","tag":["美国威尼斯","游轮","海港"],"img":"50034","coord":"-80.137957,26.127628","xr":"0","yr":"0","sc":"1"},{"id":"50037","dur":6,"ename":"San Jose","rec":"NULL","tag":["硅谷","湾区","苹果公司","斯坦福"],"img":"50037","coord":"-121.879896,37.345341","xr":"0","yr":"0","sc":"1"},{"id":"50021","dur":6,"ename":"Orlando","rec":"全年","tag":["主题公园","迪斯尼"],"img":"50021","coord":"-81.382140,28.541657","xr":"0.06185","yr":"0.0715","sc":"1"}],"visa":{"dc":"困难","time":"3个工作日"},"ename":"United States","tag":["好莱坞","民主多元","山姆大叔","都市与自然"],"img":"501"},{"id":"502","city":[{"id":"50002","dur":6,"ename":"Toronto","rec":"6月－9月 ","tag":["泥泞约克","国家电视塔","公猪之城"],"img":"50002","coord":"-79.392812,43.729932","xr":"0.07535","yr":"0.06905","sc":"1"},{"id":"50003","dur":6,"ename":"Vancouver","rec":"6月－9月 ","tag":["多元文化","北方好莱坞"],"img":"50003","coord":"-123.115674,49.277915","xr":"0.0795","yr":"0.04055","sc":"1"},{"id":"50001","dur":6,"ename":"Montreal","rec":"6月－9月 ","tag":["北美巴黎","节日之城","蒙城"],"img":"50001","coord":"-73.569261,45.497371","xr":"0.07795","yr":"0.05345","sc":"1"},{"id":"50041","dur":6,"ename":"Ottawa","rec":"NULL","tag":["多元文化","首都"],"img":"50041","coord":"-75.686274,45.418615","xr":"0","yr":"0","sc":"1"},{"id":"50045","dur":6,"ename":"Quebec City","rec":"NULL","tag":["圣劳伦斯河","法语区","古城"],"img":"50045","coord":"-71.242389,46.815028","xr":"0","yr":"0","sc":"1"},{"id":"50046","dur":6,"ename":"Victoria City","rec":"NULL","tag":["温哥华岛","太平洋海岸","古城","花园城市"],"img":"50046","coord":"-123.365885,48.430125","xr":"0","yr":"0","sc":"1"},{"id":"50047","dur":6,"ename":"Calgary","rec":"NULL","tag":["班夫","落基山","雪山","铁路中心"],"img":"50047","coord":"-114.072782,51.052628","xr":"0","yr":"0","sc":"1"},{"id":"50048","dur":6,"ename":"Edmonton","rec":"NULL","tag":["寒冬","贾斯伯国家公园"],"img":"50048","coord":"-113.492575,53.553226","xr":"0","yr":"0","sc":"1"},{"id":"50050","dur":6,"ename":"Halifax","rec":"NULL","tag":["城堡山","大西洋","东海岸","新斯科舍","海港"],"img":"50050","coord":"-63.575969,44.652101","xr":"0","yr":"0","sc":"1"},{"id":"50055","dur":6,"ename":"Yellowknife","rec":"NULL","tag":["极光","西北领地","北极圈","大奴湖"],"img":"50055","coord":"-114.371229,62.453528","xr":"0","yr":"0","sc":"1"},{"id":"50044","dur":6,"ename":"Kingston","rec":"NULL","tag":["千岛","圣劳伦斯河","安大略湖"],"img":"50044","coord":"-76.491178,44.233893","xr":"0","yr":"0","sc":"1"},{"id":"50056","dur":6,"ename":"Gaspé","rec":"NULL","tag":["半岛","森林","冰天雪地","米瓜莎公园"],"img":"50056","coord":"-64.489211,48.840266","xr":"0","yr":"0","sc":"1"}],"visa":{"dc":"困难","time":"14个工作日"},"ename":"Canada","tag":["枫叶","落基山","英法殖民"],"img":"502"}]},{"id":"10","country":[{"id":"121","city":[{"id":"20071","dur":6,"ename":"Tokyo","rec":"NULL","tag":["江户","巨型都市","金融中心","时尚潮流","动漫圣地","2020年夏季奥运会","迪士尼乐园"],"img":"20071","coord":"139.732443,35.719298","xr":"0","yr":"0","sc":"1"},{"id":"20070","dur":6,"ename":"Osaka","rec":"NULL","tag":["西日本中心","大阪城","水都","关西方言","美食","传统表演","环球影城"],"img":"20070","coord":"135.498754,34.669501","xr":"0","yr":"0","sc":"1"},{"id":"20073","dur":6,"ename":"Fukuoka","rec":"NULL","tag":["日本门户","商业城市","博多","美食","购物"],"img":"20073","coord":"130.402697,33.596728","xr":"0","yr":"0","sc":"1"},{"id":"20072","dur":6,"ename":"Nagoya","rec":"NULL","tag":["中京圈","名古屋城","科技","丰田汽车","购物"],"img":"20072","coord":"136.918809,35.144747","xr":"0","yr":"0","sc":"1"},{"id":"20166","dur":6,"ename":"Sapporo","rec":"NULL","tag":["北海道中心","内陆城市","1972年冬奥会","冰雪节","白色恋人","美食"],"img":"20166","coord":"141.344062,43.071719","xr":"0","yr":"0","sc":"1"},{"id":"20154","dur":6,"ename":"Hiroshima","rec":"NULL","tag":["原子弹爆炸遗址","和平","工业城市","购物"],"img":"20154","coord":"132.460237,34.392697","xr":"0","yr":"0","sc":"1"},{"id":"20180","dur":6,"ename":"Naha","rec":"NULL","tag":["日本南端","琉球国","首里城","购物","美食"],"img":"20180","coord":"127.684240,26.211081","xr":"0","yr":"0","sc":"1"}],"visa":{"dc":"","time":""},"ename":"Japan","tag":["经济强国","文化大国","樱花之国","富士山","日本料理"],"img":"121"}]},{"id":"30","country":[{"id":"301","city":[{"id":"30010","dur":6,"ename":"Sydney","rec":"NULL","tag":["澳洲最古老城市","经济中心","蓝山","雪梨","罪犯流放地","葡萄酒"],"img":"30010","coord":"151.206961,-33.870216","xr":"0","yr":"0","sc":"1"},{"id":"30042","dur":6,"ename":"Melbourne","rec":"NULL","tag":["艺术之都","大洋路","亚拉河","咖啡文化"],"img":"30042","coord":"144.956020,-37.820698","xr":"0","yr":"0","sc":"1"},{"id":"30018","dur":6,"ename":"Brisbane","rec":"NULL","tag":["黄金海岸","布里斯班河"],"img":"30018","coord":"153.025380,-27.469749","xr":"0","yr":"0","sc":"1"},{"id":"30020","dur":6,"ename":"Cairns","rec":"NULL","tag":["大堡礁","热带雨林"],"img":"30020","coord":"145.770409,-16.921462","xr":"0","yr":"0","sc":"1"},{"id":"30019","dur":6,"ename":"Gold Coast","rec":"NULL","tag":["度假胜地","冲浪"],"img":"30019","coord":"153.428046,-28.017987","xr":"0","yr":"0","sc":"1"},{"id":"30041","dur":6,"ename":"Canberra","rec":"NULL","tag":["花园城市","政治中心"],"img":"30041","coord":"149.128676,-35.281860","xr":"0","yr":"0","sc":"1"},{"id":"30032","dur":6,"ename":"Perth","rec":"NULL","tag":["最孤独城市","矿都","天鹅河","玛格丽特河产酒区"],"img":"30032","coord":"115.856975,-31.953779","xr":"0","yr":"0","sc":"1"},{"id":"30025","dur":6,"ename":"Darwin","rec":"NULL","tag":["最北地","卡卡杜","日本空袭","军事基地","鳄鱼"],"img":"30025","coord":"130.838875,-12.455186","xr":"0","yr":"0","sc":"1"},{"id":"30027","dur":6,"ename":"Alice Springs","rec":"NULL","tag":["红色中心","土著文化","斯图尔特","探险","死亡中心"],"img":"30027","coord":"133.878957,-23.700665","xr":"0","yr":"0","sc":"1"},{"id":"30039","dur":6,"ename":"Hobart","rec":"NULL","tag":["塔省首府","萨拉曼卡集市"],"img":"30039","coord":"147.326730,-42.881809","xr":"0","yr":"0","sc":"1"},{"id":"30035","dur":6,"ename":"Broome","rec":"NULL","tag":["珍珠生产中心","海布尔海滩","金伯利"],"img":"30035","coord":"122.239807,-17.959086","xr":"0","yr":"0","sc":"1"},{"id":"30030","dur":6,"ename":"Adelaide","rec":"NULL","tag":["葡萄酒","艺术","袋鼠岛","霍顿汽车"],"img":"30030","coord":"138.597831,-34.929901","xr":"0","yr":"0","sc":"1"}],"visa":{"dc":"","time":""},"ename":"Australia","tag":["原始自然","原住民文化","热带度假","海鲜美食","潜水"],"img":"301"}]}],
            jid: `${username}@120.132.66.186/${cmuuid}`,
            jwd: jwd
              }
  	      };
  }
  else if(id =='gcm002'){
    let serviceJid = 'qinguangyu@120.132.66.186/service';
    if(cmuuid !== 'C2392D21-1E07-4E8F-839C-5019820550CD'){
      serviceJid = 's2@120.132.66.186/service'
    }

  	this.body = {
  		error:{
  			error_id :0,
  			error_str: ''
  		},
  		data: {
  			jid: serviceJid,
  			avator :'',
  			nickname :'guangyu',
  			no :'001',
  			star:'5'
  		}

  	};
  }

});
module.exports = router;
