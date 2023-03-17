const db = require('../db/index.js')
// 密码的加密和解密
const bcyptjs = require('bcryptjs')
const { use } = require('../router/stu_user')
const jwt = require('jsonwebtoken')
const config = require('../config')
// 学生登录
exports.loginUser = (req,res)=>{
  const userinfo = req.body
  console.log(userinfo)
  const sql = 'select * from bm_users where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
    if(err) return console.log(err)
    if(results.length !== 1) return res.cc('登录失败',1)
    const compareResult = bcyptjs.compareSync(userinfo.password, results[0].password)
    if(!compareResult) return res.cc('登录失败--密码不正确,请重新输入',1)
    const user = {...results[0],password:''}
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
    const sqlStr = 'update bm_user set is_login=? where username=?'
    res.send({
      status:0,
      msg:'登录成功',
      data:results,
      token:'Bearer ' + tokenStr
    })
    if(results[0].is_login === "离线"){
      const sqlStr = 'update bm_users set is_login="在线" where username=?'
      db.query(sqlStr,userinfo.username,(err,results)=>{
        if(err) return console.log(err)
      })
    }else{
      return res.send({
        status:1,
        msg:'该账号已经登录,请勿重复登录'
      })
    }
  })
}
// 学生离线
exports.quitUser = (req,res)=>{
  const userinfo = req.body
  const sql = 'update bm_users set is_login="离线" where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      msg:'退出成功',
    })
  })
}
// 学生注册
exports.regUser = (req,res)=>{
  const userinfo = req.body
  console.log(userinfo)
  const sql = 'select * from bm_users where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
    if(err) return res.cc(err)
    if(results.length>0) return res.cc('用户名被占用',1)
    if(results.length != 1){
    // 加密密码
    userinfo.password = bcyptjs.hashSync(userinfo.password,10)
    // 执行sql
        const sqlStr = 'insert into bm_users set ?'
        db.query(sqlStr,{username:userinfo.username,password:userinfo.password,stu_num:userinfo.stu_num,is_login:"离线"},(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('注册用户失败',1)
            return res.send({status:0,msg:'注册成功'})
        })  
    }
})
}