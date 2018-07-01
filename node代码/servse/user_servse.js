const query = require('../config/mysql.js');
let { formatTime } = require('../util/util.js');
// 新增插入数据查询条件 
let insert = 'INSERT INTO `goods` (`oid`, `uid`, `name`, `buytime`, `time`) VALUES (?, ?, ?, ?, ?)';
// 升序查询
let desc = ` SELECT * from goods ORDER BY time DESC`;
let oid;
const user = {
    // 新增数据
    async selectData(ctx) {
        let data = ctx.request.body;
        let time = formatTime(new Date(Date.now()));
        let userAddParams = [data.oid,data.uid,data.name,data.buytime,time];
        if(Object.keys(data).length > 0) {
            try {
                await query(insert, userAddParams);
                let newData = await query(desc);
                ctx.response.body = {
                  status: 200,
                  description: 'ok',
                  result: newData
                }
              } catch(err) {
                    ctx.response.body = {
                        status: 400
                    }
              }
          }
      },
    // 查询数据
    async  searchData (ctx) {
        try {
            let newData = await query(desc);
            ctx.response.body = {
              status: 200,
              description: 'ok',
              result: newData
            }
          } catch(err) {
                ctx.response.body = {
                    status: 400
                }
          }
    },
    async editSelectData (ctx) {
        // 单个查询
        let select = `select * from goods where oid = ${ctx.params.id};`
        oid = ctx.params.id;
        try {
            let newData = await query(select);
            ctx.response.body = {
              status: 200,
              description: 'ok',
              result: newData[0]
            }
          } catch(err) {
                ctx.response.body = {
                    status: 400
                }
          }
    },
    async editNow (ctx) {
        let data = ctx.request.body
        let update = `UPDATE goods SET oid='${data.oid}',uid='${data.uid}',name='${data.name}',buytime='${data.buytime}' WHERE oid=${oid};`
        try {
            let newData = await query(update);
            ctx.response.body = {
              status: 200,
              description: 'ok',
              result: newData.oid
            }
          } catch(err) {
                ctx.response.body = {
                    status: err
                }
          }
    },
    async deleteData (ctx) {
        console.log()
        let deleteId = `DELETE FROM goods WHERE oid=${ctx.params.id};`
        try {
            let newData = await query(deleteId);
            ctx.response.body = {
              status: 200,
              description: 'ok',
              result: "成功"
            }
          } catch(err) {
                ctx.response.body = {
                    status: 400
                }
          }
    }
}
  
module.exports = user;