const mysql = require('mysql');
// 创建连接池
let pool = mysql.createPool({
  host: '127.0.0.1', // 主机
  user: 'root',        //  mysql认证用户名
  password: '123456', //   mysql用户密码
  port: '3306',       //    端口
  database: 'db_wl'
});

let query = ( sql, values ) => {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, res) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( res )
          }
          connection.release()
        })
      }
    })
  })
}

module.exports = query;