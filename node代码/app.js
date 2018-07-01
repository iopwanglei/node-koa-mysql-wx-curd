const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const routers = require('./router/index');


// 配置ctx.body解析中间件
app.use(bodyParser())

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000);