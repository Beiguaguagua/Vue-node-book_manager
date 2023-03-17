const mysql = require('mysql')

const db = mysql.createPool({
  // 域名地址
  host: '127.0.0.1',

  // 数据库用户名
  user: 'root',

  // 数据库密码
  password: '123456',

  // 数据库
  database: 'my_db_03',
})

// 对外共享
module.exports = db

