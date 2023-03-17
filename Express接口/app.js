const express = require('express')

const app = express()

const cors = require('cors')


app.use(express.urlencoded({ extended: false}))

// 简化res.send({})的操作

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "");
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
  });
app.use((req,res,next)=>{
  res.cc = function(err,status=1){
    res.send({
      status,
      msg: err instanceof Error ? err.msg : err
    })
  }
  next()
})
const expressJWT = require('express-jwt')
const config = require('./config')


app.use(expressJWT({secret:config.jwtSecretKey}).unless({path:[/^\/api/]}))
app.use(cors())
// 导入登录注册模块
const Stu_userRouter = require('./router/stu_user')
const Mana_userRouter = require('./router/tea_user.js')
// 导入增删改查书籍的模块
const bookRouter = require('./router/book')
// 学生专用api
app.use('/api/stu',Stu_userRouter)
// 管理员专用api
app.use('/api/tea',Mana_userRouter)
// 增删改查-书籍
app.use('/api/book',bookRouter)
app.listen(80,()=>{
  console.log('server running at http://127.0.0.1');
})