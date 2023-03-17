const db = require('../db/index.js')
// 展示书籍
exports.showBook = (req,res)=>{
  const sql = 'select * from bm_book where is_putaway="上架中" '
  db.query(sql,(err,results)=>{
    if(err) return res.cc(err)
    return res.send({
      status:0,
      msg:'展示成功',
      data:results
    })
  })
}
// 通过图书名字去查询相关信息
exports.showBookAoboutName = (req,res)=>{
  const sql ='select * from bm_book where book_name=?'
  const userinfo = req.body
  db.query(sql,userinfo.bookname,(err,results)=>{
    if(err) return res.cc(err)
    res.send({
      status:0,
      msg:'查询成功',
      data:results
    })
  })
}
// 添加图书
exports.addBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select * from bm_book where book_name=?'
  db.query(sql,bookinfo.bookname,(err,results)=>{
    if(err) return console.log(err)
    if(results.length > 0) return res.cc('已经存在该书籍')
    if(results.length != 1){
      const sqlStr = 'insert into bm_book set ?'
      db.query(sqlStr,
        {book_name:bookinfo.bookname,
          book_author:bookinfo.bookauthor,
          book_publish:bookinfo.bookpublish,
          book_page:bookinfo.bookpage,
          book_publisher:bookinfo.bookpublisher,
          book_catalog:bookinfo.bookcatalog,
          book_digest:bookinfo.bookdigest,
          book_stats:'0'
        },
        (err,results)=>{
          if(err) return console.log(err)
          if(results.affectedRows !== 1) return res.cc('添加失败',1)
          res.send({
            status:0,
            msg:'添加成功'
          })
        })
    }
  })
}
// 删除图书
exports.delBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select book_stats from bm_book where book_name=?'
  db.query(sql,bookinfo.bookname,(err,results)=>{
    if(err) console.log(err)
    const data_stats = results[0].book_stats
    if(data_stats === 0){
      const sqlStr = 'update bm_book set book_stats="已借出" where book_name=?'
      db.query(sqlStr,bookinfo.bookname,(err,results)=>{
        if(err) return console.log(err);
          res.send({
            status:0,
            msg:'修改成功'
          })
        })
    }
  })
}
// 模糊查询
exports.searchBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'select * from bm_book where book_name=?'
  db.query(sql,bookinfo.bookname,(err,results)=>{
    if(err){
      res.cc(err)
    }else{
      const sqlStr = 'select * from bm_book where book_name like ?'
      const data_book = '%'+bookinfo.bookname+'%'
      db.query(sqlStr,[data_book],(err,results)=>{
        if(err) return res.cc(err)
        for(let i = 0 ; i<results.length;i++){
          if(results[i].is_putaway === "下架中"){
            return res.send({
              status:1,
              msg:'该图书不存在或者下架中'
            })
          }else{
            return res.send({
              status:0,
              msg:'查询成功',
              data:results
            })
          }
        }
      })
    }
  })
}
// 修改书籍
exports.changeBook = (req,res)=>{
  const bookinfo = req.body
  const sql = 'update bm_book set ? where book_name=?'
  db.query(sql,[{book_name:bookinfo.bookname,
    book_author:bookinfo.bookauthor,
    book_publish:bookinfo.bookpublish,
    book_page:bookinfo.bookpage,
    book_publisher:bookinfo.bookpublisher,
    book_catalog:bookinfo.bookcatalog,
    book_digest:bookinfo.bookdigest,
    book_stats:bookinfo.bookstats,
    book_start:bookinfo.bookstart,
    book_end:bookinfo.bookend,
    book_borrower:bookinfo.bookborrower
  },bookinfo.bookname],(err,results)=>{
    if(err) return console.log(err)
    res.send({
      status:0,
      msg:'修改成功',
      data:results
    })
  })
}