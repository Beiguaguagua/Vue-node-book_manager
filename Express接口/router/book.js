const express = require('express')

const router = express.Router()


const bookHandler = require('../router_handler/book.js')


router.post('/show',bookHandler.showBook)

router.post('/add',bookHandler.addBook)

router.post('/del',bookHandler.delBook)

router.post('/change',bookHandler.changeBook)

router.post('/showone',bookHandler.showBookAoboutName)

router.post('/search',bookHandler.searchBook)


module.exports = router