const router = require('koa-router')();
const user = require('./user_router.js');

router.use(user.routes(), user.allowedMethods())

module.exports = router;