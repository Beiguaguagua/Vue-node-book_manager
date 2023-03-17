const db = require('../db/index.js')
// 密码的加密和解密
const bcyptjs = require('bcryptjs')
const { use } = require('../router/tea_user')
const jwt = require('jsonwebtoken')
const config = require('../config')
// 管理员登录
exports.loginUser = (req,res)=>{
  const userinfo = req.body
  const sql = 'select * from bm_management where username=?'
  db.query(sql,userinfo.username,(err,results)=>{
    if(err) return console.log(err)
    if(results.length !== 1) return res.cc('登录失败',1)
    const compareResult = bcyptjs.compareSync(userinfo.password, results[0].password)
    if(!compareResult) return res.cc('登录失败--密码不正确,请重新输入',1)
    const user = {...results[0],password:''}
    // 设置独有的token
    const tokenStr = jwt.sign(user,config.jwtSecretKey,{expiresIn:config.expiresIn})
    res.send({
      status: 0,
      msg:'登录成功',
      data:results,
      token:'Bearer ' + tokenStr
    })
  })
}
// 管理员修改学生密码
exports.changeStuPwd = (req,res)=>{
  const userinfo = req.body
  const sqlStr = 'update bm_users set password=? where username=?'
  const password = bcyptjs.hashSync(userinfo.password,10)
  db.query(sqlStr,[password,userinfo.username],(err,results)=>{
      if(err) return res.cc(err)
      if(results.affectedRows !== 1) return res.cc('更新密码失败')
      res.send({
          status:0,
          msg:'修改成功'
      })
  })
}
// 管理员上架和下架图书
exports.putAwayBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select * from bm_book'
  db.query(sql,(err,resultsOne)=>{
    if(err) {return res.cc(err)}
    else{return res.send({status:0,msg:'查询成功',data:resultsOne})}
  })
}
exports.putawayBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select * from bm_book where book_name=?' 
  db.query(sql,bookinfo.bookname,(err,results)=>{
    if(results[0].is_putaway === '上架中'){
      const sqlStr = 'update bm_book set ? where book_name=?'
      db.query(sqlStr,[{is_putaway:'下架中'},bookinfo.bookname],(err,results)=>{
        if(err) return res.cc(err)
        res.send({
          status:0,
          msg:'下架成功',
          data:results
        })
      })
    }else if(results[0].is_putaway === '下架中'){
      const sqlStr = 'update bm_book set ? where ?'
      db.query(sqlStr,[{is_putaway:'上架中'},{book_name:bookinfo.bookname}],(err,results)=>{
        if(err) return console.log(err)
        res.send({
          status:0,
          msg:'上架成功',
          data:results
        })
      })
      
    }
  })
}
// 新书入库
exports.addNewBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select * from bm_book where book_name=?'
  db.query(sql,bookinfo.bookname,(err,results)=>{
    if(err) return res.cc(err)
    // results是一个数组,不能直接取出并判断是否存在该book_name
    if(results[0] === undefined){
      const sqlStr = 'insert into bm_book set ?'
      db.query(sqlStr,{
        // 图书名字
        book_name:bookinfo.bookname,
        
        book_author:bookinfo.bookauthor,
        // 图书出版社
        book_publish:bookinfo.bookpublish,
        // 图书页数
        book_page:bookinfo.bookpage,
        // 图书发布时间
        book_publisher:bookinfo.bookpublisher,
        // 图书目录
        book_catalog:bookinfo.bookcatalog,
        // 图书内容简介
        book_digest:bookinfo.bookdigest,
        // 图书状态(已借出或者未借出)
        book_stats:'未借出',
        // 图书借出开始时间
        book_start:'',
        // 图书借出结束时间
        book_end:'',
        // 借书者
        book_borrower:'',
        // 是否上架(上架中/下架中)
        is_putaway:'下架中'
      },(err,results)=>{
        if(err) return res.cc(err)
        res.send({
          status:0,
          msg:'添加新图书成功-----Success'
        })
      })
    }else{
      res.send({
        status:1,
        msg:'已经有该书籍了,不能重复添加----False'
      })
    }
  })
}
// 管理员发布公告
exports.postNotice = (req,res)=>{
  const notice = req.body
  const sql = 'insert into bm_notice set ?'
  db.query(sql,{
    notice_content:notice.content,
    notice_time:notice.time,
    notice_title:notice.title,
    notice_publisher:notice.publisher,
    is_delete:'0',
  },(err,results)=>{
    if(err) return console.log(err)
    res.send({
      status:0,
      msg:'发布成功'
    })
  })
}
// 管理员删除公告
exports.delNotice = (req,res)=>{
  const notice = req.body
  const sql = 'update bm_notice set is_delete="1" where notice_title=?'
  db.query(sql,notice.title,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      msg:'删除成功'
    })
  })
}
// 展示公告
exports.showNotice = (req,res)=>{
  const notice = req.body
  const sql = 'select * from bm_notice where is_delete="0"'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      msg:'展示成功',
      data:results
    })
  })
}
// 查看单一公告
exports.showNoticeOne =(req,res)=>{
  const notice = req.body
  const sql = 'select * from bm_notice where notice_title=? And is_delete="0"'
  db.query(sql,notice.title,(err,results)=>{
    if(err) return res.cc(err)
    if(results[0] !== undefined){
      res.send({
        status:0,
        msg:'查看成功',
        data:results
      })
    }else{
      res.send({
        status:0,
        msg:'该公告已经删除',
        data:results
      })
    }
  })
}
// 展示学生情况
exports.showStu = (req,res)=>{
  const userinfo = req.body
  const sql = 'select * from bm_users'
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      msg:'查看成功',
      data:results
    })
  })
}