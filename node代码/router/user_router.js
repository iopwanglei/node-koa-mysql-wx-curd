const router = require('koa-router')();
const user = require('../servse/user_servse.js');
// 增删改查
const routers = router
    .post('/add', user.selectData)
    .get('/search', user.searchData)
    .get('/editSelect/:id', user.editSelectData)
    .post('/editNow', user.editNow)
    .get('/deleteData/:id', user.deleteData);
module.exports = routers;