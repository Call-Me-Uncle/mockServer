process.env.root = __dirname;
const app = require('koa')();
const hbs = require('koa-hbs');
const stac = require('koa-static');
const bodyParser = require('koa-bodyparser');

const logger = require('koa-logger');
const responseTime = require('koa-response-time');

const routers = require('./routers');

app.use(stac('./public'));
app.use(bodyParser());
app.use(hbs.middleware({
  viewPath: './views',
  extname: '.html',
}));
app.use(responseTime());
app.use(logger());
routers(app);


app.on('error', (err) => {
  console.log('error', err);
});
// Start server
app.listen(8090, () => {
  console.log('Koa server listening on 8090');
});
